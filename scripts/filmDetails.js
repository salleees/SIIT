const urlParams = new URLSearchParams(location.search);
const postId = urlParams.get("postId");
const deletebuttonContainer = document.querySelector("[data-delete-button]");
const deleteButtonClass = document.getElementsByClassName("deleteButton");

deleteFilmButton();

fetch(`http://localhost:3000/films/${postId}`)
  .then((res) => res.json())
  .then((post) => {
    document.querySelector("[data-title]").textContent = post.title;
    const poster = document.querySelector("[data-poster]");
    const posterValue = post.poster;
    const imgSrc = posterValue;
    poster.src = imgSrc;
    poster.setAttribute("width", "500");
    poster.setAttribute("height", "500");

    document.querySelector("[data-Opening-Crawl]").textContent =
      post.opening_crawl;
    document.querySelector("[data-Director]").textContent = post.director;
    document.querySelector("[data-Producer]").textContent = post.producer;
    document.querySelector("[data-Release-Date]").textContent =
      post.release_date;
  });

deleteButtonClass[0].addEventListener("click", handleClickDeleteFilm);



function deleteFilmButton() {
  const deleteFilmButton = document.createElement("button");
  deleteFilmButton.innerHTML = "Delete this Film";
  deleteFilmButton.classList.add("deleteButton");

  deletebuttonContainer.append(deleteFilmButton);
}

async function handleClickDeleteFilm(e) {
  await fetch(`http://localhost:3000/films/${postId}`, {
    method: "DELETE",
  }).then((res) => res.json());

}