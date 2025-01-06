const Dashboard = () => {
    return <h1 className="text-2xl font-bold">Dashboard</h1>;
  };
  
  export default Dashboard;


// import { Layout, Menu } from 'antd';
// import { UserOutlined, FileTextOutlined, LogoutOutlined } from '@ant-design/icons';
// import DashboardContent from './Pages/Dashboard'; // Renamed to avoid conflict

// const { Header, Sider, Content, Footer } = Layout;

// export default function AdminDashboard() { // Renamed the parent component
//   return (
//     <Layout className="min-h-screen">
//       <Sider
//         collapsible
//         breakpoint="lg"
//         className="bg-gray-800"
//       >
//         <div className="p-4 text-white text-center text-2xl font-bold">
//           Admin Panel
//         </div>
//         <Menu theme="dark" mode="inline">
//           <Menu.Item icon={<UserOutlined />} key="1">
//             Profile
//           </Menu.Item>
//           <Menu.Item icon={<FileTextOutlined />} key="2">
//             Reports
//           </Menu.Item>
//           <Menu.Item icon={<LogoutOutlined />} key="3">
//             Logout
//           </Menu.Item>
//         </Menu>
//       </Sider>
//       <Layout>
//         <Header className="bg-white shadow-md p-4 flex justify-between items-center">
//           <h1 className="text-xl font-bold">Admin Dashboard</h1>
//           <div className="text-gray-600">Welcome, Admin!</div>
//         </Header>
//         <Content className="p-6">
//           <DashboardContent /> {/* Using the renamed child component */}
//         </Content>
//         <Footer className="text-center bg-gray-100 py-4">
//           © 2025 Admin Report System
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };


