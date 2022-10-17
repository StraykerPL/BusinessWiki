import listElementStyles from "../styles/SidepanelListElement.module.scss";
import { MdAdd } from "react-icons/md";
import { SidepanelListAddElementPropsInterface } from "../models/SidepanelListAddElementPropsInterface";

const SidepanelListAddElement = ({ addPageEvent }: SidepanelListAddElementPropsInterface) => {
  return (
    <div className={listElementStyles.container} onClick={addPageEvent} >
        <MdAdd className={listElementStyles.container__icon} />
    </div>
  );
};

export default SidepanelListAddElement;