import React from "react";
import Icon from "../Elements/Icon";
import CircularProgress from "@mui/material/CircularProgress";

// Map category name (lowercase) to icon component
const categoryIcons = {
  housing: <Icon.House />,
  food: <Icon.Food />,
  transportation: <Icon.Transport />,
  entertainment: <Icon.Gamepad />,
  shopping: <Icon.Shopping />,
  others: <Icon.Other />,
};

// Capitalize first letter
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function CardExpenseComparison({ data, loading }) {
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-64 text-primary">
        <CircularProgress color="inherit" size={50} />
        <span className="mt-2">Loading Data</span>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <div className="text-center text-gray-03 py-10">No data available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((category, idx) => (
        <div
          key={category.id || idx}
          className="bg-white rounded-lg shadow-md p-5"
        >
          {/* Category Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-special-bg text-gray-02 p-3 rounded-lg">
                {categoryIcons[category.category] || <Icon.Other />}
              </div>
              <div className="ms-3">
                <div className="text-gray-02 text-sm">{capitalize(category.category)}</div>
                <div className="font-bold text-xl">${category.amount}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end">
                <span className={`text-sm font-bold ${category.trend === "up" ? "text-special-red" : "text-special-green"}`}>
                  {category.percentage}%
                </span>
                <span className="ms-1">
                  {category.trend === "up" ? (
                    <div className="text-special-red">
                      <Icon.ArrowUp size={14} />
                    </div>
                  ) : (
                    <div className="text-special-green">
                      <Icon.ArrowDown size={14} />
                    </div>
                  )}
                </span>
              </div>
              <div className="text-gray-03 text-xs">Compare to the last month</div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-b border-gray-05 mb-3"></div>

          {/* Sub Items */}
          {category.detail && category.detail.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <div className="text-gray-02 text-sm">{item.item}</div>
              <div className="text-right">
                <div className="font-bold text-sm">${item.amount}</div>
                <div className="text-gray-03 text-xs">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CardExpenseComparison;
