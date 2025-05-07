import MainLayout from '../components/layouts/Main.layouts';
import AppCard from '@/components/app.cardInfo';
import ChartBar from '@/components/app.chartBar';
import {
    getDataBarChart,
    getDataPieChartCarBrand,
    getDataPieChartGender,
} from '@/modules/fetch/statistics.fetch';
import {
    statisticsBarChart,
    statisticsPieChartGender,
    statisticsPieChartBrand,
} from '@/types/statistics.types';
import { useEffect, useState } from 'react';
import ChartPie from '@/components/app.pieChart';

function Beranda() {
    const [barChartData, setBarChartData] = useState<statisticsBarChart[]>([]);
    const [pieChartGender, setPieChartGender] =
        useState<statisticsPieChartGender>();
    const [pieChartBrand, setPieChartBrand] = useState<
        statisticsPieChartBrand[]
    >([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result1 = await getDataBarChart();
            const result2 = await getDataPieChartGender();
            const result3 = await getDataPieChartCarBrand();

            setBarChartData(result1.data);
            setPieChartGender(result2.data);
            setPieChartBrand(result3.data);
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <MainLayout title="Beranda" namePage="Dashboard">
            <AppCard />
            <div className="w-full my-5">
                {barChartData.length > 0 && loading === false ? (
                    <ChartBar data={barChartData} />
                ) : (
                    <div>
                        <p>loading...</p>
                    </div>
                )}
            </div>
            <div className="w-full flex">
                <div className="w-1/2">
                    {pieChartGender ? (
                        <ChartPie data={pieChartGender} />
                    ) : (
                        <p>loading...</p>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}

export default Beranda;
