const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const openButton = document.querySelector("[data-open-modal");
const closeButton = document.querySelector("[data-close-modal");
const modal = document.querySelector("[data-modal");

openButton.addEventListener('click', () => {
    modal.showModal()
})

closeButton.addEventListener('click', () => {
    modal.close()
})

const addBookButton = document.querySelector(".primaryButton");

addBookButton.addEventListener('click', () => {
    modal.showModal()
})

const form = document.querySelector("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const hasReadBook = document.getElementById('hasReadBook');
    const newBook = new Book(title, author, pages, hasReadBook);
    
    addBookToLibrary(newBook);

    createCard(newBook);

    form.reset();

    modal.close();
})

const grid = document.querySelector(".gridContainer");

function createCard(newBook) {
    const card = document.createElement("div");
    card.classList.add('card');
    
    //Will set the content of the 'card' component first
    //Top row of the UI.
    const rowContainerTop = document.createElement("div");
    rowContainerTop.classList.add('rowContainer');

    const topRowTextCol = document.createElement("div");
    topRowTextCol.classList.add('textCol');
    
    const topRowH4 = document.createElement("h4");
    const topRowPara = document.createElement("p");

    const topRowSpan = document.createElement("span");
    topRowSpan.classList.add("material-symbols-outlined");
    topRowSpan.textContent = "delete";

    topRowH4.textContent = newBook.title;
    topRowPara.textContent = newBook.author;

    //Final row part of the UI
    const rowContainerBottom = document.createElement("div");
    rowContainerBottom.classList.add('rowContainer');

    const bottomRowTextCol = document.createElement("div");
    bottomRowTextCol.classList.add('textCol');

    const bottomRowSupportPara = document.createElement("p");
    bottomRowSupportPara.classList.add('supportText');
    const bottomRowPara = document.createElement("p");
    
    bottomRowSupportPara.textContent = "Pages";
    bottomRowPara.textContent = newBook.pages;
    
    const uniqueId = `hasRead-${newBook.title.replace(/\s+/g, '-').toLowerCase()}`;

    const hasReadLabel = document.createElement("label");
    hasReadLabel.setAttribute("for", uniqueId);
    hasReadLabel.textContent ="Read the book?";
    const hasReadCheckbox = document.createElement("input");
    hasReadCheckbox.setAttribute("type", "checkbox");
    hasReadCheckbox.setAttribute("id", uniqueId);
    hasReadCheckbox.checked = newBook.hasRead.checked;

    //Assembles the card component together to correctly nest it
    //and properly append it to a grid container

    //Assemble the top row of the UI
    topRowTextCol.append(topRowH4, topRowPara);
    rowContainerTop.append(topRowTextCol, topRowSpan);
    card.append(rowContainerTop);
    topRowSpan.addEventListener("click", function() {
        this.parentElement.parentElement.remove();
    });

    //Assemble last row
    bottomRowTextCol.append(bottomRowSupportPara, bottomRowPara);
    rowContainerBottom.append(bottomRowTextCol);
    hasReadLabel.appendChild(hasReadCheckbox);
    rowContainerBottom.appendChild(hasReadLabel);
    card.appendChild(rowContainerBottom);


    //TEST THE APPENDED UI HERE
    grid.appendChild(card);
    
}