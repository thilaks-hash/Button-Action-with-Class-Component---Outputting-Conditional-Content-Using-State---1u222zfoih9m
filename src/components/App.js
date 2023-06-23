import React, { Component } from "react";

class ButtonWithParagraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showParagraph: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ showParagraph: true });
  }

  render() {
    const { showParagraph } = this.state;

    return (
      <div>
        <button id="click" onClick={this.toggle}>
          Click
        </button>
        {showParagraph && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
      </div>
    );
  }
}

export default ButtonWithParagraph;
