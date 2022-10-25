import moduleStyles from "../styles/Sidepanel.module.scss";

import { SidepanelListElementInterface, SidepanelListInputProps } from "../models/models";
import SidepanelListAddElement from "./SidepanelListAddElement";
import SidepanelListElement from "./SidepanelListElement";

const { sidepanel } = moduleStyles;

const SidepanelList = ({ elements }: SidepanelListInputProps) => {
    const createElementHTML = (element: SidepanelListElementInterface) => {
        return (
            <SidepanelListElement key={element.id} clickEvent={element.clickEvent} title={element.title} id={element.id} />
        );
    };

    const addPageEvent = () => {};

    return (
        <section className={sidepanel}>
            {elements.map((element) => createElementHTML(element))}
            <SidepanelListAddElement addPageEvent={addPageEvent} />
        </section>
    );
};

export default SidepanelList;