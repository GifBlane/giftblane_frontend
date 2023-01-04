import Layout from "../layout/Layout";
import { menu } from "../layout/menu";

const Dashboard = () => (
  <Layout title="Table Page" menu={menu}>
    <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>
    <p className="text-gray-700 mb-4">Welcome to the dashboard!</p>
  </Layout>
);

export default Dashboard;
