import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmployeesService } from 'src/app/content/service/employees/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.scss']
})
export class EmployeesEditComponent {

    //Carga de selects
    public formAllData: FormGroup;
    public hoteles: any[];
    public generos: any[];
    public documentos: any[];
    public idEmpleado: number; // Variable para almacenar el ID del empleado

    constructor(
        private FB: FormBuilder,
        private spinner: NgxSpinnerService,
        private employeeService: EmployeesService,
        private router: Router,
        private route: ActivatedRoute
    ){}

    ngOnInit(): void {
        this.buildForm();
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.idEmpleado = +id; // Almacena el ID del empleado
            this.editEmployee(this.idEmpleado);
        }
    }

    buildForm() {
        this.formAllData = this.FB.group({
            nombres: ['', Validators.required],
            apellidos: ['', Validators.required],
            tipo_documento_id: [null, Validators.required],
            numero_documento: ['', Validators.required],
            celular: ['', Validators.required],
            genero_id: [null, Validators.required],
            hotel_id: [null, Validators.required]
        });
    }

    editEmployee(id: number) {
        this.spinner.show();
        // Primero, obtén todos los datos para llenar los campos de selección
        this.employeeService.getDataCreate().subscribe(
            (selectData: any) => {
                this.hoteles = selectData.hoteles;
                this.generos = selectData.generos;
                this.documentos = selectData.tiposDocumento;
                // Luego, obtén los datos del empleado
                this.employeeService.getEmployee(id).subscribe(
                    (response: any) => {
                        this.spinner.hide();
                        // Encuentra los objetos que corresponden a los IDs
                        let genero = this.generos.find(g => g.id === response.genero_id);
                        let tipoDocumento = this.documentos.find(t => t.id === response.tipo_documento_id);
                        let hotel = this.hoteles.find(h => h.id === response.hotel_id);
                        // Llena el formulario con los datos
                        this.formAllData.patchValue({
                            'nombres': response.nombres,
                            'apellidos': response.apellidos,
                            'tipo_documento_id': tipoDocumento,
                            'numero_documento': response.numero_documento,
                            'celular': response.celular,
                            'genero_id': genero,
                            'hotel_id': hotel
                        });
                    },
                    (error) => {
                        console.log('Error: ', error);
                    }
                );
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    updateEmployee() {
        this.spinner.show();
        let dataEmployee = this.formAllData.value;
        // Asigna los IDs correspondientes
        dataEmployee.tipo_documento_id = dataEmployee.tipo_documento_id.id;
        dataEmployee.genero_id = dataEmployee.genero_id.id;
        dataEmployee.hotel_id = dataEmployee.hotel_id.id;
        dataEmployee.id = this.idEmpleado; // Usa el ID del empleado

        this.employeeService.updateEmployee(dataEmployee).subscribe(
            (response: any) => {
                this.spinner.hide();
                if (response.code == 'success') {
                    Swal.fire({
                        title: 'Éxito',
                        text: 'Empleado actualizado exitosamente.',
                        icon: 'success',
                    }).then(() =>{this.router.navigate(['/dashboard/employees']);});

                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Error al actualizar el empleado.',
                        icon: 'error',
                    });
                }
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    submitUpdate() {
        if (this.formAllData.valid) {
            this.updateEmployee();
        }
    }

}

