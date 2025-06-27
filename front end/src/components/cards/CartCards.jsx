import { Skeleton, Typography } from "antd";
import { image } from "../../assets/image";
import { TiArrowUp, TiArrowDown } from "react-icons/ti";
import { useEffect, useState } from "react";

const CartCards = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  const total = [
    {
      id: 1,
      icon: image.cart1,
      name: "Net Revenue",
      value: "$24,313.52",
      perc: "12% (30 days)",
      arrowType: "up",
      bg: "#E6FAF7",
      arrowColor: "#00a389",
    },
    {
      id: 2,
      icon: image.cart2,
      name: "Total Orders",
      value: 357,
      perc: "12% (30 days)",
      arrowType: "up",
      bg: "#E6FAF7",
      arrowColor: "#00a389",
    },
    {
      id: 3,
      icon: image.cart3,
      name: "Active Users",
      value: 35,
      perc: "12% (30 days)",
      arrowType: "up",
      bg: "#E6FAF7",
      arrowColor: "#00a389",

    },
    {
      id: 4,
      icon: image.cart4,
      name: "Abandoned Carts",
      value: 925,
      perc: "12% (30 days)",
      arrowType: "down",
      bg: "#FFE6E7",
      arrowColor: "#F04438",
    },
  ];

  return (
    <div className="border-1 rounded-tl-md rounded-tr-md">
      <div className="flex items-end gap-2 flex-wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {isLoading
            ? [1, 2, 3, 4].map((id) => (
              <Skeleton.Input
                key={id}
                active
                style={{
                  width: "100%",
                  height: 120,
                  borderRadius: 12,
                }}
              />
            ))
            : total.map((item) => (
              <div
                key={item.id}
                style={{
                  background:
                    "radial-gradient(circle at bottom right, #FFFBE5 0%, #FFFFFF 50%, #FFECEC 100%)",
                }}
                className="py-5 flex rounded-xl border border-borderColor justify-center items-center gap-5 min-w-[222px]"
              >
                {/* Icon */}
                <div className="w-10 h-10">
                  <img src={item.icon} alt={item.name} />
                </div>

                {/* Text Section */}
                <div className="flex flex-col gap-[2px]">
                  <Typography className="font-b7 text-[24px] text-blackcolor">
                    {item.value}
                  </Typography>
                  <Typography className="text-h4 font-custom text-blackColor">
                    {item.name}
                  </Typography>

                  <div className="flex items-center gap-1 text-[12px]">
                    <span
                      className="flex items-center text-[14px] p-[.1rem] rounded-full"
                      style={{ color: item.arrowColor, backgroundColor: item.bg }}
                    >
                      {item.arrowType === "up" ? <TiArrowUp /> : <TiArrowDown />}
                    </span>
                    <Typography className="text-[12px] font-custom text-blackColor">
                      {item.perc}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* )
} */}

        </div>
      </div>
    // </div>
  );
};

export default CartCards;
