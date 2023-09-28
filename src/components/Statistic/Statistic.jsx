
import { PieChart, Pie, Legend,  Cell, ResponsiveContainer } from 'recharts';

const Statistic = () => {
    
    const data = [
        { name: 'Tota Donation', value: 400 },
        { name: 'Your Donation', value: 200 },
       
    ];
 
    const COLORS = ['#0088FE', '#00C49F'];
 
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
 
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
 
    return (
        <>
            <div>
                <div className="flex flex-col justify-center items-center text-center">
                    
                    <hr />
                    <div className="col-md-8">
                        <ResponsiveContainer width={400} height={400} className="text-center">
                            <PieChart width={400} height={400}>
                                <Legend  layout="vartical" verticalAlign="bottom" align="bottom" />
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Statistic;