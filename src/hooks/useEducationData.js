import { useEffect, useState } from "react";
import { fetchData } from "../api/getData";
const useEducationData = () => {
  const [educationData, setEducationData] = useState([]);
  const getEducationData = async () => {
    const data = await fetchData("/education-data");
    if (data) {
        setEducationData(data[0]);
    }
  };
  useEffect(() => {
    getEducationData();
  }, []);
  return { educationData };
};
export default useEducationData;