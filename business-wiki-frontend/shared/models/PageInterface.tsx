import { UserInterface } from "./UserInterface"

export interface PageInterface {
    id: number,
    title: string,
    content: string
    createdBy: UserInterface
}