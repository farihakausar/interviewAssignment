import { Layout } from "antd";
import { Outlet} from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

const { Content, Sider } = Layout;

const AppLayout = () => {

  return (
    <Layout>
      <Sider
        width={280}
        className=" h-screen fixed top-0 left-0 bg-whiteColor"
      >
        <Sidebar />
      </Sider>
      <Layout style={{ marginLeft: 280 }} className="bg-offWhiteColor">
        <Content className="bg-offWhiteColor">
          <div id="detail">

            <Outlet />

          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
