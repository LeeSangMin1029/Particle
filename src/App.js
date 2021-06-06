import { useEffect } from "react";
import Canvas from "./Canvas.js";
function App() {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const draw = (ctx, frameCount) => {};
  const options = {
    context: "2d",
  };
  useEffect(() => {
    window.addEventListener("contextmenu", handleContextMenu);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return <Canvas draw={draw} options={options} />;
}

export default App;
