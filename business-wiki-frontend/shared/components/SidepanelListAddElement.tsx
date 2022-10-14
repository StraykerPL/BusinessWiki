import listElementStyles from "../styles/SidepanelListElement.module.scss";
import { MdAdd } from "react-icons/md";

import { MouseEventHandler } from "react";

const SidepanelListAddElement = (props: { addPageEvent: MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div className={listElementStyles.container} onClick={props.addPageEvent} >
        <MdAdd className={listElementStyles.container__icon} />
    </div>
  );
};

export default SidepanelListAddElement;