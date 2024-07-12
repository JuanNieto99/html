import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmployeesService } from 'src/app/content/service/employees/employees.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/content/service/auth.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
    public permisoCrear = AuthService.hasPermission(['administracion.empleado.crear']);
    public permisoActualizar = AuthService.hasPermission(['administracion.empleado.editar']);
    public permisoEliminar = AuthService.hasPermission(['administracion.empleado.eliminar']);

    public employeesData: any[];
    public loadingTable: boolean = false;

    //Paginador y buscador
    public pageCount: number = 10;
    public countRegisters: number;
    public first:number = 0;
    public rows:number = 8;
    public pageActual:number = 1;
    public ultimaPage:number = 1;
    public disablePageLeft: boolean = false;
    public disablePageRight: boolean = false;
    public formSearch: FormGroup;

    constructor(
        private FB: FormBuilder,
        private spinner: NgxSpinnerService,
        private employeeService: EmployeesService,
        private router: Router,
    ){}

    ngOnInit(): void {
        this.buildForm();
        this.getIndex();
    }

    onPage(event) {
        this.pageCount = event['rows'];
        this.getIndex('', this.pageCount);
    }

    redirectToCreate() {
        this.router.navigate(['dashboard/employees/employees-create']);
    }

    redirectToEdit(id: number) {
        this.router.navigate(['dashboard/employees', id, 'edit']);
    }

    buildForm() {
        this.formSearch = this.FB.group({
            search: ['', []],
        });
    }

    getIndex(search:string = '', pageCount:number = this.pageCount, page: number = 1) {
        this.spinner.show();
        this.loadingTable = true;
        this.employeeService.getAll(pageCount, search, page).subscribe(
            (response: any) => {
                this.loadingTable = false;
                this.employeesData = response.data;
                this.countRegisters = response.total;
                this.ultimaPage = response.last_page;
                if(response.total>pageCount){
                    this.disablePageRight = true;
                }
                this.validatePage();
                this.spinner.hide();
            },
            (error) => {
                console.log('Error: ', error);
                this.spinner.hide();
            }
        );
    }

    // Eliminar
    confirmDelete(id: number) {
        Swal.fire({
            title: "¿Estás seguro de que deseas eliminar este empleado?",
            text: "Ten cuidado, esta acción no se podrá revertir",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, Confirmar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                this.spinner.show();
                this.employeeService.deleteEmployee({ id }).subscribe(
                    (response: any) => {
                        this.spinner.hide();
                        if (response.code == "success") {

                            Swal.fire({
                                title: "Éxito",
                                text: "Empleado eliminado exitosamente.",
                                icon: "success"
                            });

                            this.getIndex();

                        } else {

                            Swal.fire({
                                title: "Error",
                                text: "Error al eliminar el empleado.",
                                icon: "error"
                            });

                        }

                    },
                    (error) => {
                        console.log('Error: ', error);
                    }
                );
            }
        });
    }

    //Buscador

    searchInput(){
        let search = this.formSearch.get('search').value;
        this.pageActual = 1;
        if(search==""){
          this.getIndex(search);
        }

    }

    search(){
        let search = this.formSearch.get('search').value;
        this.getIndex(search);
    }

    //Paginador

    onPageChange(event){
        this.first = event.first;
        this.rows = event.rows;
    }

    leftTable(){
        this.pageActual = this.pageActual - 1;
        this.getIndex('', this.pageCount, this.pageActual);
        this.validatePage();
    }

    rightTable(){
        this.pageActual = this.pageActual + 1;
        this.getIndex('', this.pageCount, this.pageActual);
        this.validatePage();
    }

    validatePage(){
        if(this.pageActual == 1 ){
            this.disablePageLeft = false;
        }

        if(this.pageActual > 1 ){
            this.disablePageLeft = true;
        }

        if(this.ultimaPage == this.pageActual){
            this.disablePageRight = false;
        }

        if(this.ultimaPage > this.pageActual){
            this.disablePageRight = true;
        }
    }

    buscarPorTecla($event){
        //console.log($event)
        if($event.code == 'Enter'){  
            this.search();
        }
    }
}
