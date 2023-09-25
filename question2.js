#question2

  const books = [
  {
    title: "A Design Patterns: Elements of Reusable Object-Oriented Software",
    img: "img/media/design_patterns.jpg",
    genre: "Tech",
    format: "Paperback",
    year: 1994,
    category: "Books",
    authors: [
      "Erich Gamma",
      "Richard Helm",
      "Ralph Johnson",
      "John Vlissides"
    ],
    publisher: "Prentice Hall",
    isbn: '978-0201633610'
  },
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    img: "img/media/clean_code.jpg",
    genre: "Tech",
    format: "Ebook",
    year: 2008,
    category: "Books",
    authors: [
      "Robert C. Martin"
    ],
    publisher: 'Prentice Hall',
    isbn: '978-0132350884'
  }
];

// Get a reference to the HTML element where you want to display the book information
const bookListElement = document.getElementById("book-list");

// Loop through the array of books and create HTML elements to display their properties
books.forEach((book, index) => {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  
  const titleElement = document.createElement("h2");
  titleElement.textContent = book.title;
  
  const imgElement = document.createElement("img");
  imgElement.src = book.img;
  
  const authorElement = document.createElement("p");
  authorElement.textContent = "Authors: " + book.authors.join(", ");
  
  const yearElement = document.createElement("p");
  yearElement.textContent = "Year: " + book.year;
  
  const publisherElement = document.createElement("p");
  publisherElement.textContent = "Publisher: " + book.publisher;
  
  bookDiv.appendChild(titleElement);
  bookDiv.appendChild(imgElement);
  bookDiv.appendChild(authorElement);
  bookDiv.appendChild(yearElement);
  bookDiv.appendChild(publisherElement);
  
  bookListElement.appendChild(bookDiv);
});

// Convert the array of book objects to JSON format
const booksJSON = JSON.stringify(books);
console.log(booksJSON); // You can view the JSON in the console
