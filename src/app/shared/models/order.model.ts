export interface IOrder {
    client_id: number;
    order_id: number;
    store_id: number;
    order_type: string;
    discount_on_total: number;
    total_tax: number;
    order_total: number;
    created_at: Date;
    products: any;
}
