let Container = document.getElementById("Container");

let movies={
  "Search": [
    {
      "name":"Bruce Lee",
      "Title": "Indian Bruce Lee English Dubbed Entertainment Action Full Movie ",
      "Year": "2015",
      "imdbID": "tt2229499",
      "Type": "movie",
      "Poster": "https://i.ytimg.com/vi/ExMx2lxb-b0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIP9AAffXjnJCNu5ytWdklyu5PvA",
      "desc":": Bagavathi, a tea vendor, has big dreams for his younger brother, Guna. However, when Guna's girlfriend's father kills him, Bagavathi must fight to protect Guna's unborn child",
      "link":"https://www.youtube.com/embed/ExMx2lxb-b0?si=VZZESP8HOZ4Beypt"
    },
    {
      "name":"Thalaivaa",
      "Title": "THALAIVAA | Superstar Vijay English Dubbed Movie | Sathyaraj , Amalapaul , Santhanam , Vijay",
      "Year": "2013",
      "imdbID": "tt1285241",
      "Type": "movie",
      "Poster": "https://i.ytimg.com/vi/CnHI_ld_MhA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwJEYXxkTMl68Rje4NVEMwCIq9iA",
      "desc":"Thalaivaa is a 2013 Tamil action drama thriller film about a son who takes over his father's role as a mafia don in Mumbai",
      "link":"https://www.youtube.com/embed/CnHI_ld_MhA?si=n2H8HxiQDr4TzMa5"
    },
    {
      "name":"Dulquer Salmaan",
      "Title": "Dulquer Salmaan, Malavika English Movie | Dubbed Movie | The Flying Life English Movie",
      "Year": "2023",
      "imdbID": "tt0112883",
      "Type": "movie",
      "Poster": "https://i.ytimg.com/vi/Q1VM9ekypTs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyxj6ffqoXpcqDaTnjw-Hc0Th1Yg",
      "desc":"Pattam Pole is a 2013 Malayalam romantic film about a traditional man and a rebellious woman who fall in love",
      "link":"https://www.youtube.com/embed/Q1VM9ekypTs?si=l_HXMxu1PPe2dGph"
    },
    {
      "name":"Thiri",
      "Title": "Thiri English Dubbed Movie | Thiri Dubbed Movie",
      "Year": "2017",
      "imdbID": "tt0461936",
      "Type": "movie",
      "Poster": "https://i.ytimg.com/vi/q3E2Q0sHLKQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4vkjqxf7R7Fvk0uzJ-io8oLHSGw",
      "desc":"Thiri is a 2017 Tamil-language action drama film about an engineering student who gets into trouble with a politician's son",
      "link":"https://www.youtube.com/embed/q3E2Q0sHLKQ?si=jLlmfZ0aGLWNexAt"
    },
    {
      "name":"Window seat",
      "Title": "New English Love Story Movie |Window Seat English Dubbed Full Movie|Shamna Kasim,Manisha Yadav,Vimal",
      "Year": "2022",
      "imdbID": "tt1318517",
      "Type": "movie",
      "Poster": "https://i.ytimg.com/vi/vMe6UQAD73c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKS9FV5eL2LNOlkxOrXMwTV5HyxQ",
      "desc":"Window Seat is a 2022 Indian crime, romance, and thriller film about a man named Raghu who finds himself in a series of life-altering events after witnessing a murder from his train window seat",
      "link":"https://www.youtube.com/embed/vMe6UQAD73c?si=I-NugB1aPAGivmMC"
    },
    {
      "name":"Jungle cat",
      "Title": "English Full Movie | Jungle Cat | South Indian Dubbed Movie | English Crime Thriller Movie | Full HD",
      "Year": "2018",
      "imdbID": "tt0077451",
      "Type": "movie",
      "Poster": "https://i.ytimg.com/vi/9Tpie6s-6Ks/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAmjfQjA6hZbccbvaYO-0quYXY_BA",
      "desc":"jjsdbjbv",
      "link":"https://www.youtube.com/embed/9Tpie6s-6Ks?si=6oVozK_6z_-l9NwM"
    },
    {
      "name":"Happy Sardar",
      "Title": "Happy Sardar English Dubbed Full Movie | English Comedy Movie | Movie",
      "Year": "2019",
      "imdbID": "tt10709484",
      "Type": "movie",
      "Poster": "https://i.ytimg.com/vi/VU6F4sB5pVk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_SDaWS3ENZYIDh9E5RRbztgkN_g",
      "desc":"jjsdbjbv",
      "link":"https://www.youtube.com/embed/VU6F4sB5pVk?si=MJrrqFmQdrjgsojx"
    },
    {
      "name":"Baskar",
      "Title": "New English Romantic Action Thriller | Arvind Swamy, Amala Paul | Baskar Rascal English Dubbed Movie",
      "Year": "2018",
      "imdbID": "tt3534282",
      "Type": "movie",
      "Poster": "https://i.ytimg.com/vi/8jlXScqEkh0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMzpZe6hhnNQHtOHwR_58nfgy7ZA",
      "desc":"jjsdbjbv",
      "link":"https://www.youtube.com/embed/8jlXScqEkh0?si=hCjzF5n1EMo6D4NF"
    },
    {
      "name":"Miles of Love",
      "Title": "New English Love Story Movie | Miles Of Love English Dubbed Full Movie | Abhinav | Ramya | Raviteja",
      "Year": "2021",
      "imdbID": "tt0043918",
      "Type": "movie",
      "Poster": "https://i.ytimg.com/vi/PNWOYSi7JAk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzoMCEmdCyHIJpwVytRR-Of0rzSw",
      "desc":"jjsdbjbv",
      "link":"https://www.youtube.com/embed/PNWOYSi7JAk?si=Lswpm01kaU33ywaQ"
    },
    {
      "name":"Queen Amy",
      "Title": "New English Campus Feel Good Entertainment Thriller Movie | Queen Aamy English Dubbed Full Movie",
      "Year": "2024",
      "imdbID": "tt0040076",
      "Type": "movie",
      "Poster": "https://i.ytimg.com/vi/KBHWaEnsv0w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGhqvAuyqYFt-QYfXfbMSudv-zlw",
      "desc":"jjsdbjbv",
      "link":"https://www.youtube.com/embed/KBHWaEnsv0w?si=A4I2GnEAGCEdIQ6f"
    }
  ],
  "totalResults": "1294",
  "Response": "True"
}

let Picture = movies.Search;

Picture.map((ele, index) => {
  Container.innerHTML += `
    <a id="Linked-${index}" class="link" href="#">
      <div class="Card" id="Card">
        <h3>${ele.Title}</h3>
        <img class="imag" src=${ele.Poster} alt="">
        <h4>${ele.Year}</h4>
      </div>
    </a>
  `;
});

Picture.forEach((ele, index) => {
  let a = document.getElementById(`Linked-${index}`);
  
  a.addEventListener("click", () => {
    let learn = JSON.parse(localStorage.getItem("LearnEnglish")) || [];
    
    let Elearn = {
      title:ele.name,
      name: ele.Title,
      poster: ele.Poster,
      rating: ele.imdbID,
      desc: ele.desc,
      link:ele.link,
      year: ele.Year
    };

    learn.push(Elearn);
    console.log(learn);

    localStorage.setItem("LearnEnglish", JSON.stringify(learn));

    window.open("Movie.html")
  });
});


function searchMovies() {
  let searchInput = document.getElementById("searchInput").value.toLowerCase(); 
  Container.innerHTML = ""; 
  let filteredMovies = Picture.filter((movie) =>
    movie.Title.toLowerCase().includes(searchInput) || 
    movie.name.toLowerCase().includes(searchInput)
  );

  if (filteredMovies.length > 0) {
    filteredMovies.map((ele, index) => {
      Container.innerHTML += `
        <a id="Linked-${index}" class="link" href="#">
          <div class="Card" id="Card">
            <h3>${ele.Title}</h3>
            <img class="imag" src=${ele.Poster} alt="">
            <h4>${ele.Year}</h4>
          </div>
        </a>
      `;
    });

    filteredMovies.forEach((ele, index) => {
      let a = document.getElementById(`Linked-${index}`);

      a.addEventListener("click", () => {
        let learn = JSON.parse(localStorage.getItem("LearnEnglish")) || [];

        let Elearn = {
          title: ele.name,
          name: ele.Title,
          poster: ele.Poster,
          rating: ele.imdbID,
          desc: ele.desc,
          link: ele.link,
          year: ele.Year
        };

        learn.push(Elearn);
        console.log(learn);

        localStorage.setItem("LearnEnglish", JSON.stringify(learn));

        window.open("Movie.html");
      });
    });
  } else {
    Container.innerHTML = "<p>No movies found!</p>"; 
}
}