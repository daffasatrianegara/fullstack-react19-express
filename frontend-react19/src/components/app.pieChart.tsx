import {
    statisticsPieChartBrand,
    statisticsPieChartGender,
} from '@/types/statistics.types';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const COLORS = ['#0088FE', '#FFBB28', '#FF8042', '#00C49F', '#22e162'];

const ChartPie = ({
    dataGender,
    dataBrand,
}: Readonly<{
    dataGender: statisticsPieChartGender;
    dataBrand: statisticsPieChartBrand[];
}>) => {
    const parsedDataGender = [
        { name: 'Laki-laki', value: Number(dataGender.male_data) },
        { name: 'Perempuan', value: Number(dataGender.female_data) },
    ];

    const parsedDataBrand = dataBrand.map((data) => {
        let brand = {
            name: data.brand,
            value: Number(data.count),
        };

        return brand;
    });

    return (
        <div className="w-full flex flex-wrap mt-5 md:gap-4 gap-5 justify-center">
            <div className="w-full md:w-[40%] h-[400px] md:h-[350px] border-1 border-gray-400 rounded-lg p-6">
                <p className="mb-3 font-semibold text-crayola text-lg md:text-xl capitalize">
                    Distribusi gender Pengguna
                </p>
                <ResponsiveContainer className={'pb-15 md:pb-6'}>
                    <PieChart>
                        <Pie
                            data={parsedDataGender}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label
                        >
                            {parsedDataGender.map((_, index) => (
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
            <div className="w-full md:w-[55%] h-[400px] md:h-[350px] border-1 border-gray-400 rounded-lg p-6">
                <p className="mb-3 font-semibold text-crayola text-lg md:text-xl capitalize">
                    Distribusi Merk Kendaraan terbanyak
                </p>
                <ResponsiveContainer className={'pb-15 md:pb-6'}>
                    <PieChart>
                        <Pie
                            data={parsedDataBrand}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label
                        >
                            {parsedDataBrand.map((_, index) => (
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
        </div>
    );
};

export default ChartPie;
