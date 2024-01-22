import { UUID } from "crypto"

export type PostInterface = {
    id:UUID,
    createdAt:Date,
    updatedAt:Date,
    title:string,
    category:string,
    content:string,
    author:string,
    image:string,
    snippet:string
}