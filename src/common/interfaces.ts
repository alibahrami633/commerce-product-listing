export interface Product {
  productName: string;
  productImage: string;
  price: string;
  type: string;
  isSale: boolean;
}

export interface Product {
  index: number;
  productName: string;
  productImage: string;
  price: string;
  type: string;
  isSale: boolean;
}

export interface MessageResponse {
  msg?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  status?: string;
  body?: T;
}

export interface Products {
  list: Product[]
}
