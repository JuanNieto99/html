import { Component } from '@angular/core';
import { HotelsService } from 'src/app/content/service/admin/hotels.service';
import { UsersService } from 'src/app/content/service/admin/users.service';
import { ActivatedRoute } from '@angular/router';
import { Hotel, hotel_detalle_usuario } from 'src/app/content/models/admin/hotels.model';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

interface HotelTransformado {
    key: number;
    label?: string;
}

@Component({
    selector: 'app-users-hotel',
    templateUrl: './users-hotel.component.html',
})
export class UsersHotelComponent {

    public data_hoteles!: Hotel[];
    public hoteles: HotelTransformado[]
    public hotelesSeleccionados: HotelTransformado[];
    public id: number
    public loading: boolean = true;

    constructor(
        private hotelService: HotelsService,
        private usersService: UsersService,
        private route: ActivatedRoute,
        private spinner: NgxSpinnerService,

    ) { }

    ngOnInit() {
        this.spinner.show();
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.getHotels();
        this.getHotelsByUser(this.id);
    }


    // trae la data de todos los hoteles existentes
    public getHotels() {
        this.hotelService.getAll(9999, '', 1).subscribe((response: any) => {
            const hoteles: Hotel[] = response.data;

            //transforma la data correctamente
            this.hoteles = hoteles.map((hotel: Hotel) => {
                return {
                    key: hotel.id,
                    label: hotel.nombre,
                }
            })
        });
    }

    // trae los hoteles de un usuario en especifico y transforma la data correctamente
    public getHotelsByUser(id: number) {
        this.usersService.getHotelsByUser(id).subscribe((response: any) => {
            const seleccionados: hotel_detalle_usuario[] = response.hoteles;

            this.hotelesSeleccionados = seleccionados.map((hotel: any) => {
                return {
                    key: hotel.hotel_id,
                }
            })
            this.loading = false;
            this.spinner.hide();
        });
    }

    //guarda los hoteles seleccionados por el usuario
    public saveHotelsByUser() {
        let hoteles_ids: number[] = this.hotelesSeleccionados.map((item: any) => {
            return item.key;
        })
        this.usersService.saveHotelsByUser(this.id, hoteles_ids).subscribe((response: any) => {
            this.loading = true;
            if (response.code == 'success') {
                Swal.fire({
                    title: 'Hoteles guardados correctamente',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,

                })

                this.getHotelsByUser(this.id);
            }
            else {
                Swal.fire({
                    title: 'Error al guardar los hoteles',
                    icon: 'error',
                    timer: 2000,
                })
            }
        });
    }

}
