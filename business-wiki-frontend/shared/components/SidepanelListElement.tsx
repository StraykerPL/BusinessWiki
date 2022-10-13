import moduleStyles from "../styles/SidepanelListElement.module.scss";

import { SidepanelListElementInterface } from "../models/SidepanelListElementInterface";

const SidepanelListElement = (props: { value: SidepanelListElementInterface }) => {
  return (
    <div className={moduleStyles.container} onClick={props.value.clickEvent} >
        <p>{props.value.title}</p>
    </div>
  );
};

export default SidepanelListElement;