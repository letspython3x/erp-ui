export interface IProduct {
    product_id:number;
    store_id:  string;
    product_name: string;
    serial_no: string;
    description: string;
    barcode_number: string;
    category_id: string;
    supplier_id: string;
    unit_price: number;
    sell_price: number;
    units_in_stock: number;    
    is_active: number;
  }