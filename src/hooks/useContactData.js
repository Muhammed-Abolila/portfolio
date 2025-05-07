import { useEffect, useState } from "react";
import { fetchData } from "../api/getData";
const useContactData = () => {
  const [contactData, setContactData] = useState([]);
  const getContactData = async () => {
    const data = await fetchData("/get-contact-data");
    if (data) {
        setContactData(data[0]);
    }
  };
  useEffect(() => {
    getContactData();
  }, []);
  return { contactData };
};
export default useContactData;