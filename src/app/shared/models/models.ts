export interface TramoPrecioFacts {
  tramo: Tramo & { id: string; };
  precio: Precio & { id: string; };
  facts: (Fact & { id: string; })[];
}

export interface Fact {
  id: string;
  icon: string;
  potencia: number;
  title: string;
  minutos: string;
}

export interface Tramo {
  id: string;
  activo: boolean;
  inicio: string;
  fin: string;
  precio: string;
  title: string;
  inhabil?: boolean;
}

export interface Precio {
  id: string;
  precio: number;
  title: string;
}
