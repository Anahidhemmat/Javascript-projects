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
