import React from 'react';
import { Layout } from 'antd';

const { Footer }= Layout;

class PageFooter extends React.Component{
    render(){
        return(
            <Footer style={{textAlign:'center'}}>
            <h1>I am the Footer</h1>
        </Footer>
        )
    }
}

export default PageFooter;