import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const HEADERS_MAP = {
  "/": "muhammed abo lila",
  "/home": "muhammed abo lila",
  "/education": "education & courses",
};
const PageHeader = () => {
  const location = useLocation();
  const pathName=location.pathname;
  const [header, setHeader] = useState(
    HEADERS_MAP[pathName] || pathName?.slice(1) || ""
  );
  useEffect(() => {
    setHeader(HEADERS_MAP[pathName] || pathName?.slice(1) || "");
  }, [pathName]);
  return (
    <li className="flex justify-between items-center space-x-1">
      <span className="w-3 h-3 rounded-full bg-identityColor"></span>
      <h2 className="uppercase font-medium text-xl text-mainColor">{header}</h2>
    </li>
  );
};
export default PageHeader;