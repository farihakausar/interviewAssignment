import { Tabs } from "antd";
import "./CustomerTabs.scss"; // Import the CSS file

const onChange = (key) => {
  console.log(key);
};

const items = [
  { key: "1", label: "All" },
  { key: "2", label: "Published" },
  { key: "3", label: "Deleted" },
];

const CustomerTabs = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);

export default CustomerTabs;
