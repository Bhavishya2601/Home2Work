import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const bestModernChairs = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3JmUEOg84SrT0VDhej0GJlc7D55nx3wIDQ&s",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBLa2EfsNTOz9LvvA2vYqteL5JpVJQM6w0kw&s",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_HGZOxJaygy0JJkr4Dxtyc1Yfo-L8yIw0nA&s",
    },
    // {
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvGrmrg5Nn49WY4g9nKD0j7Vi07Pm5mYFww&s",
    // },
    // {
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7mOHKlZPL1cdUEsgZcFlvE2BsTAfCpcaew&s",
    // },
    // {
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6uS1lGIZuTPY_uH6mnyNFQPmQ83HJB2yovQ&s",
    // },
  ];

  return (
    <>
    <Header />
    <div className="bg-gray-100 p-6">
      <section>
        <h1 className="text-2xl font-semibold mb-4">Discover Product</h1>


        <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="relative cursor-pointer">
              <img
                src="/31.png"
                alt="Big Sell"
                className="rounded-lg w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-30 text-white rounded-lg text-3xl font-semibold" onClick={()=>navigate('/generate')}>
                <div>AI powered Design Suggestion</div>
              </div>
            </div>
            <div className="relative cursor-pointer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa2YaXuW8oKe5ylU2ESEEbd3jkXLuqVMm4nQ&s"
                alt="Big Sell"
                className="rounded-lg w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-opacity-30 text-white rounded-lg text-3xl font-bold" onClick={()=>navigate('/chat')}>
                <div>Chat with Designers</div>
              </div>
            </div>
          {/* ))} */}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {bestModernChairs.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex flex-col items-center"
            >
              <div className="h-60 w-full rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default ProductPage;