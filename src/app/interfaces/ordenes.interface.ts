export interface PlatilloOrden {
    platillo_id: string;
    cantidad: number;
  }
  
  export interface Orden {
    _id?: string;
    id_mesa: number;
    platillos: PlatilloOrden[];
    estado: 'pendiente' | 'entregado' | 'cancelado';
    fecha_creacion: Date;
    fecha_actualizacion: Date;
  }