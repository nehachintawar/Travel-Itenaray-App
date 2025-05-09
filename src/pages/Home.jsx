import React from "react";
import { FaClock, FaUsers, FaMoon, FaSun } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";
import { WiDirectionUpRight } from "react-icons/wi";
import flightImage from "../assets/flight.png";
import ActivityTab from "../components/ActivityTab";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-sm mx-auto ${isDark ? "bg-black" : "bg-gray-50"} ${
        isDark ? "text-white" : "text-gray-900"
      } font-sans min-h-screen relative pb-16`}
    >
      {/* Header with Theme Toggle */}
      <div className="p-4 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">Hello Chhavi!</h2>
          <p
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Ready for the trip?
          </p>
        </div>
        <div
          className={`p-2 h-10 w-10 rounded-full flex justify-center items-center bg-[#FF7339] text-white`}
        >
          <strong className="text-2xl">C</strong>
        </div>
      </div>

      {/* Upcoming Trip */}
      <div className="px-4">
        <h3
          className={`text-md font-semibold mb-2 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Your Upcoming Trip
        </h3>
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-164026426-1663760068.jpg?crop=1.00xw:0.980xh;0,0.0178xh&resize=980:*"
            alt="Tokyo"
            className="w-full h-60 object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-4 left-4 text-white">
            <h2 className="text-3xl font-extrabold">TOKYO</h2>
            <p className="text-sm">27.01.2025 - 02.02.2025</p>
          </div>
          <WiDirectionUpRight className="absolute top-4 right-4 text-white text-3xl" />
          <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-around text-xs">
            <div className="flex items-center space-x-2">
              <div className={`bg-[#292929] rounded-full p-2`}>
                <FaClock className="text-[#D1F462] text-sm" />
              </div>
              <div>
                <p className="font-semibold text-white">8 Days</p>
                <p className="text-gray-200 text-[11px] -mt-1">Duration</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`bg-[#292929] rounded-full p-2`}>
                <FaUsers className="text-[#D1F462] text-sm" />
              </div>
              <div>
                <p className="font-semibold text-white">4 (2M,2F)</p>
                <p className="text-gray-200 text-[11px] -mt-1">Group Size</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`bg-[#292929] rounded-full p-2`}>
                <FaListAlt className="text-[#D1F462] text-sm" />
              </div>
              <div>
                <p className="font-semibold text-white">14</p>
                <p className="text-gray-200 text-[11px] -mt-1">Activities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Details */}
      <div className="px-4 py-4">
        <div className="bg-[#2A32FF] rounded-xl p-4 flex items-center justify-between text-white relative overflow-hidden">
          <div>
            <p className="font-bold text-sm mb-1">Flight Details</p>
            <p className="text-xs mb-2">26.01.2025, 10:50 am</p>
            <div className="flex items-center space-x-2 text-sm font-semibold">
              <div>
                <p className="text-white">DEL</p>
                <p className="text-xs text-gray-200">Delhi, India</p>
              </div>
              <span className="text-lg">→</span>
              <div>
                <p className="text-white">NRT</p>
                <p className="text-xs text-gray-200">Narita, Tokyo</p>
              </div>
            </div>
          </div>
          <img
            src={flightImage}
            alt="Flight"
            className="w-[10rem] absolute -bottom-10 right-0 object-contain"
          />
          <button className="absolute top-3 right-3 text-xs text-green-200 font-bold">
            See all
          </button>
        </div>
      </div>

      {/* Accommodation */}
      <div className="px-4 py-4">
        <div className="flex justify-between items-center">
          <h3
            className={`text-md font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Accommodation
          </h3>
          <button
            className={`${
              isDark ? "text-[#D1F462]" : "text-[#3643FB]"
            } text-xs font-semibold`}
          >
            See all
          </button>
        </div>

        <div className="mt-3 flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {/* Hotel Card 1 */}
          <div
            className={`min-w-[220px] ${
              isDark ? "bg-[#2c2c2c]" : "bg-white shadow-md"
            } rounded-2xl overflow-hidden relative ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <div className="relative">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/a1/1a/e3/facade-main-annex-night.jpg?w=1000&h=-1&s=1"
                alt="Shinagawa Prince Hotel"
                className="w-full h-28 object-cover"
              />
              <span className="absolute bottom-0 left-2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-full font-semibold">
                ⭐ 4.0 Very Good
              </span>
            </div>
            <div className="p-3 text-xs">
              <p className="text-sm font-semibold mb-1">
                Shinagawa Prince Hotel
              </p>
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                Check in: 26.01.2025, 11:15 pm
              </p>
              <p
                className={`${isDark ? "text-gray-300" : "text-gray-600"} mb-1`}
              >
                Check out: 28.01.2025, 11:15 am
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                  2 Nights
                </span>
                <span className="text-green-400 font-semibold text-xs flex items-center gap-1">
                  ✔ Confirmed
                </span>
              </div>
            </div>
          </div>

          {/* Hotel Card 2 */}
          <div
            className={`min-w-[220px] ${
              isDark ? "bg-[#2c2c2c]" : "bg-white shadow-md"
            } rounded-2xl overflow-hidden relative ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <div className="relative">
              <img
                src="https://micado-rayout.s3.ap-northeast-1.amazonaws.com/project/45/b2a40df48b323e230f03946dcb1c9b26.jpg"
                alt="Mercure Tokyo Hotel"
                className="w-full h-28 object-cover"
              />
              <span className="absolute bottom-0 left-2 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-semibold">
                ⭐ 4.1 Very Good
              </span>
            </div>
            <div className="p-3 text-xs">
              <p className="text-sm font-semibold mb-1">Mercure Tokyo Hotel</p>
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                Check in: 28.01.2025, 6:30 pm
              </p>
              <p
                className={`${isDark ? "text-gray-300" : "text-gray-600"} mb-1`}
              >
                Check out: 30.01.2025, 11:15 am
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                  2 Nights
                </span>
                <span className="text-yellow-400 font-semibold text-xs flex items-center gap-1">
                  ⏳ Pending
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ActivityTab />
    </div>
  );
};

export default Home;
