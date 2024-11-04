export interface InvoiceItem {
  qty: number;
  unit: string;
  article: string;
  unitPrice: number;
  amount: number;
}

export interface ItemRowProps {
  invoiceData: InvoiceItem[];
}
