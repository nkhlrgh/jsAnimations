const mountain = document.getElementById("mountain");
const cloudOne = document.getElementById("cloud-one");
const cloudTwo = document.getElementById("cloud-two");
const cloudThree = document.getElementById("cloud-three");
const cloudFour = document.getElementById("cloud-four");
const cloudFive = document.getElementById("cloud-five");
const javascript = document.getElementById("javascript");
const react = document.getElementById("react");
const graphql = document.getElementById("graphql");
const airBalloon = document.getElementById("air-balloon");

function scroll() {
  const increment = window.scrollY;

  airBalloon.style.bottom = 10 + increment * 0.1 + "%";
  cloudOne.style.bottom = 40 + increment * 0.12 + "%";
  cloudOne.style.left = 75 + increment * 0.1 + "%";
  cloudTwo.style.bottom = 80 + increment * 0.14 + "%";
  cloudTwo.style.left = 70 + increment * 0.15 + "%";
  cloudThree.style.bottom = 60 + increment * 0.1 + "%";
  cloudThree.style.left = 0 + increment * -0.12 + "%";
  cloudFour.style.bottom = 70 + increment * 0.16 + "%";
  cloudFour.style.left = 20 + increment * -0.15 + "%";
  cloudFive.style.bottom = 60 + increment * 0.2 + "%";
  cloudFive.style.left = 60 + increment * 0.16 + "%";
  javascript.style.left = 20 + increment * -2.2 + "%";
  react.style.left = 26 + increment * -1.5 + "%";
  graphql.style.left = 32 + increment * -1 + "%";
}

window.addEventListener("scroll", scroll);
