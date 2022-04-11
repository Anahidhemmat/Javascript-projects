const removeCartItemBtns = document.getElementsByClassName("btn-danger");

for (let i = 0; i < removeCartItemBtns.length; i++) {
  let btn = removeCartItemBtns[i];
  btn.addEventListener("click", (e) => {
    let btnClicked = e.target;
    btnClicked.parentElement.parentElement.remove();
  });
}
