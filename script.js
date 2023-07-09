const cards = document.querySelectorAll(".data-section");
const options = {
  threshold: 0.4,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-animate");
    }
  });
}, options);

cards.forEach((item) => {
  observer.observe(item);
});

let currentPosition;
const paddleRight = document.querySelector(".paddle-right");
const paddleLeft = document.querySelector(".paddle-left");

const addPaddleMovement = (direction) => {
  if (
    paddleRight.classList.contains("paddles-move-right") ||
    paddleRight.classList.contains("paddles-move-right-back")
  ) {
    return;
  }
  if (direction === "forward") {
    paddleRight.classList.add("paddles-move-right");
    paddleLeft.classList.add("paddles-move-left");
    setTimeout(() => {
      paddleRight.classList.remove("paddles-move-right");
      paddleLeft.classList.remove("paddles-move-left");
    }, 1200);
  } else if (direction === "reverse") {
    paddleRight.classList.add("paddles-move-right-back");
    paddleLeft.classList.add("paddles-move-left-back");
    setTimeout(() => {
      paddleRight.classList.remove("paddles-move-right-back");
      paddleLeft.classList.remove("paddles-move-left-back");
    }, 1200);
  }
};

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (currentPosition) {
    if (scrollPosition > 600) {
      if (scrollPosition > currentPosition) {
        addPaddleMovement("forward");
      } else {
        addPaddleMovement("reverse");
      }
    }
    currentPosition = scrollPosition;
  } else {
    currentPosition = scrollPosition;
  }
});


