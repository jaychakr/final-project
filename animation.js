// Mini Game
const imgEl = document.getElementsByTagName("img")[1];
const imgElDog = document.getElementsByTagName("img")[2];
let x = 0;
let y = 0;
let deg = 0;
let direction = 1;
let directionDog = 3;
let found = false;

const animate = function () {
  x += direction;
  deg += 5;
  if (y >= x) {
    direction = -3;
    directionDog = -3;
    found = true;
  }
  if (x < window.innerWidth && x >= 0) {
    imgEl.style.transform = `translateX(${x}px) rotateX(${deg}deg) rotateY(${deg}deg) rotateZ(${deg}deg)`;
    requestAnimationFrame(animate);
  } else {
    found = false;
  }
};

const throwBone = document.getElementById("throw-bone");
throwBone.addEventListener("click", () => {
  x = 0;
  imgEl.style.transform = `translateX(${x}px)`;
  direction = 1;
  requestAnimationFrame(animate);
});

const animateDog = function () {
  y += directionDog;
  if (y < window.innerWidth && y >= 0) {
    if (found) {
      imgElDog.style.transform = `translateX(${y}px) scaleX(-1)`;
    } else {
      imgElDog.style.transform = `translateX(${y}px)`;
    }
    requestAnimationFrame(animateDog);
  } else {
    found = false;
    imgElDog.style.transform = "scaleX(1)";
  }
};

const runDog = document.getElementById("run-dog");
runDog.addEventListener("click", () => {
  directionDog = 3;
  imgElDog.style.transform = "scaleX(1)";
  requestAnimationFrame(animateDog);
});