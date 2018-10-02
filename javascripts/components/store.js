import utilities from "../helpers/util.js";

const book = {
    name: 'Prey',
    img: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Prey_%28Michael_Crichton_novel_-_cover_art%29.jpg',
    author: 'some person',
    price: '$24.99'
};

const pagePrinter = () => {
    let newString = `<div>
                    <h3>${book.name}</h3>
                    <img src="${book.img}" alt="${book.name} by ${book.author}"/>
                    <p>Author ${book.author}</p>
                    <p>Price: ${book.price}</p>
                    <button id="purchase"></button>
                </div>`;
    utilities.printToDom('printHere', newString);
};

export default {pagePrinter}