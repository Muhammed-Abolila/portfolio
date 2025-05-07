import { useEffect, useState } from "react";
import { fetchData } from "../api/getData";
const useProjectsData = () => {
  const [projectsData, setProjectsData] = useState([]);
  const getProjectsData = async () => {
    const data = await fetchData("/get-projects-data");
    if (data) {
        setProjectsData(data);
    }
  };
  useEffect(() => {
    getProjectsData();
  }, []);
  return { projectsData };
};
export default useProjectsData;