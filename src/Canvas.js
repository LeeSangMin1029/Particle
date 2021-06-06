import React from "react";
import useCanvas from "./hook/useCanvas.js";

function resizeCanvasToDisplaySize(canvas) {
  const { width, height } = canvas.getBoundingClientRect();
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }

  return false;
}

const _predraw = (context, canvas) => {
  context.save();
  resizeCanvasToDisplaySize(canvas);
  const { width, height } = context.canvas;
  context.clearRect(0, 0, width, height);
};

const _postdraw = (context) => {
  context.restore();
};

const Canvas = (props) => {
  const {
    draw,
    predraw = _predraw,
    postdraw = _postdraw,
    options,
    ...rest
  } = props;
  const { context } = options;
  const canvasRef = useCanvas(draw, { context, predraw, postdraw });

  return <canvas ref={canvasRef} {...rest} />;
};
export default Canvas;
