import { skillData } from "./Data/skillsData.js";

const skillsSection = document.querySelector(".skills");

skillData.forEach((item) => {
  const skillContainer = document.createElement("div"); // Create a container for each skill
  skillContainer.classList.add("skill-container");

  const skillImage = document.createElement("img");
  skillImage.classList.add("skill-image");
  skillImage.setAttribute("src", item.skillImage);
  skillImage.setAttribute("alt", item.logo_text);

  const skillTag = document.createElement("p");
  skillTag.classList.add("skill-tag");
  skillTag.innerText = item.logo_text;

  skillContainer.appendChild(skillImage);
  skillContainer.appendChild(skillTag);
  skillsSection.appendChild(skillContainer);
});

/* The speed/duration of the effect in milliseconds */
var i = 0;
var txt = 'I am a Frontend Developer'; /* The text */
var speed = 200; 
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("role").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else{
    i=0;
    document.getElementById("role").innerHTML = '';
    setTimeout(typeWriter, speed);
  }
}



// for(let j=0 ; j<100 ; j++){
    typeWriter();

