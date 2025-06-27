import { Typography } from "antd";

const progressData = [
    { value: 30, color: '#FF715B' },   // red
    { value: 35, color: '#00B074' },   // green
    { value: 40, color: '#A96717' },   // brownish yellow
];

const TipsPercent = () => {
    return (
        <div className="w-56">
            <Typography className="font-b5 text-sm text-grayShColor pb-3">Tips Percentage</Typography>
            <div className="flex flex-col gap-[18px] max-w-md w-full">
                {progressData.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-3">
                        <div className="flex justify-between items-center w-full">
                            <div className="text-[#1f2937] font-bold text-xs">{item.value}%</div>
                            {/* <div className="text-grayishBlue font-custom text-text2 font-b5">{item.label}</div> */}
                        </div>

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
        </div>
    );
};

export default TipsPercent;
