import React from 'react';
import '../assets/css/SideBar.css';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    AppstoreOutlined,
    LaptopOutlined,
    PieChartOutlined

} from '@ant-design/icons';

const { Sider } = Layout;



class SideBar extends React.Component {
    render() {
        return (

            <Sider width={200} className="siderBg" >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ background: '#333C54', color: '#fff', height: '100%', borderRight: 0 }}
                >

                    <Menu.Item key="sub0" icon={<PieChartOutlined />} title="subnav 0">Dashboard</Menu.Item>
                    <Menu.Item key="sub1" icon={<LaptopOutlined />} title="subnav 1">Support</Menu.Item>
                    <Menu.Item key="sub2" icon={<AppstoreOutlined />} title="subnav 2">Options</Menu.Item>
                    <Menu.Item key="sub3" icon={<UserOutlined />} title="subnav 3">User</Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default SideBar;