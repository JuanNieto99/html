export interface Sale {
    id?: number;
    usuario_id: number;
    cliente_id: number;
    total: number;
    subtotal: number;
    total_impuestos: number;
    estado_id: number;
    hotel_id: number;
    usuario?: {
        id: number;
        nombre: string;
    };
    hotel?: {
        id: number;
        nombre: string;
    };
}

