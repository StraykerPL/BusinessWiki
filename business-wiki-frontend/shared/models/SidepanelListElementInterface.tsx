import { MouseEventHandler } from "react";

export interface SidepanelListElementInterface {
    id: number,
    title: string,
    clickEvent: MouseEventHandler<HTMLDivElement>
}