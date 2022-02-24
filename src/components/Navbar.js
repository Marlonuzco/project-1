import React from 'react';
import { Layout } from 'antd';
import { MenuOutlined, RobotFilled } from '@ant-design/icons';
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
                <a className='imgnav'><RobotFilled style={{ fontSize: '28px', color: 'white', padding: '3px' }} /></a>
            </ul>


        </Header>


    )
}

export default Navbar;