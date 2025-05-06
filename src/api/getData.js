const apiUrl = import.meta.env.VITE_API_URL;
export const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`${apiUrl}${endpoint}`);
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      return null;
    }
  };