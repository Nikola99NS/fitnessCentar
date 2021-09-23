import { Komentar } from "./Komentar";

export interface Product{
    id: 1,
        name: string
        imageUrl: string,
        cena: number,
        tip: string,
        komentari:Array<Komentar>
}