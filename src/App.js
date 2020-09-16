import React, { Component } from "react";
import { Transition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import ModalCSSTransition from "./components/Modal-CSSTransition/Modal-CSSTransition";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  duration = 1000;
  defaultStyle = {
    transition: `opacity ${this.duration}ms ease-in-out`,
    opacity: 0,
  };
  transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
  };

  state = {
    isModalOpen: false,
    isModalCSSTransOpen: false,
    openContainer: false,
  };

  showModalHandler = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModalHandler = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  showModalTransHandler = () => {
    this.setState({
      isModalCSSTransOpen: true,
    });
  };

  closeModalTransHandler = () => {
    this.setState({
      isModalCSSTransOpen: false,
    });
  };

  containerHandler = () => {
    this.setState((prevState) => ({
      openContainer: !prevState.openContainer,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={this.containerHandler}
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Toggle Container
        </button>
        <br />
        <Transition
          mountOnEnter
          unmountOnExit
          in={this.state.openContainer}
          timeout={this.duration}
        >
          {(state) => (
            <div>
              <p>Transition Component States:</p>
              <p>{state}</p>
              <div
                style={{
                  margin: "auto",
                  backgroundColor: "red",
                  width: 100,
                  height: 100,
                  ...this.defaultStyle,
                  ...this.transitionStyles[state],
                }}
              />
            </div>
          )}
        </Transition>
        {/*The Modal Component with Transition Component will be always present in App.js no need to apply condition here*/}
        <Modal show={this.state.isModalOpen} closed={this.closeModalHandler} />
        <ModalCSSTransition
          show={this.state.isModalCSSTransOpen}
          closed={this.closeModalTransHandler}
        />

        {this.state.isModalOpen || this.state.isModalCSSTransOpen ? (
          <Backdrop show />
        ) : null}

        <button
          className="Button"
          style={{
            marginTop: 10,
          }}
          onClick={this.showModalHandler}
        >
          Open Modal
        </button>
        <br />
        <button
          className="Button"
          style={{
            marginTop: 10,
          }}
          onClick={this.showModalTransHandler}
        >
          Open Modal CSS Transition
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
