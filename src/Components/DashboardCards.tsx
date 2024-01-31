import { memo } from "react";
import Button from "./Button";

const CardDetails = memo(() => {
  const cardArray = [
    {
      count: 12,
      name: "Schemes Submitted",
      color: "yellow",
    },
    {
      count: 0,
      name: "Schemes Approved",
      color: "pink",
    },
    {
      count: 9,
      name: " Schemes   Pending",
      color: "orange",
    },
    {
      count: 0,
      name: "Schemes Rejected",
      color: "red",
    },
  ];

  return (
    <div>
      <div className="flex m-8 gap-x-8 ">
        {cardArray?.map((card, index) => (
          <div
            key={index}
            className="shadow mt-8 w-4/5 rounded-xl p-8 transition ease-in-out delay-150 bg-blue-500
             hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 spin 1s "
            style={{ backgroundColor: card.color }}
          >
            <div className="flex gap-x-3 ">
              <p className="font-bold text-6xl">{card.count}</p>
              <p className="text-xl mt-2">{card.name}</p>
            </div>
            <div className=" mr-20 border-gray-800 border-solid">
              <Button text="View Summary" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default CardDetails;
