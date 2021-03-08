"use strict";

const seeLessonDetailsBtn = document.querySelector("#course_lessons");
const innerNavigaion = document.querySelector("#inner_nav");
const courseHeader = document.querySelector("#course_header");
const applyNow = document.querySelector("form button");

const seeLessonDetails = function (e) {
  e.preventDefault();

  if (!(e.target.type === "submit")) return null;

  const lessonSelected = e.target.closest("div").dataset.ln;
  const lessonDetails = document.querySelector(
    `.lesson_details_${lessonSelected}`
  );
  lessonDetails.classList.toggle("hidden");

  // to change the sign on the button
  if (e.target.textContent.trim() == "+") {
    e.target.textContent = "-";
  } else {
    e.target.textContent = "+";
  }
};

const handleInnerNav = function (e) {
  e.preventDefault();

  if (!(e.target.tagName === "A")) return null;

  const id = e.target.getAttribute("href");

  // smooth scrolling using scroll into view
  document.querySelector(`${id}`).scrollIntoView({ behavior: "smooth" });
};

seeLessonDetailsBtn.addEventListener("click", seeLessonDetails);

innerNavigaion.addEventListener("click", handleInnerNav);

courseHeader.addEventListener("click", (e) => {
  e.preventDefault();
});

applyNow.addEventListener("click", (e) => {
  e.preventDefault();
});
