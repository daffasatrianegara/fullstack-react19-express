const CardInfoComponents = ({
    icons,
    title,
    value,
    text,
}: Readonly<{
    icons: React.ReactNode;
    title: string;
    value: string | any;
    text: string;
}>) => {
    return (
        <div className="w-fit h-fit px-5 py-3 bg-green-100 rounded-lg">
            <div className="flex w-full items-center gap-2">
                {icons}
                <p className="text-crayola text-sm capitalize">{title}</p>
            </div>
            <p className="mt-1 text-xl font-semibold">
                {value} {text}
            </p>
        </div>
    );
};

export default CardInfoComponents;
