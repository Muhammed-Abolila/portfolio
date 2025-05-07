import { useEffect, useState } from "react";
import { fetchData } from "../api/getData";
const useSkillsData = () => {
  const [skillsData, setSkillsData] = useState([]);
  const getSkillsData = async () => {
    const data = await fetchData("/skills-data");
    if (data) {
        setSkillsData(data[0]);
    }
  };
  useEffect(() => {
    getSkillsData();
  }, []);
  return { skillsData };
};
export default useSkillsData;