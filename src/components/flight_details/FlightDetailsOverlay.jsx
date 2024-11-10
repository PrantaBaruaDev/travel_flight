import React, { useContext } from "react";
import { flightDataContext } from './../../context/context';

const FlightDetailsOverlay = () => {
    const data = useContext(flightDataContext);

    return (
        <div className="border-primary text-start">
            <h1 className="border-b border-gray-200 px-4 py-2 font-bold text-base">{`${data.flightDepart.city} to ${data.flightArive.city}, ${data.flightDepart.date}`}</h1>
            <div className="p-4">
                {/* Overlay company details */}
                <div className="flex gap-5">
                    <figure>
                        <img
                            className="w-[50px] rounded-full"
                            src="https://img.favpng.com/9/17/22/airplane-aircraft-aviation-logo-poster-png-favpng-J9PdkddGmnqazCTzCA1RjDaLP.jpg"
                            alt=""
                        />
                    </figure>
                    <div className="font-bold">
                        <h1 className="text-base">
                            {`${data.alname}`}{" "}
                            <span className="font-normal">{`${data.operate_country} | ${data.operate_code}`}</span>
                        </h1>
                        <p className="text-sm">Aircraft: {data.aircraft}</p>
                        <p className="text-xs">
                            Operated by: {data.operate_country}
                        </p>
                        <p className="text-xs">{data.flight_class}</p>
                        <p className="text-xs">
                            Available Seats: {data.available_seat}
                        </p>
                    </div>
                </div>
                
                <hr className="my-4" />

                <div className="grid grid-flow-row-dense grid-cols-6 grid-rows-subgrid gap-5">
                    <div className="depart">
                        <p className="text-base font-bold">
                            {data.flightDepart.time}
                        </p>
                        <p className="font-medium text-xs text-secondary">
                            {data.flightDepart.date}
                        </p>
                        <p className="font-medium text-sm">{`${data.flightDepart.code}`}</p>
                        <p className="text-xs text-secondary">
                            Terminal: {data.flightDepart.terminal}
                        </p>
                        <p className="text-xs text-secondary">
                            {data.flightDepart.location}
                        </p>
                        <p className="text-xs text-secondary">{`${data.flightDepart.city}, ${data.flightDepart.country}`}</p>
                    </div>

                    <div className="duration text-center">
                        <p className="text-xs">17 hours 55 minutes</p>
                        <div className="arrow-line flex justify-center">
                            <div className="line1 w-24"></div>
                        </div>
                        <p className="text-xs">1 Stop via Dhaka</p>
                    </div>

                    <div className="arive">
                        <p className="text-base font-bold">
                            {data.flightArive.time}
                        </p>
                        <p className="font-medium text-xs text-secondary">
                            {data.flightArive.date}
                        </p>
                        <p className="font-medium text-sm">{`${data.flightArive.code}`}</p>
                        <p className="text-xs text-secondary">
                            Terminal: {data.flightArive.terminal}
                        </p>
                        <p className="text-xs text-secondary">
                            {data.flightArive.location}
                        </p>
                        <p className="text-xs text-secondary">{`${data.flightArive.city}, ${data.flightArive.country}`}</p>
                    </div>

                    <div className="baggage">
                        <p className="text-base font-bold">Baggage</p>
                        <p className="text-xs text-secondary">Adult</p>
                        <p className="text-xs text-secondary">Children</p>
                        <p className="text-xs text-secondary">Infant</p>
                    </div>

                    <div className="chackin">
                        <p className="text-bash font-bold">Check In</p>
                        <p className="text-xs text-secondary">{`${data.baggage_weight.adult.check_in} Kg(s)`}</p>
                        <p className="text-xs text-secondary">{`${data.baggage_weight.children.check_in} Kg(s)`}</p>
                        <p className="text-xs text-secondary">{`${data.baggage_weight.infant.check_in} Kg(s)`}</p>
                    </div>

                    <div className="cabin">
                        <p className="text-bash font-bold">Cabin</p>
                        <p className="text-xs text-secondary">{`${data.baggage_weight.adult.cabin} Kg(s)`}</p>
                        <p className="text-xs text-secondary">{`${data.baggage_weight.children.cabin} Kg(s)`}</p>
                        <p className="text-xs text-secondary">{`${data.baggage_weight.infant.cabin} Kg(s)`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightDetailsOverlay;
