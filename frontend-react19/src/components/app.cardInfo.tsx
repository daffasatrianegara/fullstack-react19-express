import { getCardInfoContent } from '@/modules/fetch/statistics.fetch';
import CardInfoComponents from './ui/card-info';
import { useEffect, useState } from 'react';
import {
    UserPlus,
    LucideUsers,
    CarFrontIcon,
    LucideMapPinPlus,
} from 'lucide-react';
import { statisticsType } from '@/types/statistics.types';

const AppCard = () => {
    const [cardData, setCardData] = useState<statisticsType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCardInfoContent();
            setCardData(result.data);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="w-full flex flex-wrap gap-4">
                    <CardInfoComponents
                        icons={
                            <LucideUsers className="text-crayola" size={15} />
                        }
                        title="total pelanggan"
                        value={cardData?.total_users}
                        text="Pelanggan"
                    />
                    <CardInfoComponents
                        icons={
                            <CarFrontIcon className="text-crayola" size={15} />
                        }
                        title="total mobil"
                        value={cardData?.total_cars}
                        text="Mobil"
                    />
                    <CardInfoComponents
                        icons={<UserPlus className="text-crayola" size={15} />}
                        title="pelanggan terbaru"
                        value={cardData?.total_new_users}
                        text="Pelanggan"
                    />
                    <CardInfoComponents
                        icons={
                            <LucideMapPinPlus
                                className="text-crayola"
                                size={15}
                            />
                        }
                        title="mobil terbaru"
                        value={cardData?.total_new_cars}
                        text="Mobil"
                    />
                </div>
            )}
        </div>
    );
};

export default AppCard;
