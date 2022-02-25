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
            <Navbar />


            <Layout style={{ minHeight: '100vh' }}>
                <SideBar />

                <Content style={{ margin: '0 16px', background: 'light' }}>

                    <br />

                    {/* Estas son las tarjetas del contenido*/}
                    <div className="contenedor">
                        <Row gutter={30}>

                            <Col xs={24} sm={12} lg={6}>
                                <div className="cardscontenedor">
                                    <Statistic title='Title' value='Card value' valueStyle={{ color: 'black' }} style={{ backgroundColor: '#fff' }} className='cardscontenido' />
                                </div>
                            </Col>

                            <Col xs={24} sm={12} lg={6}>
                                <div className="cardscontenedor">
                                    <Statistic title='Title' value='Card value' valueStyle={{ color: 'black' }} style={{ backgroundColor: '#fff' }} className='cardscontenido' />
                                </div>
                            </Col>

                            <Col xs={24} sm={12} lg={6}>
                                <div className="cardscontenedor">
                                    <Statistic title='Title' value='Card value' valueStyle={{ color: 'black' }} style={{ backgroundColor: '#fff' }} className='cardscontenido' />
                                </div>
                            </Col>

                            <Col xs={24} sm={12} lg={6}>
                                <div className="cardscontenedor">
                                    <Statistic title='Title' value='Card value' valueStyle={{ color: 'black' }} style={{ backgroundColor: '#fff' }} className='cardscontenido' />
                                </div>
                            </Col>
                        </Row>

                        <br />

                        {/* 
                 Estas son las graficas 
                 */}

                        <Row gutter={20}>

                            {/*Esta es una grafica circular*/}
                            <Col xs={24} md={12} className='pieChart'>
                                <PieChart />
                            </Col>

                            {/*Esta es una grafica Lineal*/}
                            <Col xs={24} md={12}>
                                <LineChart />
                            </Col>

                        </Row>

                    </div>
                </Content>

            </Layout>
            <PageFooter />
        </Layout>


    )

}

export default Dashboard;