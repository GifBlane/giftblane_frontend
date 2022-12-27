import Head from "next/head";
import LeftNavbar from "../components/LeftNavbar";
import MainContent from "../components/Maincontent";

interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}

const Layout = ({
  children,
  title,
  menu,
}: {
  children: React.ReactNode;
  title: string;
  menu: MenuItem[];
}) => (
  <div className="flex h-screen">
    <Head>
      <title>{title}</title>
      <link rel="stylesheet" href="/_next/static/style.css" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <LeftNavbar menu={menu} />
    <MainContent>{children}</MainContent>
  </div>
);

export default Layout;
