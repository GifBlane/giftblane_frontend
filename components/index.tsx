import React from "react";
import LeftNavbar from "./LeftNavbar";
import { render } from "react-dom";

class Home extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedOption: "home",
    };
  }

  handleOptionClick = (option: string) => {
    this.setState({ selectedOption: option });
  };

  render() {
    return (
      <div>
        <LeftNavbar onOptionClick={this.handleOptionClick} />
        <h1>Bienvenido a la página de inicio</h1>
        <p>
          Aquí puedes encontrar información sobre la página de inicio de tu
          aplicación.
        </p>
      </div>
    );
  }
}

export default Home;
