//Exercise 01
let paragraph = document.querySelector("p");

paragraph.innerHTML = paragraph.innerText
  .split(" ")
  .map((word) =>
    word.length > 7
      ? `<span style = "background-color: yellow">${word}</span>`
      : word
  )
  .join(" ");

// const splitted = paragraph.innerText.split(" ");
// const newArr = splitted.filter((word) => word.length > 7);
// newArr.map((word) => {
//   let span = document.createElement("span");
//   span.innerText = word;
//   paragraph.append(span);
//   span.style.backgroundColor = "yellow";
// });

// paragraph = paragraph.innerText
//   .split(" ")
//   .filter((word) => {
//     if (word.length > 7) {
//       let span = document.createElement("span");
//       span.style.backgroundColor = "yellow";
//       return span.append(word);
//     } else {
//       return word;
//     }
//   })
//   .join(" ");

//Exercise 2

const link = document.createElement("a");

link.href = "https://forcemipsum.com/";
link.textContent = "Text jenerated from Lorem ipsum";

document.body.appendChild(link);

//Exercise 3
paragraph.innerHTML = paragraph.innerHTML.split(".").join(". <br>");

//Exercise 4
let wordCount = paragraph.innerText.split(" ").length;

const heading1 = document.querySelector("h1");
const heading2 = document.createElement("h2");
heading2.append(`${wordCount} words`);

heading1.insertAdjacentElement("afterend", heading2);

//Exercise 5

//transforming nodelist to an array with Array.from();

Array.from(document.querySelectorAll("p")).forEach((p) => {
  p.innerText = p.innerText.replaceAll("?", "😂").replaceAll(",", "❤️");
});
