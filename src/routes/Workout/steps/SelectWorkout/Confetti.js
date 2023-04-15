import confetti from "canvas-confetti";

var count = 200;
var defaults = {
  origin: { y: 0.7 },
};

export const confettiEffect = () => {
  const fire = (particleRatio, opts) => {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  };

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ["#EB4828", "#EBAA28", "#EB286A", "#386641"],
  });
  fire(0.2, {
    spread: 60,
    colors: ["#EB4828", "#EBAA28", "#EB286A", "#386641"],
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ["#EB4828", "#EBAA28", "#EB286A", "#386641"],
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    colors: ["#EB4828", "#EBAA28", "#EB286A", "#386641"],
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors: ["#EB4828", "#EBAA28", "#EB286A", "#386641"],
  });
};
