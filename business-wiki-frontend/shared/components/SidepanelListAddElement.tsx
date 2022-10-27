import 'reactjs-popup/dist/index.css';

import listElementStyles from "../styles/SidepanelListElement.module.scss";
import { MdAdd } from "react-icons/md";
import Popup from "reactjs-popup";
import PageForm from './PageForm';
import { FormEvent, useState } from 'react';

const SidepanelListAddElement = () => {
  const [showPopup, setShowPopup] = useState(false);

  const popupShowButton = (
    <div className={listElementStyles.container} >
      <MdAdd className={listElementStyles.container__icon} />
    </div>
  );

  const submitEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


  };

  const closeEvent = () => {
    setShowPopup(false);
  };

  return (
    <>
    <Popup position="right center" modal open={showPopup}>
      <PageForm submitEvent={submitEvent} closeEvent={closeEvent} />
    </Popup>
    <div className={listElementStyles.container} onClick={() => setShowPopup(true)}>
      <MdAdd className={listElementStyles.container__icon} />
    </div>
    </>
  );
};

export default SidepanelListAddElement;