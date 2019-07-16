export interface IQuotation {
    customer_id: number;
    quotation_id: number;
    store_id: number;
    quotation_type: string;
    discount_on_total: number;
    total_tax: number;
    quotation_total: number;
    created_at: Date;
    products: any;
}
