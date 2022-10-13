import listElementStyles from "../styles/SidepanelListElement.module.scss";

import { MouseEventHandler } from "react";

const SidepanelListAddElement = (props: { addPageEvent: MouseEventHandler<HTMLDivElement> }) => {
    const icon = () => <img src="../assets/add-button.svg" alt="Add New Page" />;
  return (
    <div className={listElementStyles.container} onClick={props.addPageEvent} >
        {icon()}
    </div>
  );
};

export default SidepanelListAddElement;