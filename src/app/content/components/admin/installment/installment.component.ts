import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Abonos } from 'src/app/content/models/admin/installments.model';
import { InstallmentsService } from 'src/app/content/service/installments/installments.service';
import Swal from 'sweetalert2';
import { Config } from '../../../storage/config';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/content/service/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.scss']
})
export class InstallmentComponent {
    public permisoEliminar = AuthService.hasPermission(['administracion.abono.eliminar']);

    // Variables index
    public installmentData: Abonos[];
    public loadingTable: boolean = false;

    // Varaibles PDF
    private baseUrl: string;
    private token: string;

    // Variables paginador
    public pageActual: number = 1;
    public ultimaPage: number = 1;
    public disablePageLeft: boolean = false;
    public disablePageRight: boolean = false;
    public first: number = 0;
    public rows: number = 8;
    public pageCount: number = 10;
    public countRegisters: number;
    public formSearch: FormGroup;

    constructor(
        private installment: InstallmentsService,
        private spinner: NgxSpinnerService,
        private FB: FormBuilder,
        private appComponent: AppComponent,
        private layoutService: LayoutService,
    ){}

    ngOnInit(): void {
        this.buildForm();
        this.getIndex();
        this.baseUrl = Config.url;
        this.token = this.appComponent.getToken();
    }

    buildForm() {
        this.formSearch = this.FB.group({
            search: ['', []],
        });
    }

    getEstado(estado: number): string {
        switch (estado) {
            case 1:
                return 'Activo';
            case 0:
                return 'Anulado';
            case 2:
                return 'Facturado';
            default:
                return 'Desconocido';
        }
    }

    getIndex(search: string = '', pageCount: number = this.pageCount, page: number = 1) {
        this.spinner.show();
        this.loadingTable = true;
        this.installment.getAll(pageCount, search, page).subscribe(
            (response: any) => {
                this.loadingTable = false;
                this.installmentData = response.data;
                this.ultimaPage = response.last_page;
                this.countRegisters = response.total;
                if (response.total > pageCount) {
                    this.disablePageRight = true;
                }
                this.validatePage();
                this.spinner.hide();
            },
            (error) => {
                console.error('Error: ', error);
            }
        );
    }

    confirmDelete(id:number){
        Swal.fire({
          title: "¿Estas seguro que deseas anular este abono?",
          text: "Ten cuidado esta acción no se prodrá reversar",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, Confirmar",
          cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                this.spinner.show();
                this.installment.deleteInstallments({id}).subscribe(
                (response: any) => {
                    this.spinner.hide();
                    if(response.code == "success"){

                        Swal.fire({
                            title: "Exito",
                            text: "Abono anulado exitosamente.",
                            icon: "success"
                        });

                        this.getIndex();
                        this.layoutService.reloadComponent();
                    }  else if(response.code == "warning") {
                        Swal.fire({
                            title: "Advertencia",
                            text: response.error,
                            icon: "warning"
                        });
                    }else {

                        Swal.fire({
                            title: "Error",
                            text: "Error al anular el abono." ,
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

    // Generar PDF
    confirmAbrirPdfAbono(abono_id: number) {
        let url = this.baseUrl + '/facturaAbonoPdf/' + abono_id + '?token=' + this.token;
        window.open(url, '_blank');
    }

    // Buscador

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


    onPage(event) {
        this.pageCount = event['rows'];
        this.getIndex('', this.pageCount);
    }

        //Paginador

    onPageChange(event) {
        this.first = event.first;
        this.rows = event.rows;
    }


    leftTable() {
        this.pageActual = this.pageActual - 1;
        this.getIndex('', this.pageCount, this.pageActual);
        this.validatePage();
    }

    rightTable() {
        this.pageActual = this.pageActual + 1;
        this.getIndex('', this.pageCount, this.pageActual);
        this.validatePage();
    }

    validatePage() {
        if (this.pageActual == 1) {
            this.disablePageLeft = false;
        }

        if (this.pageActual > 1) {
            this.disablePageLeft = true;
        }

        if (this.ultimaPage == this.pageActual) {
            this.disablePageRight = false;
        }

        if (this.ultimaPage > this.pageActual) {
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
