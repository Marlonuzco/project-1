import React from 'react';
import { Pie } from '@ant-design/charts';

function PieChart(props) {

    const datapie = [
        {
            type: 'Venezuela',
            value: 1230
        },
        {
            type: 'México',
            value: 6432
        },
        {
            type: 'Colombia',
            value: 3167
        },
        {
            type: 'Ecuador',
            value: 2790
        },
        {
            type: 'Bolivia',
            value: 3570
        },
        {
            type: 'Panamá',
            value: 4834
        },
        {
            type: 'Uruguay',
            value: 893
        },
        {
            type: 'Chile',
            value: 1689
        }
    ];

    const configPie = {
        appenPadding: 10,
        data: datapie,
        angleField: 'value',
        colorField: 'type',
        height: 450,
        radius: 0.8,
        label: {
            type: 'inner',
            offset: 'o.5',
            content: '{name} {percentage}',
            style: {
                fill: '#fff',
                fontSize: 14,
                textAlign: 'center',

            }
        }
    }

    return (
        <Pie {...configPie} style={{ backgroundColor: '#1F263C', padding: '20px' }}/>
    )
}

export default PieChart;