import React from "react";
import 'antd/dist/antd.css'
import { Col, Row, Statistic } from 'antd'
import Navbar from "../components/Navbar";
import '../assets/css/Dashboard.css'
import PieChart from '../components/PieCharts'
import LineChart from '../components/LineCharts'

function Dashboard(props) {
    return (
        <>
            <Row>
                <Col xs={24}>
                    <Navbar />


                </Col>
            </Row>

            <br />

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

                 /* 
                 Estas son las graficas 
                 */

                <Row gutter={20}>
                    
                    <Col xs={24} md={12} className='graficaCircular'>
                        <PieChart />
                    </Col>

                    <Col xs={24} md={12}>
                        <LineChart />
                    </Col>

                </Row>

            </div>

        </>
    )

}

export default Dashboard;