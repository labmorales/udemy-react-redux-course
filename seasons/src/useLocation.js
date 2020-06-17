import { useEffect, useState } from "react";

const useLocation = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (err) => setErrorMessage(err.message)
    );
  }, []);

  return [lat, errorMessage];
};

export default useLocation;
