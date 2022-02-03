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
