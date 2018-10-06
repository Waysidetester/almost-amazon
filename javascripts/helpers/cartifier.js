import cart from "../components/cart.js";
import utilities from "./util.js";

const cartBuilder = (object) => {
    let newString = `<div>
                        <div id="overlay">
                            <img src="${object.img}" id="cartImage">
                            <p id="absoluter">${object.inCart}</p>
                        </div>
                        <h2>${object.total}</h2>
                    </div>`;
    utilities.printToDom("cart", newString);
};

export default {cartBuilder}