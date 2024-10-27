/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const getRandomElement = ListElements => {
    let element = "";
    element = ListElements[Math.floor(Math.random() * ListElements.length)];
    return element;
  };
  getRandomElement(action);

  let excuseGen = document.querySelector("#excuse");
  console.log(excuseGen);
  excuseGen.innerHTML =
    getRandomElement(who) +
    " " +
    getRandomElement(action) +
    " " +
    getRandomElement(what);
  +" " + getRandomElement(when);
};
