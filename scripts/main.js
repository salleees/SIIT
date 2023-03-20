(function () {
    const baseUrl = "http://localhost:3000";
    const allFilmsContainer = document.querySelector("[data-film-list]");
    const buttonContainer = document.querySelector('[data-button]');
    const buttonClass = document.getElementsByClassName("addButton");
    addFilmButton();
    getDataFromJSON();
  
    function getDataFromJSON() {
      const promise = fetch(`${baseUrl}/films`)
        .then((resp) => resp.json(), console.warn)
        // .then((data)=> console.log(data));
        .then(handleResults);
  
      function handleResults(data) {
        for (const post of data) {
          // console.log(post);
  
          const link = document.createElement("a");
          const Itemlist = document.createElement("li");
  
          Itemlist.textContent = post.title;
          link.href = `filmDetails.html?postId=${post.id}`;
          link.appendChild(Itemlist);
  
          var poster = document.createElement("img");
  
          poster.setAttribute("src", post.poster);
  
          // console.log(poster);
          poster.setAttribute("width", "304");
          poster.setAttribute("height", "228");
          poster.setAttribute("alt", "Films poster");
  
          allFilmsContainer.append(link, poster);
        }
      }
    }
  //   console.log(buttonClass);
  
    buttonClass[0].addEventListener('click', handleClickAddFilm);
  
    function addFilmButton() {
      const addFilmButton = document.createElement("button");
      addFilmButton.innerHTML = "Add Film";
      addFilmButton.classList.add("addButton");
  
      buttonContainer.append(addFilmButton);
    }
  
    function handleClickAddFilm(e){
      window.location.href="addFilm.html";
    }
  })();
  