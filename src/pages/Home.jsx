import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

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

  return (
    <div className="flex flex-col">
      <h1 className="mt-2 text-center text-2xl sm:text-3xl font-semibold text-slate-600">
        This is the Home Page
      </h1>
      <p className="mt-2 text-base sm:text-lg text-slate-500 flex flex-wrap text-justify px-4">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam.
      </p>
      <div className="w-full h-auto flex text-center justify-center items-center p-5 bg-blue-300">
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
