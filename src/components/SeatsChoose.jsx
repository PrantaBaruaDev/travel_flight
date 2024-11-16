import { margin } from "@mui/system";
import React, { useState } from "react";

const SeatsChoose = () => {
    const [seats, setSeats] = useState({
        economy: [
            ["A1", "A2", "A3", "A4", "A5", "A6"],
            ["B1", "B2", "B3", "B4", "B5", "B6"],
            ["C1", "C2", "C3", "C4", "C5", "C6"],
            ["D1", "D2", "D3", "D4", "D5", "D6"],
            ["E1", "E2", "E3", "E4", "E5", "E6"],
        ],
    });
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleCheckBox = (e) => {
        const seat = e.target.parentElement.querySelector(".seatsIcon");
        const text = seat.querySelector("p");
        const seatValue = e.target.value;

        if (e.target.checked) {
            seat.querySelectorAll("div").forEach((div) => {
                div.classList.remove("bg-teal-700");
                div.classList.add("bg-teal-300");
            });
            text.classList.remove("text-white");
            text.classList.add("text-black");

            setSelectedSeats((prev) => [...prev, seatValue]);
        } else {
            seat.querySelectorAll("div").forEach((div) => {
                div.classList.remove("bg-teal-300");
                div.classList.add("bg-teal-700");
            });
            text.classList.remove("text-black");
            text.classList.add("text-white");

            setSelectedSeats((prev) =>
                prev.filter((seat) => seat !== seatValue)
            );
        }
    };

    return (
        <div className="bg-white shadow-2xl rounded-2xl px-2 py-4 w-full">
            {seats.economy.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center mb-2">
                    {row.map((seat, colIndex) => {
                        let marginClass = "";
                        if (colIndex === 3) {
                            marginClass = "ml-8"; 
                        } 

                        return (
                            <label
                                htmlFor={`seat-${rowIndex}-${colIndex}`}
                                key={seat}
                                className={`cursor-pointer ${marginClass} mr-2`}
                            >
                                <input
                                    type="checkbox"
                                    id={`seat-${rowIndex}-${colIndex}`}
                                    name="seats_selected"
                                    className="hidden"
                                    value={seat}
                                    onChange={handleCheckBox}
                                />

                                <div className="seatsIcon relative">
                                    <div className="bg-teal-700 w-[30px] h-[15px] rounded-t-md ml-[5px]"></div>
                                    <div className="bg-teal-700 w-[40px] h-[20px] rounded-md"></div>
                                    <p className="text-white font-medium absolute top-[6px] left-[11px]">
                                        {seat}
                                    </p>
                                </div>
                            </label>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default SeatsChoose;
