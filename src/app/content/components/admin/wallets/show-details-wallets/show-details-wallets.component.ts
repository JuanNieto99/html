import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { WalletService } from 'src/app/content/service/admin/wallet.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-details-wallets',
  templateUrl: './show-details-wallets.component.html',
  styleUrls: ['./show-details-wallets.component.scss']
})
export class ShowDetailsWalletsComponent {


    public loadingTable: boolean = true;
    public detailWallets: any;
    public currentUser: any;
    public detalle_id: number ;
    public form: FormGroup;
    public estado: string = '';
    public caja_id: number = 0;
    public controlCaja : any;
    public total: number = 0;

    // Variables para la paginación
    pageActualCajas: number = 1;
    ultimaPageCajas: number;
    pageCountCajas: number = 10; // Registros por página
    disablePageLeftCajas: boolean = false;
    disablePageRightCajas: boolean = false;

    //Buscador
    public formSearch: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private walletService: WalletService,
        private FB: FormBuilder,
        private spinner: NgxSpinnerService,
        private layoutService: LayoutService,
    ){

    }


    ngOnInit(): void {
        this.detalle_id = parseInt(this.route.snapshot.paramMap.get('id'));

        this.buildForm();
        this.getCajaDetail();

    }

    buildForm(){
        this.formSearch = this.FB.group({
            search: ['', []],
        });

        this.form = this.FB.group({
        estado: [this.estado, []],
        total: [this.total, []],
        });

        this.form.disable()
    }


    cerrarCaja(){
        Swal.fire({
        title: "Agrege una descripción antes de cerrar la caja.",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Cerrar",
        input: 'text',
        cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
            let justificacion = result.value;
            this.sendCerrarCaja(this.detalle_id, this.caja_id, justificacion);
            }
        });
    }


    sendCerrarCaja(id: number, caja_id: number, justificacion: string){

        let data = {
        caja_id: caja_id,
        control_caja_id: id,
        justificacion: justificacion
        };
        this.spinner.show();

        this.walletService.cerrarCaja(data).subscribe(response => {
        this.spinner.hide();
        let data = response;

        if(data.code == "success"){
            Swal.fire({
            title: "Exito",
            text: "Caja Cerrada Exitosamente.",
            icon: "success"
            });

            this.layoutService.reloadComponent();

            this.router.navigate(['dashboard/admin/wallets/detail']);

        } else  if(data.code == "warning"){
            Swal.fire({
            title: "Advertencia",
            text: data.error,
            icon: "warning"
            });
        }   else {
            Swal.fire({
            title: "Error",
            text: "Error Al Cerrar caja.",
            icon: "error"
            });
        }
        });
    }

    getCajaDetail(search:string = '', page: number = 1, perPage: number = this.pageCountCajas) {
        this.loadingTable = true;
        let detalle_id = this.detalle_id;
        this.walletService.getDetelleCaja(detalle_id, search, page, perPage).subscribe(element => {
            if (element && element.detalle_caja && element.detalle_caja.data) {
                this.detailWallets = element.detalle_caja.data;
                this.controlCaja = element.control_caja;

                this.total = 0; // Reset total
                this.detailWallets.forEach(element => {
                    this.total += parseFloat(element.precio);
                });

                this.caja_id = this.controlCaja?.caja_id;
                let estado = this.controlCaja?.estado;

                if (estado === 1) {
                    this.estado = 'Abierta';
                } else if (estado === 2) {
                    this.estado = 'Cerrada';
                } else if (estado === 0) {
                    this.estado = 'Anulada';
                }

                // Actualiza las variables de paginación
                this.pageActualCajas = element.detalle_caja.current_page;
                this.ultimaPageCajas = element.detalle_caja.last_page;
                this.validatePageCajas();

                this.buildForm();
            } else {
                this.detailWallets = [];
            }
            this.loadingTable = false;
        }, error => {
            console.error(error);
            this.loadingTable = false;
        });
    }

    // Búsqueda
    searchInput(){
        let search = this.formSearch.get('search').value;
        this.pageActualCajas = 1;
        if(search==""){
            this.getCajaDetail(search);
        }

    }

    search(){
        let search = this.formSearch.get('search').value;
        this.getCajaDetail(search);
    }

    onPage(event){
        this.pageCountCajas = event['rows'];
        this.getCajaDetail('', this.pageCountCajas);
    }

    buscarPorTecla($event){
        if($event.code == 'Enter'){
            this.search();
        }
    }

    // Paginador

    leftTableCajas() {
        if (this.pageActualCajas > 1) {
            this.pageActualCajas--;
            this.getCajaDetail('',this.pageActualCajas, this.pageCountCajas);
        }
    }

    rightTableCajas() {
        if (this.pageActualCajas < this.ultimaPageCajas) {
            this.pageActualCajas++;
            this.getCajaDetail('',this.pageActualCajas, this.pageCountCajas);
        }
    }

    validatePageCajas() {
        if (this.pageActualCajas == 1) {
            this.disablePageLeftCajas = false;
        } else {
            this.disablePageLeftCajas = true;
        }

        if (this.pageActualCajas >= this.ultimaPageCajas) {
            this.disablePageRightCajas = false;
        } else {
            this.disablePageRightCajas = true;
        }
    }

}
