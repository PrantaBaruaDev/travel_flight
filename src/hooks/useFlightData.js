import { useContext } from 'react';
import { flightDataContext } from "src/context/context";

const useFlightData = () => {
  const { data: contextData } = useContext(flightDataContext);

  if (!contextData || !contextData.flightData) {
    throw new Error('useFlightData must be used within a FlightDataProvider');
  }

  const flightData = contextData.flightData;

  return { flightData };
};

export default useFlightData;
