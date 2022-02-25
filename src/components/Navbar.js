import React from 'react';
import { Layout, Menu } from 'antd';
import { RobotFilled, BellOutlined } from '@ant-design/icons';
import '../assets/css/Navbar.css';


const { Header } = Layout;

function Navbar(props) {
    return (
        <Header className='navheader'>

            <ul className='ulizquierda'>

                <li>
                    <span style={{ paddingLeft: "20px" }} className='titulonav'>Navbar</span>
                </li>

            </ul>

            <ul className='ulderecha'>
                <li className='notificationnav'><BellOutlined style={{ color: 'white', fontSize: '28px', padding: '12px' }} /> </li>
                <li  className='imgnav'><RobotFilled style={{ fontSize: '28px', color: 'white', padding: '3px' }} /></li>
            </ul>


        </Header>


    )
}

export default Navbar;