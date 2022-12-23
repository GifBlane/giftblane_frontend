import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import Content from "../components/Content";
import LeftNavbar from "../components/LeftNavbar";
import routes from "../components/routes";

interface State {
  selectedOption: string;
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedOption: "home",
    };
  }

  handleOptionClick(option: string) {
    this.setState({ selectedOption: option });
  }

  render() {
    const selectedRoute = routes.find(
      (route) => route.label === this.state.selectedOption
    );
    const SelectedComponent = selectedRoute ? selectedRoute.component : null;
    return (
      <div className={styles.container}>
        <Head>
          <title>Dashboard</title>
          <meta name="description" content="Created by streamline" />
          <link rel="icon" href="/pro.ico" />
        </Head>
        <div className={styles.container}>
          <LeftNavbar onOptionClick={this.handleOptionClick} />
          <main>{SelectedComponent && <SelectedComponent />}</main>

          <Content />
        </div>
      </div>
    );
  }
}

export default App;
