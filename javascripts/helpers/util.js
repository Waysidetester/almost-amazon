import cart from "../components/cart.js";
import store from "../components/store.js";
import cartifier from "./cartifier.js";

const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
};

const cartAddEvent = () => {
    const addToCart = document.getElementById("purchase");
    addToCart.addEventListener("click", (e) => {
        cart.setCart(e.currentTarget.parentNode.childNodes[1].innerHTML)
        if (store.giveBook().name === cart.giveCart()) {
            cart.setCartTotal(store.giveBook().price);
            cartifier.cartBuilder(cart.giveCartTotal());
        }
    })
}

export default {printToDom, cartAddEvent};