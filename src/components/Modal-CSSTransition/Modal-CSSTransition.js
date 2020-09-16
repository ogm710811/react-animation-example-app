import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal-CSSTRansition.css";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modalCSSTransition = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames="modal"
    >
      <div className="Modal">
        <h1>A Modal with CSSTransition</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modalCSSTransition;
