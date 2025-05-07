import { useEffect, useState } from "react";
import { fetchData } from "../api/getData";
const useSocialData = () => {
  const [socialData, setSocialData] = useState([]);
  const getSocialData = async () => {
    const data = await fetchData("/get-social-links-data");
    if (data) {
        setSocialData(data);
    }
  };
  useEffect(() => {
    getSocialData();
  }, []);
  return { socialData };
};
export default useSocialData;
