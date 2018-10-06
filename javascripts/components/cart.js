let cart = undefined;

const cartObject = {
    img: "http://cdn.onlinewebfonts.com/svg/img_407019.svg",
    inCart: 0,
    total: 0
};

const setCart = (addedItem) => {
    cart = addedItem;
};

const setCartTotal = (newValue) => {
    cartObject.total = newValue;
    cartObject.inCart++;
    console.log(cartObject.total)
    console.log(cartObject.inCart)
};

let giveCart = () => {
    return cart;
};

let giveCartTotal = () => {
    return cartObject;
};

export default {setCart, giveCart, setCartTotal, giveCartTotal}