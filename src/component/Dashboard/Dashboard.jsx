import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Dashboard = () => {

    const testMarks = [
        {
            id: 1,
            name: "Test-1",
            mark: 57
        },
        {
            id: 2,
            name: "Test-2",
            mark: 59
        },
        {
            id: 3,
            name: "Test-3",
            mark: 60
        },
        {
            id: 4,
            name: "Test-4",
            mark: 60
        },
        {
            id: 5,
            name: "Test-5",
            mark: 59
        },
        {
            id: 6,
            name: "Test-6",
            mark: 54
        },
        {
            id: 7,
            name: "Test-7",
            mark: 50
        },
        {
            id: 8,
            name: "Test-8",
            mark: 60
        }
    ]
    return (
        <div>

            <div className='border border-orange-500 rounded p-20'>
                <ComposedChart
                    width={600}
                    height={300}
                    data={testMarks}
                >

                    <Bar dataKey="mark" barSize={20} fill="#413ea0" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />


                </ComposedChart>
            </div>

        </div>
    );
};

export default Dashboard;