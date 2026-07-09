import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from "@mui/material/CircularProgress";

// Map icon name from API to Icon component
const billIcons = {
  figma: <Icon.Figma />,
  adobe: <Icon.Adobe />,
};

function CardUpcomingBill(props) {
  const { data, loading } = props;

  if (loading) {
    return (
      <Card
        title="Upcoming Bill"
        link="/bill"
        desc={
          <div className="flex flex-col justify-center items-center h-full text-primary">
            <CircularProgress color="inherit" size={50} />
            <span className="mt-2">Loading Data</span>
          </div>
        }
      />
    );
  }

  return (
    <>
      <Card
        title="Upcoming Bill"
        link="/bill"
        desc={
          <div className="flex flex-col justify-around h-full">
						{data.map((item, index) => (
              <div key={item.id || index} className="flex justify-between pt-3 pb-3">
                <div className="flex">
                  <div className="bg-special-bg p-4 rounded-lg flex flex-col">
                    <span className="text-xs">{item.month}</span>
                    <span className="text-2xl font-bold">{item.date}</span>
                  </div>
                  <div className="ms-10">
                    {item.icon ? item.icon : (billIcons[item.logo?.replace(/\.\w+$/, '').toLowerCase()] || <Icon.Other />)}
                    <span className="font-bold">{item.name || item.title}</span>
                    <br />
                    <span className="text-xs">Last Charge - {item.lastCharge}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="py-2 px-4 border border-gray-05 rounded-lg font-bold">
                    ${item.amount}
                  </span>
                </div>
              </div>
            ))}
		    </div>
        }
      />
    </>
  );
}

export default CardUpcomingBill;