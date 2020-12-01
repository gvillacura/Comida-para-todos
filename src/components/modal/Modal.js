import React, { useState, Fragment } from "react";
import "./modal.css";
import { Icon } from "@iconify/react";
import xIcon from "@iconify/icons-feather/x";
import FormModal from "./FormModal";
import ModalMessage from "./ModalMessage";
const Modal = (props) => {
  const [showForm, setShowForm] = useState(true);

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <Fragment>
      <div className="modal-container">
        <div className="modal-content">
          <div className="btn-modal">
            <Icon icon={xIcon} onClick={props.close} />
          </div>
          {showForm === true ? (
            <FormModal open={closeForm} />
          ) : (
            <ModalMessage />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
