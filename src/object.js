const time = (function () {
  let speed = 1.0;
  function changeBy(val) {
    speed += val;
    if (speed > 2) {
      speed = 2;
    } else if (speed < 0) {
      speed = 0;
    }
  }
  return {
    up: () => {
      changeBy(0.1);
    },
    down: () => {
      changeBy(-0.1);
    },
    getSpeed: () => {
      return speed;
    },
  };
})();
export { time };
