import { UserInterface } from "./UserInterface"

export interface Page {
    id: number,
    title: string,
    content: string
    createdBy: UserInterface
}