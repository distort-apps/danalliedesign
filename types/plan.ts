export interface Plan {
    id: string;
    title: string;
    summary: string;
    price: number;
    itemImgUrl: string;
    images: string[];
    pdfUrl: string;
    isLocked: boolean;
    totalDownloads: number;
    slug: string;
    createdAt: Date;
    updatedAt: Date; 

}