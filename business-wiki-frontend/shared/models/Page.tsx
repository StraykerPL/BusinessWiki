import { User } from "./User"

export interface Page {
    id: number,
    title: string,
    content: string
    createdBy: User
}