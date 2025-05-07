import { useEffect, useState } from "react";
import { fetchData } from "../api/getData";
const useHomeData = () => {
  const [homeData, setHomeData] = useState([]);
  const getHomeData = async () => {
    const data = await fetchData("/get-home-data");
    if (data) {
        setHomeData(data[0]);
    }
  };
  useEffect(() => {
    getHomeData();
  }, []);
  return { homeData };
};
export default useHomeData;
