(function () {
  
    const baseUrl = "http://localhost:3000";
    const title = document.getElementById("title");
    const poster = document.getElementById("poster");
    const openingCrawl = document.getElementById("opening_crawl");
    const director = document.getElementById("director");
    const producer = document.getElementById("producer");
    const releaseDate = document.getElementById("release_date");
    const submitButton = document.querySelector("[data-button]");
    
    submitButton.addEventListener("click", addFilmToJS);
  
    function addFilmToJS(e) {
      e.preventDefault();
      console.log(title.value);
      return fetch(`${baseUrl}/films`, {
        method: "POST",
        body: JSON.stringify({
          title: title.value,
          Poster: poster.value,
          opening_crawl: openingCrawl.value,
          director: director.value,
          producer: producer.value,
          release_date: releaseDate.value,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }).then((res) => 
      {
        console.log(res,res.json())
      });
    }
    
    
  
  })();
  