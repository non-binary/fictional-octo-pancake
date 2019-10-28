import React, { Component } from "react";

class Input extends Component {
  render() {
    const { tip, onTotalUpdate, onPercentageUpdate } = this.props;

    return (
      <React.Fragment>
        <label className="control-label mt-2">Bill:</label>
        <input
          onChange={event => onTotalUpdate(event.target.value)}
          className="form-control"
          type="number"
          value={tip.total}
          placeholder="24.95"
        />
        <label className="control-label mt-2">Percentage:</label>
        <input
          onChange={event => onPercentageUpdate(event.target.value)}
          className="form-control"
          type="number"
          value={tip.percent}
          placeholder="15"
        />
      </React.Fragment>
    );
  }
}

export default Input;
