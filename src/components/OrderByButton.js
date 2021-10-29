import React, { useContext, useState } from "react";
import OrderByIcon from "components/UI/OrderByIcon";
import ThemeContext from "contexts/ThemeContext";

const OrderByButton = React.forwardRef(({}, ref) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isDropdown, setDropdown] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      <button
        ref={ref}
        className={`flex w-full justify-center items-center ${
          isDarkMode ? "bg-gray-800" : "bg-gray-300"
        } px-2 py-2 rounded-xl space-x-2`}
      >
        <div className="w-5">
          <OrderByIcon />
        </div>
        <p
          className={`${
            isDarkMode ? "text-white" : "text-gray-500"
          } font-medium`}
        >
          Order by
        </p>
      </button>
      {isDropdown && (
        <div
          className={` w-full rounded-md absolute z-20 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-300"
          }`}
        >
          <div className={`${isDarkMode ? "text-white" : "text-gray-500"}`}>
            <button
              className={`block w-full text-left px-4 py-1 rounded-t-md ${
                isDarkMode ? "hover:bg-gray-600" : "hover:bg-red-200"
              }`}
            >
              Number of views
            </button>
            <button
              className={`block w-full text-left px-4 py-1 rounded-b-md ${
                isDarkMode ? "hover:bg-gray-600" : "hover:bg-red-200"
              }`}
            >
              Upload date
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

export default OrderByButton;
