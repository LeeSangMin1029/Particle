import { useRef, useEffect } from "react";

const useCanvas = (draw, options = {}) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext(options.context || "2d");
    let frameCount = 0;
    let animationFrameId;
    const render = () => {
      frameCount++;
      options.predraw(context, canvas);
      draw(context, frameCount);
      options.postdraw(context);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, options]);

  return canvasRef;
};
export default useCanvas;