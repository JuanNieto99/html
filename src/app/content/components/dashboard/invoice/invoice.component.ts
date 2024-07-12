import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

import { Factura } from 'src/app/content/models/dashboard/invoice.model';
import { AuthService } from 'src/app/content/service/auth.service';
import { InvoiceService } from 'src/app/content/service/invoice/invoice.service';
import { Config } from '../../../storage/config';
import { AppComponent } from 'src/app/app.component';

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
    public permisoCrear = AuthService.hasPermission(['administracion.facturacion.crear']); 
    public permisoEliminar = AuthService.hasPermission(['administracion.facturacion.eliminar']);

    
    public roomsData: any[];
    public loadingTable: boolean = false;
    public factura: Factura[];
    public pageCount: number = 10;
    public countRegisters: number;
    public ultimaPage: number = 1;
    public disablePageRight: boolean = false;
    public pageActual: number = 1;
    public disablePageLeft: boolean = false;
    public formSearch: FormGroup;
    private baseUrl: string;
    private token: string;

    constructor(
        private invoiceService: InvoiceService,
        private spinner: NgxSpinnerService,
        private appComponent: AppComponent,
        private FB: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.buildForm();
        this.getIndex();
        this.baseUrl = Config.url; 
        this.token = this.appComponent.getToken();
    }

    buildForm(){
        this.formSearch = this.FB.group({
          search: ['',[]],
        });
    }

    getIndex(
        search: string = '',
        pageCount: number = this.pageCount,
        page: number = 1,
    ) {
        this.spinner.show();
        this.loadingTable = true;
        this.invoiceService.getAll(pageCount, page, search).subscribe(
            (response: any) => {
                this.loadingTable = false;
                this.roomsData = response.data;
                this.countRegisters = response.total;
                this.ultimaPage = response.last_page;

                if (response.total > pageCount) {
                    this.disablePageRight = true;
                }
                this.validatePage()
                this.spinner.hide();
            },
            (error) => {
                console.log('Error', error);

                this.spinner.hide();
            }
        );
    }

    //Buscador
    searchInput() {
       
        let search = this.formSearch.get('search').value;
        this.pageActual = 1;
        if (search == '') {
            console.log("ads")
            this.getIndex(search);
        }
    }

    search() {
        let search = this.formSearch.get('search').value;
        this.getIndex(search);
    }

    //Anular factura
    confirmDelete(id: number) {
        Swal.fire({
            title: 'Quieres anular esta factura?',
            text: 'Ten cuidado, esta acción no se puede revertir',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, Confirmar',
            cancelButtonText: 'Cancelar',
        }).then(result => {
            if (result.isConfirmed) {
                this.spinner.show();
                this.invoiceService.anular({ id }).subscribe(
                    (response: any) => {
                        this.spinner.hide();
                        if (response.code == 'success') {
                            Swal.fire({
                                title: 'Exito',
                                text: 'Factura anulada exitosamente',
                                icon: 'success'
                            });
                            this.getIndex()
                        } else {
                            Swal.fire({
                                title: 'Error',
                                text: 'Error al anular la factura',
                                icon: 'error'
                            });
                        }
                    },
                    (error) => {
                        console.log('Error: ', error)
                    }
                )
            }
        })
    }

    //Paginador
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

    confirmAbrirPdf(factura_id:number){
        let url =  this.baseUrl+'/facturaRemisionPdf/'+factura_id+'?token='+this.token;
        window.open(url, '_blank');
    }


    buscarPorTecla($event){
        //console.log($event)
        if($event.code == 'Enter'){  
            this.search();
        }
    }

    onPage(event) {
        this.pageCount = event['rows'];
        this.getIndex('', this.pageCount);
    }
}
