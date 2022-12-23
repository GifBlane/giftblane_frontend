import React from "react";
import LeftNavbar from "./LeftNavbar";

class contacts extends React.Component {
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
        <h1>Bienvenido a la página de contactos</h1>
        <p>
          Aquí puedes encontrar información sobre la página de contactos de tu
          aplicación.
        </p>
      </div>
    );
  }
}

export default contacts;
