import React from 'react';
import {Line} from '@ant-design/charts';

function LineCharts(props){

    //estos son mis datos como un objeto

    const dataLine = [
        {month: 'january', views: 13453 },
        {month: 'february', views: 12355 },
        {month: 'march', views: 10553 },
        {month: 'april', views: 15433 },
        {month: 'may', views: 12344 },
        {month: 'june', views: 9540 },
        {month: 'july', views: 8353 },
        {month: 'august', views: 14333 },
        {month: 'september', views: 12666 },
        {month: 'october', views: 16983 },
        {month: 'november', views: 16553 },
        {month: 'december', views: 15853 },
     ]; 

     //configuración de la gráfica Lineal

     const configLine = {
         data: dataLine,
         height: 410,
         xField: 'month',
         yField: 'views',
         color: '#018075',
         point:{
             size: 5,
             shape: 'diamond',
             color: '#018075'
         },
         label:{
             style: {
                 fill: '#aaa',
                 fontSize: 16,
                 stroke: '#018075'
             }
         }

     }

     return(

         <Line {...configLine} style={{backgroundColor: '#1F263C', padding: '20px'}} />
     )
}

export default LineCharts;