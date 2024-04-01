function Book(title, author, pages, read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

function removeBookFromLibrary(title){
    myLibrary.forEach((book, index)=>{
        if(book.title===title){
            myLibrary.splice(index, 1)
        }
    })
}

function changeReadStatus(title){
    myLibrary.forEach((book)=>{
        if(book.title===title){
            if(book.read==='Yes'){
                book.read='No'
            }else{
                book.read='Yes'
            }
        }
    })
}

function displayBooks() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        const title = document.createElement('h2');
        title.textContent = book.title;
        bookCard.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;
        bookCard.appendChild(author);

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;
        bookCard.appendChild(pages);

        const read = document.createElement('p');
        read.textContent = `Read: ${book.read}`;
        bookCard.appendChild(read);

        const changeStatusButton = document.createElement('button');
        changeStatusButton.className = 'change-status-button';
        changeStatusButton.textContent = 'Change Status';
        changeStatusButton.addEventListener('click', function() {
            book.read = book.read === 'yes' ? 'no' : 'yes';
            displayBooks();
        });
        bookCard.appendChild(changeStatusButton);

        libraryDiv.appendChild(bookCard);
    });
}

const myLibrary=[]


let book1 = new Book('Atomic Habits', 'James Clear', 319, 'Yes')
let book2 = new Book('The Alchemist', 'Paulo Coelho', 163, 'No')
let book3 = new Book('The Power of Habit', 'Charles Duhigg', 371, 'Yes')
let book4 = new Book('The Lean Startup', 'Eric Ries', 296, 'No')
let book5 = new Book('The 4-Hour Workweek', 'Tim Ferriss', 308, 'Yes')
let book6 = new Book('The Subtle Art of Not Giving a F*ck', 'Mark Manson', 212, 'No') 

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)
addBookToLibrary(book5)
addBookToLibrary(book6)


displayBooks();

document.getElementById('add-book-button').addEventListener('click', function() {
    document.getElementById('book-form').style.display = 'block';
});

document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('book-form').style.display = 'none';
});

document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    const book = new Book(title, author, pages, read);

    addBookToLibrary(book);

    displayBooks();

    document.getElementById('book-form').style.display = 'none';
});

