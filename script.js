let books = [
  {
    "name": "Die Geheimnisse des Ozeans",
    "author": "Clara Meer",
    "likes": 1250,
    "liked": true,
    "price": 19.99,
    "publishedYear": 2018,
    "genre": "Fantasy",
    "comments": [
      {
        "name": "Leser123",
        "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
      },
      {
        "name": "Bookworm84",
        "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
      },
      {
        "name": "FantasyFanatic",
        "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
      },
      {
        "name": "SciFiGuru",
        "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
      },
      {
        "name": "NovelLover",
        "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
      }
    ]
  },
  {
    "name": "Der vergessene Pfad",
    "author": "Maximilian Schwarz",
    "likes": 980,
    "liked": false,
    "price": 14.50,
    "publishedYear": 2021,
    "genre": "Fantasy",
    "comments": []
  },
  {
    "name": "Die Farben des Himmels",
    "author": "Laura Blau",
    "likes": 1520,
    "liked": true,
    "price": 22.95,
    "publishedYear": 2019,
    "genre": "Romantik",
    "comments": [
      {
        "name": "LeserPeter",
        "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
      },
      {
        "name": "BookLover21",
        "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
      },
      {
        "name": "FantasyNerd",
        "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
      },
      {
        "name": "SciFiEnthusiast",
        "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
      },
      {
        "name": "ReadingAddict",
        "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
      }
    ]
  },
  {
    "name": "Das Rätsel der Zeit",
    "author": "Alexander Weiss",
    "likes": 750,
    "liked": false,
    "price": 18.00,
    "publishedYear": 2020,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "BuchKenner",
        "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
      },
      {
        "name": "LeseWurm",
        "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
      }
    ]
  },
  {
    "name": "Der letzte Wächter",
    "author": "Sabine Grün",
    "likes": 1300,
    "liked": true,
    "price": 16.75,
    "publishedYear": 2017,
    "genre": "Fantasy",
    "comments": []
  },
  {
    "name": "Im Schatten des Mondes",
    "author": "Philipp Silber",
    "likes": 890,
    "liked": false,
    "price": 12.30,
    "publishedYear": 2022,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "BücherLiebhaber",
        "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
      },
      {
        "name": "Leseratte",
        "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
      }
    ]
  },
  {
    "name": "Jenseits der Sterne",
    "author": "Oliver Schwarz",
    "likes": 1450,
    "liked": true,
    "price": 21.00,
    "publishedYear": 2015,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "Leser123",
        "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
      }
    ]
  },
  {
    "name": "Das verborgene Königreich",
    "author": "Elena Gold",
    "likes": 920,
    "liked": false,
    "price": 17.50,
    "publishedYear": 2020,
    "genre": "Fantasy",
    "comments": [
      {
        "name": "Bookworm92",
        "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
      }
    ]
  },
  {
    "name": "Liebe in Zeiten des Krieges",
    "author": "Emilia Rot",
    "likes": 1800,
    "liked": true,
    "price": 19.99,
    "publishedYear": 2016,
    "genre": "Romantik",
    "comments": [
      {
        "name": "Bibliophile23",
        "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
      },
      {
        "name": "StorySeeker",
        "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
      },
      {
        "name": "SciFiExplorer",
        "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
      }
    ]
  }
]

document.getElementById('filter-liked').addEventListener('click', toggleLikedFilter);

function renderBooks(filterLiked = false) {
  const bookContainer = document.getElementById('book-container');
  bookContainer.innerHTML = "";

  const booksToDisplay = filterLiked ? books.filter(book => book.liked) : books;

  booksToDisplay.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';

    bookCard.innerHTML = `
    <h2>${book.name}</h2>
    <img src="./img/book${index + 1}.jpg" alt="${book.name}">
    <div class="book-details">
      <span><strong>Author:</strong> ${book.author}</span>
      <span><strong>Published Year:</strong> ${book.publishedYear}</span>
      <span><strong>Genre:</strong> ${book.genre}</span>
      <span class="book-price">${book.price.toFixed(2)} €</span>
    </div>
    <div class="likes">
      <span>${book.likes} <span class="heart-icon" data-index="${index}">${book.liked ? '❤️' : '🤍'}</span></span>
    </div>
    <div class="comments">
      <h3>Kommentare:</h3>
      ${book.comments.map(comment => `
        <div><span class="username">${comment.name}:</span> <span class="userComment">${comment.comment}</span></div>
      `).join('')}
      </div>
      <div class="comment-input">
        <input type="text" placeholder="Dein Name" class="username-input" data-index="${index}">
        <input type="text" placeholder="Schreibe dein Kommentar..." class="comment-text-input" data-index="${index}">
        <button data-index="${index}">Absenden</button>
      </div>
  `;

  bookContainer.appendChild(bookCard);
  })

  addEventListener();
}

function addEventListener() {
  document.querySelectorAll('.heart-icon').forEach(icon => icon.addEventListener('click', toggleLike));
  document.querySelectorAll('.comment-input button').forEach(button => button.addEventListener('click', addComment));
}

function toggleLike(event) {
  const index = event.target.getAttribute('data-index');
  books[index].liked = !books[index].liked;
  books[index].likes += books[index].liked ? 1 : -1;
  saveDataToLocalStorage();
  renderBooks();
}

function addComment(event) {
  const index = event.target.getAttribute('data-index');
  const usernameInput = document.querySelector(`.username-input[data-index="${index}"]`);
  const commentInput = document.querySelector(`.comment-text-input[data-index="${index}"]`);
  const username = usernameInput.value.trim();
  const commentText = commentInput.value;

  if (username && commentText) {
    books[index].comments.push({ name: username, comment: commentText });
      usernameInput.value = '';
      commentInput.value = '';
      saveDataToLocalStorage();
      renderBooks();
  } else {
    alert("Bitte sowohl einen Namen als auch einen Kommentar eingeben.");
  }
}

function toggleLikedFilter() {
  renderBooks(document.getElementById('filter-liked').classList.toggle('filtered'));
}

function saveDataToLocalStorage() {
  localStorage.setItem('books', JSON.stringify(books));
}

function loadDataFromLocalStorage(params) {
  const storedBooks = localStorage.getItem('books');
  if (storedBooks) books = JSON.parse(storedBooks);
  renderBooks();
}

loadDataFromLocalStorage();