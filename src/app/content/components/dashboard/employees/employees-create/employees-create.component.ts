import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmployeesService } from '../../../../service/employees/employees.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.scss']
})
export class EmployeesCreateComponent {

    //Carga de selects
    public formAllData: FormGroup;
    public hoteles: any[];
    public generos: any[];
    public documentos: any[];

    constructor(
        private FB: FormBuilder,
        private spinner: NgxSpinnerService,
        private employeeService: EmployeesService,
        private router: Router
    ){}

    ngOnInit(): void {
        this.buildForm();
        this.getSelectCreate();
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

    getSelectCreate(){
        this.employeeService.getDataCreate().subscribe(
            (response: any) => {
                this.hoteles = response.hoteles;
                this.generos = response.generos;
                this.documentos = response.tiposDocumento;
            },
            (error) => {
                console.error(error);
            }
        );
    }

    empleadoCreate() {
        this.spinner.show();

        let dataEmpleado = this.formAllData.value;
        dataEmpleado.hotel_id = dataEmpleado.hotel_id['id'];
        dataEmpleado.genero_id = dataEmpleado.genero_id['id'];
        dataEmpleado.tipo_documento_id = dataEmpleado.tipo_documento_id['id'];
        dataEmpleado.estado = 1;

        this.employeeService.createEmployee(dataEmpleado).subscribe(
            (response: any) => {
                this.spinner.hide();
                if (response.code == 'success') {
                    Swal.fire({
                        title: 'Exito',
                        text: 'Empleado creado exitosamente.',
                        icon: 'success',
                    }).then(() =>{this.router.navigate(['/dashboard/employees']);});
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Error al crear el empleado.',
                        icon: 'error',
                    });
                }
            },
            (error) => {
                this.spinner.hide();
                if (error.status === 422 && error.error.tipo_documento_id) {
                    Swal.fire({
                        title: 'Error',
                        text: 'El documento ya se encuentra registrado.',
                        icon: 'error',
                    });
                } else {
                    console.log('Error: ', error);
                }
            }
        );
    }

}
