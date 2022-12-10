fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((data) => dataHandler(data.filter((elem) => elem.albumId == 20)));

function dataHandler(data) {
  let div_elem = document.createElement("div");
  div_elem.className = "wrapper";
  document.body.prepend(div_elem);

  console.log(data);

  for (let elem of data) {
    //создание элем
    let div_card = document.createElement("div");
    let h2_elem = document.createElement("h2");
    let img_elem = document.createElement("img");

    //заполнение элементов
    div_card.className = "div_card";
    img_elem.width = "200";
    img_elem.height = "200";

    h2_elem.innerText = elem.title;
    img_elem.src = elem.url;

    //добавление эл в разметку
    div_card.append(h2_elem, img_elem);
    div_elem.append(div_card);
  }
}
