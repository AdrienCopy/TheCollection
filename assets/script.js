const collection = [
    {
        name: "Dune",
        director: "Denis Villeneuve",
        releaseYear: 2021,
        picture: "assets/image/dune.webp",
        genre: ["Science-fiction", "Drame"],
        cast: [
            "Timothée Chalamet",
            "Rebecca Ferguson",
            "Oscar Isaac",
            "Amanda Plummer",
            "Stellan Skarsgård",
            "Dave Bautista",
        ],
        synopsis: "L'histoire de Paul Atreides, jeune homme aussi doué que brillant, voué à connaître un destin hors du commun qui le dépasse totalement. Car s'il veut préserver l'avenir de sa famille et de son peuple, il devra se rendre sur la planète la plus dangereuse de l'univers – la seule à même de fournir la ressource la plus précieuse au monde, capable de décupler la puissance de l'humanité. Tandis que des forces maléfiques se disputent le contrôle de cette planète, seuls ceux qui parviennent à dominer leur peur pourront survivre…"
    },
    {
        name: "Tenet",
        director: "Christopher Nolan",
        releaseYear: 2020,
        picture: "assets/image/tenet.jpeg",
        genre: ["Action", "Science-fiction", "Thriller"],
        cast: [
            "John David Washington",
            "Robert Pattinson",
            "Elizabeth Debicki",
            "Kenneth Branagh",
            "Michael Caine",
            "Aaron Taylor-Johnson",
        ],
        synopsis: "Muni d’un seul mot – Tenet – et décidé à se battre pour sauver le monde, notre protagoniste sillonne l’univers crépusculaire de l’espionnage international. Sa mission le projettera dans une dimension qui dépasse le temps. Pourtant, il ne s’agit pas d’un voyage dans le temps, mais d’un renversement temporel."
    },
    {
        name: "Le Cinquième Élément",
        director: "Luc Besson",
        releaseYear: 1997,
        picture: "assets/image/le_cinquieme_element.jpeg",
        genre: ["Action", "Science-fiction", "Aventure"],
        cast: [
            "Bruce Willis",
            "Milla Jovovich",
            "Gary Oldman",
            "Ian Holm",
            "Chris Tucker",
            "Luke Perry",
        ],
        synopsis: "Muni d’un seul mot – Tenet – et décidé à se battre pour sauver le monde, notre protagoniste sillonne l’univers crépusculaire de l’espionnage international. Sa mission le projettera dans une dimension qui dépasse le temps. Pourtant, il ne s’agit pas d’un voyage dans le temps, mais d’un renversement temporel."
    },
    {
        name: "Fight Club",
        director: "David Fincher",
        releaseYear: 1999,
        picture: "assets/image/fight_club.jpeg",
        genre: ["Drame"],
        cast: [
            "Edward Norton",
            "Brad Pitt",
            "Helena Bonham Carter",
            "Meat Loaf",
            "Zach Grenier",
            "Richmond Arquette",
        ],
        synopsis: "Insomniaque, désillusionné par sa vie personnelle et professionnelle, un jeune cadre expert en assurances, mène une vie monotone et sans saveur. Face à la vacuité de son existence, son médecin lui conseille de suivre une thérapie afin de relativiser son mal-être. Lors d'un voyage d'affaires, il fait la connaissance de Tyler Durden, une sorte de gourou anarchiste et philosophe. Ensemble, ils fondent le Fight Club. Cercle très fermé, où ils organisent des combats clandestins et violents, destinés à évacuer l'ordre établi."
    },
    {
        name: "Joker",
        director: "Todd Phillips",
        releaseYear: 2019,
        picture: "assets/image/joker.jpeg",
        genre: ["Policier", "Drame", "Thriller"],
        cast: [
            "Joaquin Phoenix",
            "Robert De Niro",
            "Zazie Beetz",
            "Frances Conroy",
            "Brett Cullen",
            "Shea Whigham",
        ],
        synopsis: "Dans les années 1980, à Gotham City, Arthur Fleck, un comédien de stand-up raté est agressé alors qu'il erre dans les rues de la ville déguisé en clown. Méprisé de tous et bafoué, il bascule peu à peu dans la folie pour devenir le Joker, un dangereux tueur psychotique."
    },
    {
        name: "Le Parrain",
        director: "Francis Ford Coppola",
        releaseYear: 1972,
        picture: "assets/image/le_parrain.webp",
        genre: ["Policier", "Drame"],
        cast: [
            "Marlon Brando",
            "Al Pacino",
            "James Caan",
            "Richard S. Castellano",
            "Robert Duvall",
            "Sterling Hayden",  
        ],
        synopsis: "New York, 1945. Don Vito Corleone règne sur l'une des familles les plus puissantes de la mafia italo-américaine. Virgil Sollozzo, qui dirige la famille Tattaglia, lui propose de s'associer sur un nouveau marché prometteur : le trafic de drogue, mais celui-ci refuse. Don Vito est alors pris pour cible lors d'une tentative d'assassinat en pleine rue. Criblé de balles, il survit par miracle. Son fils Michael, qui s'était toujours tenu à l'écart des affaires familiales, se porte volontaire pour le venger."
    },
    {
        name: "Requiem for a Dream",
        director: "Darren Aronofsky",
        releaseYear: 2001,
        picture: "assets/image/requiem_for_a_dream.jpeg",
        genre: ["Drame"],
        cast: [
            "Ellen Burstyn",
            "Jared Leto",
            "Jennifer Connelly",
            "Marlon Wayans",
            "Christopher McDonald",
            "Louise Lasser",  
        ],
        synopsis: "Trois amis, Harry, Marianne et Tyrone, passent leurs journées à se droguer pour se sentir invulnérables et heureux. Cet eldorado a un prix."
    },
    {
        name: "Le Seigneur des Anneaux - La Communauté de l'anneau",
        director: "Peter Jackson",
        releaseYear: 2001,
        picture: "assets/image/le_seigneur_des_anneaux_la_communaute_de_l_anneau.jpeg",
        genre: ["Aventure", "Fantasy"],
        cast: [
            "Elijah Wood",
            "Ian McKellen",
            "Sean Astin",
            "Viggo Mortensen",
            "Ian Holm",
            "Sala Baker",  
        ],
        synopsis: "Le jeune hobbit Frodon Sacquet hérite d'un anneau. Il s'agit de l'Anneau Unique, instrument de pouvoir absolu qui permettrait à Sauron, de régner sur la Terre du Milieu et de réduire en esclavage ses peuples... A moins que Frodon et ses fidèles compagnons ne parviennent à emporter l'Anneau jusqu'en Mordor, lieu où il a été forgé, et à le détruire pour toujours."
    },
    {
        name: "Forrest Gump",
        director: "Robert Zemeckis",
        releaseYear: 1994,
        picture: "assets/image/forrest_gump.webp",
        genre: ["Drame", "Romance"],
        cast: [
            "Tom Hanks",
            "Gary Sinise",
            "Robin Wright",
            "Sally Field",
            "Mykelti Williamson",
            "Michael Conner Humphreys",
        ],
        synopsis: "A Savannah, dans l'Etat de Géorgie, Forrest Gump, assis sur un banc public, livre à qui veut l'entendre, l'étrange récit de sa vie mouvementée. Il naît dans un bourg de l'Alabama, affecté d'un quotient intellectuel inférieur à la moyenne et d'une paralysie partielle des jambes. Souvent raillé à l'école, le jeune Forrest se lie d'amitié avec la belle Jenny. Ensemble, ils vont grandir dans l'Amérique des années 1960."
    },
    {
        name: "Eternal Sunshine of the Spotless Mind",
        director: "Michel Gondry",
        releaseYear: 2004,
        picture: "assets/image/eternal_sunshine.jpeg",
        genre: ["Drame", "Romance", "Science-fiction"],
        cast: [
            "Jim Carrey",
            "Kate Winslet",
            "Kirsten Dunst",
            "Elijah Wood",
            "Mark Ruffalo",
            "Tom Wilkinson",  
        ],
        synopsis: "L'idylle entre Clementine et Joel a pris fin, en raison de leurs caractères trop différents et de la routine. Pour apaiser ses souffrances, Clementine a recours à Lacuna, un procédé révolutionnaire qui efface certains souvenirs. Désespéré, Joel décide de suivre le même processus. Une nuit, deux techniciens s'y emploient. Mais quand le passé défile dans sa tête, Joel mesure à quel point il aime toujours Clementine."
    },
];

document.addEventListener("DOMContentLoaded", function() {
    let title = "Adrien's Collection";
    let header = document.querySelector('header');
    let nav = document.createElement('nav');

    let titleHeader = document.createElement('h1');
    titleHeader.textContent = title;
    header.appendChild(titleHeader);

    let drameButton = document.createElement('button');
    drameButton.textContent = "Drame";
    drameButton.addEventListener('click', function() {
        let filmsFiltres = filtreFilm("Drame");
        showFilm(filmsFiltres);
        
    });
    nav.appendChild(drameButton);

    let actionButton = document.createElement('button');
    actionButton.textContent = "Action";
    actionButton.addEventListener('click', function() {
        let filmsFiltres = filtreFilm("Action");
        showFilm(filmsFiltres);
        
    });
    nav.appendChild(actionButton);

    let sfButton = document.createElement('button');
    sfButton.textContent = "Science-fiction";
    sfButton.addEventListener('click', function() {
        let filmsFiltres = filtreFilm("Science-fiction");
        showFilm(filmsFiltres);
        
    });
    nav.appendChild(sfButton);

    let thrillerButton = document.createElement('button');
    thrillerButton.textContent = "Thriller";
    thrillerButton.addEventListener('click', function() {
        let filmsFiltres = filtreFilm("Thriller");
        showFilm(filmsFiltres);
        
    });
    nav.appendChild(thrillerButton);
    
    let aventureButton = document.createElement('button');
    aventureButton.textContent = "Aventure";
    aventureButton.addEventListener('click', function() {
        let filmsFiltres = filtreFilm("Aventure");
        showFilm(filmsFiltres);
        
    });
    nav.appendChild(aventureButton);

    let policeButton = document.createElement('button');
    policeButton.textContent = "Policier";
    policeButton.addEventListener('click', function() {
        let filmsFiltres = filtreFilm("Policier");
        showFilm(filmsFiltres);
        
    });
    nav.appendChild(policeButton);

    let fantasyButton = document.createElement('button');
    fantasyButton.textContent = "Fantasy";
    fantasyButton.addEventListener('click', function() {
        let filmsFiltres = filtreFilm("Fantasy");
        showFilm(filmsFiltres);
        
    });
    nav.appendChild(fantasyButton);

    let romanceButton = document.createElement('button');
    romanceButton.textContent = "Romance";
    romanceButton.addEventListener('click', function() {
        let filmsFiltres = filtreFilm("Romance");
        showFilm(filmsFiltres);
        
    });
    nav.appendChild(romanceButton);

    let allGenresButton = document.createElement('button');
    allGenresButton.textContent = "Tous les genres";
    allGenresButton.addEventListener('click', function() {
        showFilm(collection);
    });
    nav.appendChild(allGenresButton);

    header.appendChild(nav);

});

function filtreFilm(genre) {
    return collection.filter(film => film.genre.includes(genre));
}

console.log(filtreFilm("Drame"));

function showFilm(films) {
    let main = document.querySelector('main');
    main.innerHTML = '';

    films.forEach(function(film, index) {
        let article = document.createElement('article');
        let figure = document.createElement('figure');

        let title = document.createElement('h1');
        title.textContent = film.name;

        let image = document.createElement('img');
        image.src = film.picture;
        figure.appendChild(image);

        let realisateur = document.createElement('h2');
        realisateur.textContent = film.director;
        
        let year = document.createElement('p');
        year.textContent = film.releaseYear;
        year.classList.add('year');

        let style = document.createElement('p');
        style.textContent = film.genre.join(',  ');

        let casting = document.createElement('p');
        casting.textContent = film.cast.join(',  ');

        let synopsis = document.createElement('p');
        synopsis.textContent = film.synopsis
        
        article.setAttribute('data-index', index);


       
        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Supprimer";
        deleteButton.addEventListener('click', function() {
            deleteFilm(index);
            main.removeChild(article);
        });

        
        article.appendChild(figure);
        article.appendChild(title);
        article.appendChild(realisateur);
        article.appendChild(year);
        article.appendChild(style);
        article.appendChild(casting);
        article.appendChild(synopsis);
        article.appendChild(deleteButton);

        main.appendChild(article);


        console.log(article.getAttribute('data-index'));
    });  
}

function deleteFilm(index) {
    if (index >= 0 && index < collection.length) {
        collection.splice(index, 1);//rappel, le 1 pour supprimer un seul element.
    } else {
        console.log("Index de film invalide.");
    }
}

showFilm(collection);


