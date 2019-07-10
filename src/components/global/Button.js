import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      buttonClicked: !state.buttonClicked
    }));
  }

  render() {
    return (
      <div className="button">
        <button
          type="button"
          onMouseDown={this.handleClick}
          onMouseUp={this.handleClick}
          style={{
            backgroundColor: this.state.buttonClicked
              ? this.props.colorClicked
              : this.props.colorDefault,
            color: this.props.colorText,
            textTransform: "uppercase",
            border: "2px solid " + this.props.colorText,
            padding: "0.5rem",
            fontSize: "1rem"
          }}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default Button;
