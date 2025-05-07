import { statisticsBarChart } from '@/types/statistics.types';
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const ChartBar = ({ data }: Readonly<{ data: statisticsBarChart[] }>) => {
    const parsedData = data.map((item) => ({
        ...item,
        users: Number(item.users),
        cars: Number(item.cars),
    }));

    return (
        <div className="w-[100%] h-[58vh] border-1 border-gray-400 p-6 rounded-lg">
            <p className="mb-3 font-semibold text-crayola text-xl capitalize">
                Pertumbuhan Pengguna dan Kendaraan terbaru
            </p>
            <ResponsiveContainer className={"pb-6"} width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={parsedData}
                    margin={{
                        top: 5,
                        right: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="users"
                        fill="#125427"
                        activeBar={<Rectangle fill="#1b7b39" stroke="#1b7b39" />}
                    />
                    <Bar
                        dataKey="cars"
                        fill="#1DC355"
                        activeBar={<Rectangle fill="#22e162" stroke="#22e162" />}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartBar;
