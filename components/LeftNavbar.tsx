import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import routes from "./routes";

interface State {
  selectedOption: string;
}
interface IProps {
  onOptionClick: (option: string) => void;
}

class LeftNavbar extends React.Component<IProps, State> {
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
    return (
      <div className={styles.navcontainer}>
        <div className={styles.logo}>
          <h2>Giftblane</h2>
          <div className={styles.profile}>
            <div className={styles.headcontainer}>
              <div className={styles.headwrapper}>
                <div className={styles.title}>
                  <h2>
                    Hello, <span>Jenny</span>
                  </h2>
                  <p>welcome to the board.</p>
                </div>
                <div className={styles.profile}>
                  {/* <img alt="profile" className={styles.image} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <nav className={styles.navbar}>
            <ul className={styles.navbarOptiones}>
              <li>
                {routes.map((route) => (
                  <Link key={route.path} href={route.path}>
                    <span
                      className={
                        this.state.selectedOption === route.label
                          ? "selected"
                          : ""
                      }
                      onClick={() => this.handleOptionClick(route.label)}
                    >
                      {route.label}
                    </span>
                  </Link>
                ))}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default LeftNavbar;
