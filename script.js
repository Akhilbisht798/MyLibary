let submitBtn = document.querySelector("#submitBtn");
let add = document.querySelector('.add');
let closebtn = document.querySelector('.closebtn');
let overlay = document.getElementById('overlay')
let form_div = document.querySelector(".form_div");
let container = document.querySelector(".container");

let myLibary = [];
let index = 0;

function MyBooks(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read;
}

function addBookToLibary(Book) {
    myLibary.push(Book);
}

add.addEventListener('click' , () => {
    openForm();
})

closebtn.addEventListener('click', () => {
    CloseForm();
}) 

overlay.addEventListener('click', () => {
    CloseForm();
})

submitBtn.addEventListener("click" , (e) => {
    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("AuthorInput").value;
    let pages = document.getElementById("PagesInput").value;
    let checkbox = document.getElementById("CheckInput").value;

    let book = new MyBooks(title, author, pages, checkbox);

    addBookToLibary(book)
    DisplayBook(title, author, pages, checkbox, index);
    index += 1;
    CloseForm();
});

function openForm() {
    form_div.classList.add('active');
    overlay.classList.add('active');
}

function CloseForm() {
    form_div.classList.remove('active');
    overlay.classList.remove('active')
}

function DisplayBook(title, author, pages, read, i) {
    let div = document.createElement("div");
    let titleDiv = document.createElement("p");
    let authorDiv = document.createElement("p");
    let pageDiv = document.createElement("p");
    let readDiv = document.createElement("button");
    let deleteBtn = document.createElement("button");

    titleDiv.innerHTML = title; 
    authorDiv.innerHTML = author; 
    pageDiv.innerHTML = pages;
    readDiv.innerHTML = read;
    deleteBtn.innerHTML = "DELETE";
    deleteBtn.onclick = deleteBook;

    deleteBtn.classList.add = "DisplayBtn";
    deleteBtn.classList.add = "DeleteBtn";
    readDiv.classList.add = "DisplayBtn";
    div.classList.add = "DisplayDiv"

    div.dataset.index = i;

    div.appendChild(titleDiv);
    div.appendChild(authorDiv);
    div.appendChild(pageDiv);
    div.appendChild(readDiv)
    div.appendChild(deleteBtn);
    container.appendChild(div);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function MakeAgain() {
    index = 0;
    for (let i = 0; i < myLibary.length; i++) {
        let t = myLibary[i].title;
        let a = myLibary[i].author;
        let p = myLibary[i].pages;
        let r = myLibary[i].read;
        DisplayBook(t, a, p, r ,index);
        index += 1;
    }
}

const deleteBook = (e) => {
    let i = e.target.parentNode.dataset.index;
    myLibary.splice(i, 1);
    removeAllChildNodes(container);
    MakeAgain();
    console.table(myLibary);
    console.log(i);
}

console.table(myLibary);
