import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function Home() {
  // useState for data
  const [data, setData] = useState([]);
  // state for error
  const [Error, setError] = useState(null);
  console.log(data, "data from api");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  // images for carousel
  const images = [
    "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718841600&semt=ais_user",
  ];

  const TableData = [
    { exchange: ">=1052.64 and <2105.27", price: 93.25 },
    { exchange: ">=2105.28 and <3157.90", price: 93.5 },
    { exchange: ">=3157.95", price: 94.01 },
  ];

  return (
    <div className="flex flex-col">
      <Carousel images={images} />

      <h1 className="text-black text-[30px] font-bold ml-[25px] mt-5 p-2">Platform Price</h1>

      <div className="flex items-center justify-center p-4 sm:p-8">
      <div className="w-full sm:w-[100%] flex-col items-center h-auto flex justify-center bg-gradient-to-b from-lightYellow to-white rounded-lg sm:pb-4 pb-6">
        <p className="w-full sm:w-fit p-2 text-center sm:text-left">Automatic refresh after 30 sec</p>
        <h1 className="w-full sm:w-fit p-2 text-[28px] sm:text-[36px] font-extrabold text-center sm:text-left">350 INR</h1>
        <h4 className="w-full sm:w-fit p-2 text-[18px] sm:text-[22px] font-medium text-center sm:text-left">1 USD = 350 INR</h4>

        <div className="overflow-x-auto w-full sm:w-[35%] p-5">
          <table className="min-w-full ">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-black">
                  Exchange($)
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-black">
                  Price(₹)
                </th>
              </tr>
            </thead>
            <tbody>
              {TableData.map((row, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-300">{row.exchange}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

      <div className="w-full h-auto flex text-center justify-center items-center p-5 bg-gray-500">
        <ul className="flex gap-20">
          <Link to={"/"}>
            {" "}
            <li className="text-2xl hover:text-white">Home</li>
          </Link>
          <Link to={"/sell"}>
            <li className="text-2xl hover:text-white">Sell</li>
          </Link>
          <Link to={"/buy"}>
            {" "}
            <li className="text-2xl hover:text-white">Buy</li>
          </Link>
        </ul>
      </div>
      <div className="flex w-fit justify-center flex-wrap gap-5">
        {data.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
