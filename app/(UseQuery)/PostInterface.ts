import { UUID } from "crypto"

export type PostInterface = {
    id:UUID,
    createdAt:Date,
    updateAt:Date,
    title:string,
    category:string,
    content:string,
    author:string,
    image:string,
    snippet:string
}