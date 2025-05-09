import { useState } from "react";
import { MdOutlineNordicWalking } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

// Main component
export default function ActivityTab() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Sample data for multiple days
  const itineraryData = {
    "27.01.2025": [
      {
        id: 1,
        title: "Senso-ji Temple & Nakamise Shopping Street",
        timing: "Morning",
        duration: "3 hours",
        pickup: "From Hotel",
        image: img1,
      },
      {
        id: 2,
        title: "Tokyo Sky Tree",
        timing: "1:00 pm Afternoon",
        duration: "3 hours",
        pickup: "From Nakamise Street",
        image: img2,
      },
      {
        id: 3,
        title: "Kimono Wearing",
        timing: "Anytime before 5:00pm",
        duration: "2 hours",
        pickup: "From Hotel",
        image: img3,
      },
    ],
    "28.01.2025": [
      {
        id: 4,
        title: "Tokyo Imperial Palace",
        timing: "Morning",
        duration: "2 hours",
        pickup: "From Hotel",
        image: img2,
      },
      {
        id: 5,
        title: "Shibuya Crossing & Shopping",
        timing: "2:00 pm Afternoon",
        duration: "4 hours",
        pickup: "From Imperial Palace",
        image: img3,
      },
    ],
    "29.01.2025": [
      {
        id: 6,
        title: "Mt. Fuji Day Trip",
        timing: "Full Day (8:00 am)",
        duration: "10 hours",
        pickup: "From Hotel",
        image: img1,
      },
    ],
    "30.01.2025": [
      {
        id: 7,
        title: "Harajuku & Meiji Shrine",
        timing: "Morning",
        duration: "3 hours",
        pickup: "From Hotel",
        image: img1,
      },
      {
        id: 8,
        title: "Shinjuku Gyoen",
        timing: "2:00 pm",
        duration: "2 hours",
        pickup: "From Harajuku",
        image: img3,
      },
      {
        id: 9,
        title: "Robot Restaurant Show",
        timing: "7:00 pm",
        duration: "2 hours",
        pickup: "From Hotel",
        image: img2,
      },
    ],
    "31.01.2025": [
      {
        id: 10,
        title: "Tsukiji Fish Market",
        timing: "Early Morning (6:00 am)",
        duration: "2 hours",
        pickup: "From Hotel",
        image: img1,
      },
      {
        id: 11,
        title: "Tokyo Disneyland",
        timing: "10:00 am",
        duration: "8 hours",
        pickup: "From Fish Market",
        image: img3,
      },
    ],
  };

  // Date state
  const [selectedDate, setSelectedDate] = useState("27.01.2025");
  const selectedActivities = itineraryData[selectedDate] || [];

  // Date selection handler
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div
      className={`flex flex-col ${isDark ? "bg-black" : "bg-gray-50"} ${
        isDark ? "text-white" : "text-gray-900"
      } min-h-screen p-4`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold">Activities</div>
        <div
          className={`text-xs ${
            isDark ? "text-[#D3F462]" : "text-[#313DDF]"
          } font-semibold underline`}
        >
          See all
        </div>
      </div>

      {/* View toggle */}
      <div
      className={`mb-4 overflow-x-auto scrollbar-hide p-2 rounded-lg ${
        isDark ? "bg-[#333333]" : "border border-[#A6A6A6]"
      }`}
    >
      <div className="flex mb-4 gap-3">
        <div
          className={`${
            isDark ? "bg-[#D3F462] text-black" : "bg-[#313DDF] text-white"
          } px-4 py-1 rounded-md`}
        >
          Day Plan
        </div>
        <div
          className={`px-4 py-1 ${
            isDark ? "text-gray-300" : "text-[#313DDF] border border-[#313DDF]"
          } rounded-lg`}
        >
          14 Activities
        </div>
      </div>

      {/* Date selector (scrollable) */}
      <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2">
        {Object.keys(itineraryData).map((date) => {
          const [day, month, year] = date.split(".");
          const dateObj = new Date(year, month - 1, day);
          const monthName = dateObj
            .toLocaleDateString("en-US", { month: "short" })
            .toUpperCase();
          const dayName = dateObj
            .toLocaleDateString("en-US", { weekday: "short" })
            .toUpperCase();
          const dayNum = dateObj.getDate();

          return (
            <button
              key={date}
              onClick={() => handleDateChange(date)}
              className={`flex flex-row rounded-lg items-center justify-center h-16 ${
                selectedDate === date
                  ? `${isDark ? 'bg-[#D3F462]' : 'bg-[#313DDF] text-white'}  text-[#292929] border min-w-20`
                  : isDark
                  ? "bg-gray-700 text-gray-300 min-w-15"
                  : "bg-gray-200 text-gray-700 min-w-15"
              }`}
            >
              {selectedDate === date && (
                <div className="flex flex-col justify-center items-center w-[35%] bg-opacity-80">
                  <span className="text-xl font-bold transform rotate-270">
                    {monthName}
                  </span>
                </div>
              )}
              <div
                className={`flex flex-col px-2 py-2 ${
                  selectedDate === date
                    ? `${
                        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
                      } rounded-r-lg w-[62%]`
                    : "w-full"
                } `}
              >
                <span className="text-xs">{dayName}</span>
                <span className="font-bold text-lg">{dayNum}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>

      {/* Day info */}
      <div className="flex gap-4 mb-4 items-center">
        <span className={`${isDark ? 'bg-[#D3F462] text-black' : 'bg-[#313DDF] text-white'} rounded-full p-1 font-semibold text-sm`}>
          <strong>Day 1 </strong> - {selectedDate}
        </span>
        <span
          className={`flex items-center gap-1 ${
            isDark ? "text-[#D3F462]" : "text-[#313DDF]"
          }`}
        >
          <MdOutlineNordicWalking /> {selectedActivities.length} Activities
        </span>
      </div>

      {/* Activities list */}
      <div className="space-y-4">
        {selectedActivities.map((activity) => (
          <div
            key={activity.id}
            className={`${
              isDark ? "bg-[#4D4D4D] bg-opacity-30" : "bg-white shadow-md"
            } rounded-lg h-[8rem]`}
          >
            <div className="flex">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-[40%] h-[8rem] rounded-l-lg object-cover"
              />
              <div className="flex flex-col gap-2 p-2">
                <h3 className="font-medium text-md">{activity.title}</h3>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm">Timing : </p>
                    <p
                      className={`text-xs ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {activity.timing}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm">Duration : </p>
                    <p
                      className={`text-xs ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {activity.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm">Pick up : </p>
                    <p
                      className={`text-xs ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {activity.pickup}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
