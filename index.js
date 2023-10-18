// import { v4 as uuid } from "uuid";
import { v4 as uuid } from 'https://cdn.skypack.dev/uuid';
 const skillData = [

  {
    id: uuid(),
    skillImage: "./assets/html.png",
    logo: "html logo",
    logo_text: "html5",
  },
  {
    id: uuid(),
    skillImage: "./assets/css.png",
    logo: "css logo",
    logo_text: "Css",
  },
  {
    id: uuid(),
    skillImage: "./assets/js.png",
    logo: "javascript logo",
    logo_text: "Javascript",
  },
  {
    id: uuid(),
    skillImage: "./assets/react.png",
    logo: "React js logo",
    logo_text: "react js",
  },
  {
    id: uuid(),
    skillImage: "./assets/redux.png",
    logo: "Redux logo",
    logo_text: "Redux",
  },
  {
    id: uuid(),
    skillImage: "./assets/bootstrap.png",
    logo: "bootstrap logo",
    logo_text: "bootstrap",
  },
  {
    id: uuid(),
    skillImage: "./assets/tailwind-css-icon.png",
    logo: "Tailwind logo",
    logo_text: "Tailwind.css",
  },
  {
    id: uuid(),
    skillImage: "./assets/nodejs-7578002.png",
    logo: "nodejs logo",
    logo_text: "node js",
  },
 {  id: uuid(),
    skillImage: "https://i0.wp.com/iotbyhvm.ooo/wp-content/uploads/2019/01/expressjs.png?fit=872%2C472&ssl=1",
    logo: "express js logo",
    logo_text: "express js", 
},
{
    id: uuid(),
    skillImage: "./assets/mongo-db.png",
    logo: "mongodb logo",
    logo_text: "mongodb",
  },
  {
    id: uuid(),
    skillImage: "./assets/github.png",
    logo: "github logo",
    logo_text: "github",
  },

];



// ... (your import statements and skillData array)

// ... (import statements and skillData array)

const skillsSection = document.querySelector(".skills");
const skillContainer = document.createElement("div");

skillData.forEach((item) => {
  const skillImage = document.createElement("img");
  skillImage.classList.add("skill-image");
  skillImage.setAttribute("src", item.skillImage); // Set the src attribute
  skillImage.setAttribute("alt", item.logo_text); // Set the alt attribute
  skillContainer.appendChild(skillImage);
});

skillsSection.appendChild(skillContainer);


console.log({skillsSection, skillContainer, skillImage})
