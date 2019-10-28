import React, { Component } from "react";
import Input from "./components/input";
import Result from "./components/result";

class App extends Component {
  state = {
    tip: { total: null, percent: null }
  };

  handleTotalUpdate = total => {
    const percent = this.state.tip.percent;
    const tip = { total, percent };
    this.setState({ tip });
  };

  handlePercentageUpdate = percent => {
    const total = this.state.tip.total;
    const tip = { total, percent };
    this.setState({ tip });
  };

  render() {
    return (
      <div className="form-group col-xs-4 col-md-4">
        <Input
          tip={this.state.tip}
          onTotalUpdate={this.handleTotalUpdate}
          onPercentageUpdate={this.handlePercentageUpdate}
        />
        <Result tip={this.state.tip} />
      </div>
    );
  }
}

export default App;
