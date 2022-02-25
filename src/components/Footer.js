import React from 'react';
import { Layout } from 'antd';
import '../assets/css/Footer.css'
import {CopyrightOutlined } from '@ant-design/icons';


const { Footer } = Layout;

class PageFooter extends React.Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center', background: '#fff' }}>
                Designed by Marlon Uzcátegui <CopyrightOutlined />
            </Footer>
        )
    }
}

export default PageFooter;