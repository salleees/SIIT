
fetch('http://localhost:3000/films')
    .then((res) =>res.json(), console.warn)
    .then(createListOfFilms);

    function createListOfFilms(data)
    {
        for(const post of data)
        {
            // we create a li for every title
            const itemList = document.createElement('li');
            itemList.classList.add('itemList')  //adding a class for the ItemList
            itemList.textContent = post.title;  //itemlist gets the title from tje server

            //we create an img element for the poster 
            const poster = document.createElement('img')
            poster.setAttribute("src", post.poster);   //poster gets the link image link from the server
            poster.classList.add('poster')  //adding a class for the poster

            const link = document.createElement('a'); //adding an link for every element of the list
            link.href='file:///C:/SIIT/filmDetails.html'; 

    
            link.append(itemList);  //itemList is attached to the link
            document.body.append(link, poster); //the link and the poster are attached to the body in the document
        }
    }