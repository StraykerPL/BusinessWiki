import { MouseEventHandler } from "react";

export interface PageInterface {
    id: number,
    title: string,
    content: string
    createdBy: UserInterface
}

export interface SidepanelListAddElementPropsInterface {
    addPageEvent: MouseEventHandler<HTMLDivElement>
}

export interface SidepanelListElementInterface {
    id: number,
    title: string,
    clickEvent: MouseEventHandler<HTMLDivElement>
}

export interface TextInputProps {
    id: string;
    type: string;
    text: string;
    placeholder: string;
}

export interface UserInterface {
    username: string,
    password: string
}