import { UserInterface } from "./UserInterface"

export interface Page {
    title: string,
    content: string
    createdBy: UserInterface
}