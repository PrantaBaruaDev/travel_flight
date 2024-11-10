import React, { useContext } from "react";
import { flightDataContext } from "src/context/context";

const ReviewBooking = () => {
    const data = useContext(flightDataContext);

    return (
        <div className="card bg-white shadow-xl px-4 py-5 mb-5 rounded-xl">
            <div className="flex gap-5 px-7">
                <figure className="flex-none">
                    <img
                        className="w-[50px] rounded-full"
                        src="https://img.favpng.com/9/17/22/airplane-aircraft-aviation-logo-poster-png-favpng-J9PdkddGmnqazCTzCA1RjDaLP.jpg"
                        alt=""
                    />
                </figure>
                <div className="flex-grow font-bold">
                    <p className="font-normal text-start text-xs my-1">
                        {`${data.alname}`}
                    </p>
                    <p className="text-start">{`${data.operate_country} | ${data.operate_code}`}</p>
                    <div className="flex items-center text-sm gap-5">
                        <p className="">Aircraft: {data.aircraft}</p>
                        <p className="">
                            Operated by: {data.operate_country}
                        </p>
                    </div>
                </div>
                <p className="flex-none text-sm">{data.flight_class}</p>
            </div>

            <hr className="my-4" />
            <div className="flight-details text-start px-7">
                <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-subgrid gap-20">
                    <div className="depart">
                        <p className="text-xs text-gray-600">Depart</p>
                        <p className="text-base font-bold">
                            {data.flightDepart.time}
                        </p>
                        <p className="text-xs font-medium">
                            {data.flightDepart.date}
                        </p>
                        <p className="text-sm font-medium">
                            {data.flightDepart.code}
                        </p>
                        <p className="text-sm font-medium">
                            {data.flightDepart.city}
                        </p>
                    </div>
                    <div className="duration">
                        <p className="text-sm">17 hours 55 minutes</p>
                        <div className="arrow-line">
                            <div className="line1"></div>
                            <div className="line2"></div>
                        </div>
                        <p className="text-sm">Non Stop</p>
                    </div>

                    <div className="arive">
                        <p className="text-xs text-gray-600">Arive</p>
                        <p className="text-base font-bold">
                            {data.flightArive.time}
                        </p>
                        <p className="text-xs font-medium">
                            {data.flightArive.date}
                        </p>
                        <p className="text-sm font-medium">
                            {data.flightArive.code}
                        </p>
                        <p className="text-sm font-medium">
                            {data.flightArive.city}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewBooking;
