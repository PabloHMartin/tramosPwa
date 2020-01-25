export interface TramoPrecioFacts {
  tramo: Tramo[];
  precios: Precios;
  facts: Fact[];
}

export interface Fact {
  icon: string;
  potencia: number;
  title: string;
}

export interface Tramo {
  activo: boolean;
  inicio: string;
  fin: string;
  precio: string;
  title: string;
}

export interface Precios {
  caro: number;
  medio: number;
  eco: number;
}
