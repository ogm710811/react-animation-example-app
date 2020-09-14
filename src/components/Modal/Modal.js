import React from "react";
import { Transition } from "react-transition-group";

import "./Modal.css";

const modal = (props) => {
  const duration = 1000;
  return (
    <Transition mountOnEnter unmountOnExit in={props.show} timeout={duration}>
      {(state) => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
            ? "ModalClose"
            : null,
        ];
        return (
          <div className={cssClasses.join(" ")}>
            <p>{state}</p>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
