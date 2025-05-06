import { useState } from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
const ResizeScreen = () => {
  let [resize, setResize] = useState(false);
  const toggleFullScreen = () => {
    let isFullScreen = document.fullscreenElement;
    if (isFullScreen) {
      document.exitFullscreen();
      setResize(false);
    } else {
      document.body.requestFullscreen();
      setResize(true);
    }
  };
  return (
    <li
      className="text-identityColor text-2xl cursor-pointer relative"
      onClick={() => toggleFullScreen()}
    >
      {resize ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
    </li>
  );
};
export default ResizeScreen;