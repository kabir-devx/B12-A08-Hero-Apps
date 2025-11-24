import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Recharts = ({ ratings }) => {
    return (
        <div className="w-full mt-3 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={ratings}
                    layout="vertical"
                    margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#FF8C00" barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Recharts;