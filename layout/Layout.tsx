import Head from "next/head";
import LeftNavbar from "../components/LeftNavbar";
import MainContent from "../components/Maincontent";
import { Waves } from "../components/svg/Waves";

interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}

const Container = ({ children }) => (
  <main
    className="items-center justify-center min-h-screen w-full  relative bg-gradient-to-b from-[#f5ccb1] to-[#d0cee2] "
    style={{
      background:
        "linear-gradient(to bottom,#f5ccb1 0%,#f5ccb1 50%, #d0cee2 50%, #d0cee2 100%) ",
    }}
  >
    <Waves className="absolute w-full h-full pb-24" />
    {children}
  </main>
);

const Layout = ({
  children,
  title,
  menu,
}: {
  children: React.ReactNode;
  title: string;
  menu: MenuItem[];
}) => (
  <div className="flex h-screen ">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container>
      <LeftNavbar menu={menu} />
      <MainContent>{children}</MainContent>
    </Container>
  </div>
);

export default Layout;
