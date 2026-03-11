import type { Song } from "./song";

export interface InvoiceRecord extends Song {
  invoiceId: string;
  issuedAt: string;
  progressAtIssuance: number;
}
