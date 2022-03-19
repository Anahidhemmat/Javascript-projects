const listItems = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");

let draggedItam = null;

for (let i = 0; i < listItems.length; i++) {
  const item = listItems[i];

  item.addEventListener("dragstart", (e) => {
    console.log(e);
    draggedItam = item;
    setTimeout(() => {
      item.style.display = "none";
    }, 0);
  });
  item.addEventListener("dragend", () => {
    setTimeout(() => {
      draggedItam.style.display = "block";
      draggedItam = null;
    }, 0);
  });

  for (let j = 0; j < lists.length; j++) {
    const list = lists[j];

    list.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    list.addEventListener("dragenter", (e) => {
      list.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      e.preventDefault();
    });
    list.addEventListener("dragleave", (e) => {
      list.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    });
    list.addEventListener("drop", () => {
      list.append(draggedItam);
      list.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    });
  }
}
