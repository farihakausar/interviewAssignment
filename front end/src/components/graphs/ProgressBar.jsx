
const progressData = [
    { value: 64, label: 'Wings & Beer', color: '#FF715B' },   // red
    { value: 21, label: 'Rum & Reason', color: '#00B074' },   // green
    { value: 84, label: 'Counter I', color: '#A96717' },   // brownish yellow
];

const CustomProgressBars = () => {
    return (
        <div className="flex flex-col gap-7 max-w-md w-full">
            {progressData.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3">
                    <div className="flex justify-between items-center w-full">
                        <div className="text-[#1f2937] font-bold text-sm">{item.value}</div>
                        <div className="text-grayishBlue font-custom text-text2 font-b5">{item.label}</div>
                    </div>

                    {/* Progress Track */}

                    {/* Progress Track */}
                    <div className="relative w-full h-3 bg-[#e5e7eb] rounded-sm overflow-hidden">
                        <div
                            className="h-full rounded-sm"
                            style={{
                                width: `${item.value}%`,
                                backgroundColor: item.color,
                                transition: 'width 0.3s ease-in-out',
                            }}
                        />
                    </div>


                </div>
            ))}
        </div>
    );
};

export default CustomProgressBars;
