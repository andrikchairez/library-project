const myLibrary = [];

// const newBook = new Book("Harry Potter", "JK Rowling", "Jan 01, 2001", "600", "false"); 

function Book(title, author, publishDate, pages, hasRead) {
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
    const readBookValue = document.querySelector('input[name="readBook"]:checked').value;
    const hasReadBook = readBookValue === "Yes!";
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

    //Middle part of the UI
    const publishDate = document.createElement("div");
    publishDate.classList.add('textCol')

    const middleRowSupportPara = document.createElement("p");
    middleRowSupportPara.classList.add('supportText');
    const middleRowPara = document.createElement("p");

    middleRowSupportPara.textContent = "Published"
    middleRowPara.textContent = newBook.publishDate;
    
    //Final row part of the UI
    const rowContainerBottom = document.createElement("div");
    rowContainerBottom.classList.add('rowContainer');

    const bottomRowTextCol = document.createElement("div");
    bottomRowTextCol.classList.add('textCol');

    const bottomRowSupportPara = document.createElement("p");
    bottomRowSupportPara.classList.add('supportText');
    const bottomRowPara = document.createElement("p");

    const uniqueId = `hasRead-${newBook.title.replace(/\s+/g, '-').toLowerCase()}`;

    const hasReadLabel = document.createElement("label");
    hasReadLabel.setAttribute("for", uniqueId);
    hasReadLabel.textContent ="Read the book?";
    const hasReadCheckbox = document.createElement("input");
    hasReadCheckbox.setAttribute("type", "checkbox");
    hasReadCheckbox.setAttribute("id", uniqueId);

    bottomRowSupportPara.textContent = "Pages";
    bottomRowPara.textContent = newBook.pages;
    

    //Assembles the card component together to correctly nest it
    //and properly append it to a grid container

    //Assemble the top row of the UI
    topRowTextCol.append(topRowH4, topRowPara);
    rowContainerTop.append(topRowTextCol, topRowSpan);
    card.append(rowContainerTop);

    //Assemble that middle row
    publishDate.append(middleRowSupportPara, middleRowPara);
    card.appendChild(publishDate);

    //Assemble last row
    bottomRowTextCol.append(bottomRowSupportPara, bottomRowPara);
    rowContainerBottom.append(bottomRowTextCol);
    hasReadLabel.appendChild(hasReadCheckbox);
    rowContainerBottom.appendChild(hasReadLabel);
    card.appendChild(rowContainerBottom);


    //TEST THE APPENDED UI HERE
    grid.appendChild(card);
    
}


/* <form>
            <label for="author">
                Author
                <input type="text" id="author">
            </label>
            
            <label for="title">
                Title
                <input type="text" id="title">
            </label>
            
            <label for="pages">
                How many pages in your book?
                <input type="number" id="pages">
            </label>

            <h4>Have you read this book?</h4>
            <label for="yes">
                Yes!
                <input name="readBook" value="Yes!" type="radio" id="yes">
            </label>

            <label for="no">
                No!
                <input name="readBook" value="Not yet!" type="radio" id="no">
            </label>
        </form>
        <button data-close-modal>Cancel</button>
        <button type="submit" value="Submit">Add</button> */