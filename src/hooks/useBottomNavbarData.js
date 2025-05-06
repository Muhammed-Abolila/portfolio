import { useEffect, useState } from "react";
import { fetchData } from "../api/getData";
const useBottomNavbarData = () => {
  const [bottomNavbarData, setBottomNavbarData] = useState([]);
  const getBottomNavBarData = async () => {
    const data = await fetchData("/nav-bar-data");
    if (data) {
      setBottomNavbarData(data);
    }
  };
  useEffect(() => {
    getBottomNavBarData();
  }, []);
  return { bottomNavbarData };
};
export default useBottomNavbarData;
