import moduleStyles from "../styles/SidepanelListElement.module.scss";

import { SidepanelListElementInterface } from "../models/SidepanelListElementInterface";

const SidepanelListElement = ({ clickEvent, title }: SidepanelListElementInterface) => {
  return (
    <div className={moduleStyles.container} onClick={clickEvent} >
        <p>{title}</p>
    </div>
  );
};

export default SidepanelListElement;