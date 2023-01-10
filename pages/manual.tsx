import Layout from "../layout/Layout";
import { menu } from "../layout/menu";

const Dashboard = () => (
  <Layout title="Manual" menu={menu}>
    <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>
    <p className="text-gray-700 mb-4">Welcome to the manual!</p>
  </Layout>
);

export default Dashboard;
