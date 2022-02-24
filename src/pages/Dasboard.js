import React from "react";
import 'antd/dist/antd.css'
import { Layout, Col, Row, Statistic } from 'antd'
import Navbar from "../components/Navbar";
import '../assets/css/Dashboard.css'
import PieChart from '../components/PieCharts'
import LineChart from '../components/LineCharts'
import SideBar from "../components/SideBar";
import PageFooter from "../components/Footer";

const { Content } = Layout;

function Dashboard(props) {
    return (
        <Layout>

        <SideBar />    

            <Layout  style={{ minHeight: '100vh' }}>
            <Navbar />               
                
                <Content style={{ margin: '0 16px' }}>

                    <br />

                    {/* Estas son las tarjetas del contenido*/}
                    <div className="contenedor">
                        <Row gutter={30}>

                            <Col xs={24} sm={12} lg={6}>
                                <div className="cardscontenedor">
                                    <Statistic title='Title' value='Card value' valueStyle={{ color: 'white' }} style={{ backgroundColor: '#606CF4' }} className='cardscontenido' />
                                </div>
                            </Col>

                            <Col xs={24} sm={12} lg={6}>
                                <div className="cardscontenedor">
                                    <Statistic title='Title' value='Card value' valueStyle={{ color: 'white' }} style={{ backgroundColor: '#122F61' }} className='cardscontenido' />
                                </div>
                            </Col>

                            <Col xs={24} sm={12} lg={6}>
                                <div className="cardscontenedor">
                                    <Statistic title='Title' value='Card value' valueStyle={{ color: 'white' }} style={{ backgroundColor: '#364B6F' }} className='cardscontenido' />
                                </div>
                            </Col>

                            <Col xs={24} sm={12} lg={6}>
                                <div className="cardscontenedor">
                                    <Statistic title='Title' value='Card value' valueStyle={{ color: 'white' }} style={{ backgroundColor: '#5E7499' }} className='cardscontenido' />
                                </div>
                            </Col>
                        </Row>

                        <br />

                        {/* 
                 Estas son las graficas 
                 */}

                        <Row gutter={20}>

                            {/*Esta es una grafica circular*/}
                            <Col xs={24} md={12} className='graficaCircular'>
                                <PieChart />
                            </Col>

                            {/*Esta es una grafica Lineal*/}
                            <Col xs={24} md={12}>
                                <LineChart />
                            </Col>

                        </Row>

                    </div>
                </Content>
                <PageFooter />                 
            </Layout>                            
        </Layout>
        
    )

}

export default Dashboard;