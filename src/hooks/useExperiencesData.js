import { useEffect, useState } from "react";
import { fetchData } from "../api/getData";
const useExperiencesData = () => {
  const [experiencesData, setExperiencesData] = useState([]);
  const getExperiencesData = async () => {
    const data = await fetchData("/experiences-data");
    if (data) {
        setExperiencesData(data[0]);
    }
  };
  useEffect(() => {
    getExperiencesData();
  }, []);
  return { experiencesData };
};
export default useExperiencesData;