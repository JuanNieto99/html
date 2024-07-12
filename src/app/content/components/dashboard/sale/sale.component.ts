import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { SaleService } from '../../../service/sale/sale.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Config } from '../../../storage/config';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent {
    public salesData: any[];
    public loadingTable: boolean = false;

    // Variables formularios
    public formCreateSales: FormGroup;
    public formSearch: FormGroup;
    public formEditSales: FormGroup;

    // Variables paginador
    public pageCount: number = 10;
    public countRegisters: number;
    public pageActual:number = 1;
    public ultimaPage:number = 1;
    public disablePageLeft: boolean = false;
    public disablePageRight: boolean = false;
    public first:number = 0;
    public rows:number = 8;
    private baseUrl: string;
    private token: string;

    constructor(
        private FB: FormBuilder,
        private spinner: NgxSpinnerService,
        private SaleService: SaleService,
        private router: Router,
        private layoutService: LayoutService,
        private appComponent: AppComponent,
    ) {}

    ngOnInit(): void {
        this.buildForm();
        this.getIndex();
        this.baseUrl = Config.url; 
        this.token = this.appComponent.getToken(); 
    };

    buildForm() {
        this.formSearch = this.FB.group({
            search: ['', []],
        });
    };

    //Redirigir a ventas
    redirectToCrearVenta() {
        this.router.navigate(['dashboard/dashboardSell/sale-detail']);
    };

    // Cambia el estado para facil visualización
    getEstado(estado_id: number): string {
        switch (estado_id) {
            case 1:
                return 'Activa';
            case 0:
                return 'Anulada';
            default:
                return 'Desconocido';
        }
    }

    // Obtiene todas las ventas
    getIndex(search:string = '', pageCount:number = this.pageCount, page: number = 1) {
        this.spinner.show();
        this.loadingTable = true;
        this.SaleService.getAll(pageCount, search, page).subscribe(
            (response: any) => {
                this.loadingTable = false;
                this.salesData = response.data;
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
    };

    //Anular venta
    confirmDelete(id: number) {
        Swal.fire({
            title: '¿Estas seguro que deseas anular esta venta?',
            text: 'Ten cuidado esta acción no se prodrá reversar',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, Confirmar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                this.spinner.show();
                this.SaleService.deleteSale({ id }).subscribe(
                    (response: any) => {
                        this.spinner.hide();
                        if (response.code == 'success') {
                            Swal.fire({
                                title: 'Exito',
                                text: 'Venta anulada exitosamente.',
                                icon: 'success',
                            });

                            this.getIndex();
                            this.layoutService.reloadComponent();
                        } else {
                            Swal.fire({
                                title: 'Error',
                                text: 'Error al anular la venta.',
                                icon: 'error',
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

    onPage(event) {
        this.pageCount = event['rows'];
        this.getIndex('', this.pageCount);
    };

    //Buscador

    searchInput(){
        let search = this.formSearch.get('search').value;
        this.pageActual = 1;
         if(search==""){
          this.getIndex(search);
        } 
    }

    buscarPorTecla($event){
        //console.log($event)
        if($event.code == 'Enter'){  
            this.search();
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
    };

    leftTable(){
        this.pageActual = this.pageActual - 1;
        this.getIndex('', this.pageCount, this.pageActual);
        this.validatePage();
    };

    rightTable(){
        this.pageActual = this.pageActual + 1;
        this.getIndex('', this.pageCount, this.pageActual);
        this.validatePage();
    };

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
    };

    confirmAbrirPdf(venta_id: number){
        console.log(venta_id)
        let url =  this.baseUrl+'/ventasPdf/'+venta_id+'?token='+this.token;
        window.open(url, '_blank');
    
    }

}
