import React, {useEffect, useRef} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'


const Chart = ({data, width, height }) => {

    return (
        <ResponsiveContainer width="95%" height="90%">
            <BarChart
                width={500}
                height={300}
                data={data}
                padding={{
                    top: 50
                }}
                // margin={{
                //     top: 5,
                //     right: 30,
                //     left: 20,
                //     bottom: 5,
                // }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="filename" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="cases_count" fill="#8884d8" />
                {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Chart;