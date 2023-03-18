const selectAll = document.querySelector(".all");
const sort = document.querySelector(".sorted");
const search = document.querySelector(".search");
const module_image = document.querySelector(".module-image");
const module_genre = document.querySelector(".module-genre");
const description = document.querySelector(".description");
const module_see = document.querySelector(".module-see");
const closeBtn = document.querySelector(".close");
const mod = document.querySelector(".mod");
let genre = [];

if (search.value == "") {
  for (let i = 0; i < films.length; i++) {
    let date = new Date(films[i].Year);
    createCard(
      films[i].Poster,
      films[i].Title,
      date.toLocaleDateString(),
      films[i].id
    );
  }
}
films.forEach((film) => {
  film.genres.forEach((genres) => {
    genre.includes(genres) ? null : genre.push(genres);
  });
});

genre.forEach((e) => {
  let option = document.createElement("option");
  option.textContent = e;
  option.value = e;
  selectAll.append(option);
});

let submit = document.querySelector(`.submit`);
submit.addEventListener("click", () => {
  box.innerHTML = "";
  
  output = selectAll.options[selectAll.selectedIndex].value;
  sortValue = sort.options[sort.selectedIndex].value;
  let sorted = [];

  films.forEach((film) => {
    film.genres.includes(output) ? null : sorted.push(film);
  });

  if (selectAll == "all") {
    sorted = films;
  }

  if (sortValue == "a-z") {
    let arr = sorted.sort((a, b) => {
      return a.Title > b.Title ? 1 : -1;
    });
  } else if (sortValue == "z-a") {
    let arr = sorted.sort((a, b) => {
      return a.Title < b.Title ? 1 : -1;
    });
  } else if (sortValue == "new") {
    let arr = sorted.sort((a, b) => {
      return b.Year - a.Year;
    });
  } else {
    let arr = sorted.sort((a, b) => {
      return a.Year - b.Year;
    });
  }

  let value = search.value;
  let find = sorted.filter((item) =>
    item.Title.toLowerCase().includes(value.toLowerCase())
  );
  find.forEach((film) => {
    let date = new Date(film.Year);
    createCard(film.Poster, film.Title, date.toLocaleDateString(), film.id);
  });
  search.value = "";
});

const info = document.querySelectorAll(`.info`);
info.forEach((e) => {
  e.addEventListener("click", (element) => {
    module_genre.innerHTML = "";
    let card = films.find((item) => {
        return item.id == element.target.dataset.id;
    });
    module_image.src = card.Poster;
    card.genres.forEach((genre) => {
        let createLi = document.createElement("li");
        createLi.textContent = genre;
        module_genre.append(createLi);
    })
    description.textContent = card.overview;
    module_see.href = card.link;
    mod.style.display = "flex";
  });
  
});

closeBtn.addEventListener("click", ()=>{
    mod.style.display = "none";
})