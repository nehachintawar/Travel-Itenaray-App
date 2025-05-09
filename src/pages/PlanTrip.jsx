import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaUserFriends,
  FaUser,
  FaUsers,
  FaHeart,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const travelOptions = [
  { label: "Solo", icon: <FaUser /> },
  { label: "Couple", icon: <FaHeart /> },
  { label: "Family", icon: <FaUsers /> },
  { label: "Friends", icon: <FaUserFriends /> },
];

const PlanTrip = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const backgroundColor = isDark ? "bg-gray-900" : "bg-white";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const inputBg = isDark ? "bg-gray-800" : "bg-white";
  const inputText = isDark ? "text-white" : "text-gray-700";
  const borderColor = isDark ? "border-gray-700" : "border-gray-300";

  // Form states
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [group, setGroup] = useState("");
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  // Validation and submit handler
  const handleSubmit = () => {
    const newErrors = {};
    if (!destination.trim()) newErrors.destination = "Destination is required";
    if (!duration) newErrors.duration = "Please select a duration";
    if (!group) newErrors.group = "Please select a travel group";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowPopup(true);
    }
  };

  return (
    <div
      className={`min-h-screen flex justify-center ${
        isDark ? "bg-black" : "bg-gray-100"
      }`}
    >
      <div
        className={`w-full max-w-md p-6 rounded-lg shadow-lg ${backgroundColor}`}
      >
        <h2 className={`text-2xl font-bold mb-2 ${textColor}`}>
          Plan Your Journey, Your Way!
        </h2>
        <p className={`mb-6 ${textColor}`}>
          Let's create your personalised travel experience
        </p>

        {/* Destination Input */}
        <div className="mb-4">
          <label className={`block mb-1 font-medium ${textColor}`}>
            Where would you like to go?
          </label>
          <div
            className={`flex items-center px-3 py-2 rounded-md border ${borderColor} ${inputBg}`}
          >
            <FaMapMarkerAlt className={`${textColor} mr-2`} />
            <input
              type="text"
              placeholder="Enter Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className={`w-full bg-transparent outline-none ${inputText}`}
            />
          </div>
          {errors.destination && (
            <p className="text-red-500 text-sm mt-1">{errors.destination}</p>
          )}
        </div>

        {/* Duration Select */}
        <div className="mb-4">
          <label className={`block mb-1 font-medium ${textColor}`}>
            How long will you stay?
          </label>
          <select
            className={`w-full px-3 py-2 rounded-md border ${borderColor} ${inputBg} ${inputText} outline-none`}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="" disabled>
              Select Duration
            </option>
            <option value="1-3">1-3 days</option>
            <option value="4-7">4-7 days</option>
            <option value="8-14">8-14 days</option>
            <option value="15+">15+ days</option>
          </select>
          {errors.duration && (
            <p className="text-red-500 text-sm mt-1">{errors.duration}</p>
          )}
        </div>

        {/* Travel Group Options */}
        <div className="mb-6">
          <label className={`block mb-2 font-medium ${textColor}`}>
            Who are you traveling with?
          </label>
          <div className="grid grid-cols-2 gap-3">
            {travelOptions.map((option) => (
              <button
                key={option.label}
                type="button"
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-all ${
                  group === option.label
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
                onClick={() => setGroup(option.label)}
              >
                {option.icon} {option.label}
              </button>
            ))}
          </div>
          {errors.group && (
            <p className="text-red-500 text-sm mt-2">{errors.group}</p>
          )}
        </div>

        {/* Continue Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-all duration-200"
        >
          Continue
        </button>
      </div>

      {/* Happy Journey Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-xl text-center max-w-xs w-full">
            <h3 className="text-2xl font-semibold mb-2 text-green-600">
              🎉 Happy Journey!
            </h3>
            <p className="text-gray-700 mb-4">
              Your trip to <strong>{destination}</strong> with{" "}
              <strong>{group}</strong> for <strong>{duration}</strong> days is
              planned!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanTrip;
