import { PermisoRol, PermisoTransformado, Permiso } from 'src/app/content/api/rolesPermisos';
import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/content/service/admin/roles.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'roles-permisos',
    templateUrl: './roles-permisos.component.html',
})
export class RolesPermisosComponent implements OnInit {

    private routeId: string = this.activatedRoute.snapshot.paramMap.get('id')
    public permisosAll: PermisoTransformado[] = []
    public permisosRol: PermisoTransformado[] = []
    public loading: boolean = true

    constructor(
        private rolesService: RolesService,
        private activatedRoute: ActivatedRoute,
        private spinner: NgxSpinnerService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.getPermisos()
    }

    //metodo que trae todos los permisos
    public getPermisos() {
        this.spinner.show();
        this.rolesService.getPermisosByRol(this.routeId).then(data => {
            const todosLosPermisos: Permiso[] = data.permiso
            const dataPermisosRol: PermisoRol[] = data.permiso_rol

            //Organizando los permisos del arbol
            function organizarPermisos(permisos: Permiso[]): Permiso[] {
                let permisosOrganizados: { [key: number]: any } = {};
                // Función recursiva para asignar hijos
                function asignarHijos(permiso: any) {
                    permisos.forEach(hijo => {
                        if (hijo.id_padre === permiso.id) {
                            if (!permiso.children) {
                                permiso.children = [];
                            }
                            permiso.children.push(hijo);
                            asignarHijos(hijo); // Llamada recursiva para asignar subhijos
                        }
                    });
                }
                //Identificar permisos raíz y prepararlos para asignación de hijos
                permisos.forEach(permiso => {
                    if (permiso.id_padre === 0) {
                        permisosOrganizados[permiso.id] = { ...permiso, children: [] };
                        asignarHijos(permisosOrganizados[permiso.id]);
                    }
                });
                //Convertir el objeto organizado en un arreglo y devolver solo los elementos raíz
                return Object.values(permisosOrganizados);
            }
            //transforma todos los permisos en el formato necesario para el arbol
            function transformarPermisos(permisos): PermisoTransformado[] {
                return permisos.map(permiso => {
                    return {
                        key: permiso.id.toString(),
                        id: permiso.id.toString(),
                        label: permiso.nombre,
                        id_padre: permiso.id_padre.toString(),
                        children: permiso.children ? transformarPermisos(permiso.children) : [],
                    };
                });
            }
            const permisosTranformados = transformarPermisos(organizarPermisos(todosLosPermisos))
            this.permisosAll = permisosTranformados

            //transforma los permisos del rol en el formato necesario para que aparezcan seleccionados en el arbol
            this.permisosRol = this.transformDataSelected(dataPermisosRol)

        }).then(() => {
            this.loading = false
            this.spinner.hide();
        })
    }

    private transformDataSelected(data: PermisoRol[]) {
        const permisos = [];
        data.forEach(tipoDePermiso => {
            const permiso = {
                key: tipoDePermiso.permiso_id.toString(),
                id: tipoDePermiso.permiso_id.toString(),
                label: tipoDePermiso.permiso.nombre,
                id_padre: tipoDePermiso.permiso.id_padre.toString(),
            };
            permisos.push(permiso);
        });
        return permisos
    }

    //actualiza el arbol
    public getSelected() {
        this.rolesService.getPermisosByRol(this.routeId).then(data => {
            this.permisosRol = this.transformDataSelected(data.permiso_rol)
        })
        this.loading = false
        this.spinner.hide();
    }

    public savePermisos(): void {
        this.spinner.show();
        const idPermisos: number[] = []
        const idRol: number = parseInt(this.routeId)

        //funcion recursiva que hace que los padres se seleccionen automaticamente
        function selectParents(permiso: any) {
            if (idPermisos.includes(parseInt(permiso.id))) return

            idPermisos.push(parseInt(permiso.id))
            if (permiso.parent) {
                selectParents(permiso.parent)
            }
        }

        //recorre los permisos seleccionados y selecciona automaticamente los padres
        this.permisosRol.forEach(permiso => {
            selectParents(permiso)
        })

        this.rolesService.savePermisosByRol(idRol, idPermisos).subscribe(
            (response: any) => {
                if (response.code == 'success') {
                    this.spinner.hide();
                    Swal.fire({
                        title: 'Exito',
                        text: 'Permisos actualizados exitosamente',
                        icon: 'success',
                        timer: 1500,
                        showConfirmButton: false
                    }).then(() => {
                        this.router.navigate(['dashboard/admin/roles'])
                    })
                }
                else {
                    console.error('Error', response)
                }
            },
            (error) => {
                console.log('Error', error)
            }
        )
    }

    public expandAll() {
        this.permisosAll.forEach((node) => {
            this.expandRecursive(node, true);
        });
    }

    public collapseAll() {
        this.permisosAll.forEach((node) => {
            this.expandRecursive(node, false);
        });
    }

    private expandRecursive(node: any, isExpand: boolean) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach((childNode) => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }
}
