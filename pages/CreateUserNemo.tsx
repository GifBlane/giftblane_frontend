import { NextPage } from "next";
import { CreateUser } from "../components/CreateUser";
import { TradeData } from "../components/TradeData";
import Layout from "../layout/Layout";
import { menu } from "../layout/menu";

const Test: NextPage = () => {
	return (
		// <CreateUser />
		<Layout title="Crear Usuarios" menu={menu}>
			<TradeData />
		</Layout>
	);
};

export default Test;
