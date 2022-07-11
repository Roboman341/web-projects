const APIKey = 'caef1c6b6f5dbcc102ffc196fb7c2cb4'
const myURL = 'https://api.themoviedb.org'

const userAction = async () => {
    const response = await fetch(`${myURL}/3/trending/movie/week?api_key=${APIKey}`, {
      method: 'GET',
    //   body: '', //myBody, // string or object
    //   headers: '' //{'Content-Type': 'application/json'}
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson

    MoviesOfTheWeek = [];
    for (let key in myJson.results) {
        let obj = myJson.results[key];
        MoviesOfTheWeek.push(obj);
    }

    let yourMoviesOfTheWeek = [];
    for (let movie of MoviesOfTheWeek){
        if (movie.genre_ids.includes(14) === true){
            yourMoviesOfTheWeek.push(movie.original_title)
        }
    }

    if (yourMoviesOfTheWeek !== [] && yourMoviesOfTheWeek !== null){
    console.log(`Your Drama movies of the week are: ${yourMoviesOfTheWeek}`)
    } else {
        console.log('Sorry, there is no drama films yest')
    }

    let mySection = document.getElementById('workspace');
    let newDiv = document.createElement("div");
    newDiv.className = "added"
    let newContent = document.createTextNode(`(from https://www.themoviedb.org/ API) Your Drama movies of the week are: ${yourMoviesOfTheWeek}`);
    newDiv.appendChild(newContent);
    document.body.insertBefore(newDiv, mySection);
}

