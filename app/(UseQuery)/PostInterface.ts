import { UUID } from "crypto"

export type PostInterface = {
    id:UUID,
    createdAt:Date,
    updateAt:Date,
    title:string,
    categpry:string,
    content:string,
    author:string,
    image:string,
    snippet:string
}