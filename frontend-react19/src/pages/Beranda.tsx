import MainLayout from '../components/layouts/Main.layouts';
import AppCard from '@/components/app.cardInfo';

function Beranda() {
    return (
        <MainLayout title="Beranda" namePage="Dashboard">
            <AppCard />
        </MainLayout>
    );
}

export default Beranda;
