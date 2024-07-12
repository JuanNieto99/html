export interface TopLevel {
    permiso: Permiso[];
    permiso_rol: PermisoRol[];
    rol: Rol;
}

export interface Permiso {
    id: number;
    codigo?: string;
    nombre: string;
    descripcion: string;
    id_padre?: number;
    estado: number;
    created_at: null;
    updated_at: null;
}

export interface PermisoRol {
    id: number;
    rol_id: number;
    permiso_id: number;
    permiso: Permiso
}

export interface Rol {
    id: number;
    nombre: string;
    descripcion: string;
    estado: number;
    created_at: null;
    updated_at: null;
}

export interface PermisoTransformado {
    key: string,
    id: string,
    label: string,
    id_padre: string,
    children?: PermisoTransformado[],
    parent?: PermisoTransformado
}
