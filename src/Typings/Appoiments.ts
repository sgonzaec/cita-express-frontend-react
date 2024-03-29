export interface AppoimentList {
  appoiments: Appoiment[];
}

export interface Appoiment {
  city: string;
  country: string;
  id_appoiment: number;
  id_client: string;
  id_supplier: string;
  supplier_cp: string;
  note: string;
  service_type: string;
}
