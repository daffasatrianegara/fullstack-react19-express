import { statisticsPieChartGender } from '@/types/statistics.types';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const COLORS = ['#0088FE', '#FFBB28'];

const ChartPie = ({ data }: Readonly<{ data: statisticsPieChartGender }>) => {
    const parsedData = [
        { name: 'Laki-laki', value: Number(data.male_data) },
        { name: 'Perempuan', value: Number(data.female_data) },
    ];

    return (
        <div className="w-full h-[300px]">
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={parsedData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                    >
                        {parsedData.map((_, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartPie;
