import Slider from "react-slick";

const AccommodationCarousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const hotels = [
    {
      name: "Shinagawa Prince Hotel",
      rating: "4.0",
      status: "Confirmed",
      statusColor: "text-green-400",
      checkIn: "26.01.2025, 11:15 pm",
      checkOut: "28.01.2025, 11:15 am",
      nights: "2",
      image: "/hotel1.jpg",
    },
    {
      name: "Mercure Tokyo Hotel",
      rating: "4.1",
      status: "Pending",
      statusColor: "text-yellow-400",
      checkIn: "28.01.2025, 6:00 pm",
      checkOut: "30.01.2025, 11:15 am",
      nights: "2",
      image: "/hotel2.jpg",
    },
    // Add more hotels if needed
  ];

  return (
    <div className="px-4 py-4">
      <div className="flex justify-between items-center">
        <h3 className="text-md font-semibold text-white">Accomodation</h3>
        <button className="text-green-400 text-xs font-semibold">See all</button>
      </div>

      <Slider {...settings} className="mt-4">
        {hotels.map((hotel, index) => (
          <div key={index} className="px-2">
            <div className="bg-[#2c2c2c] rounded-2xl overflow-hidden text-white">
              <div className="relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-28 object-cover"
                />
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-semibold">
                  ⭐ {hotel.rating} Very Good
                </span>
              </div>
              <div className="p-3 text-xs">
                <p className="text-sm font-semibold mb-1">{hotel.name}</p>
                <p className="text-gray-300">Check in: {hotel.checkIn}</p>
                <p className="text-gray-300 mb-1">Check out: {hotel.checkOut}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-300">{hotel.nights} Nights</span>
                  <span className={`${hotel.statusColor} font-semibold text-xs flex items-center gap-1`}>
                    {hotel.status === "Confirmed" ? "✔" : "⏳"} {hotel.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AccommodationCarousel;
