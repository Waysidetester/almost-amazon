import utilities from "./helpers/util.js";
import store from "./components/store.js";
import cart from "./components/cart.js";

const init = () => {
    cart.cartTester();
    console.log('main js linked');
    store.pagePrinter()
}

init();