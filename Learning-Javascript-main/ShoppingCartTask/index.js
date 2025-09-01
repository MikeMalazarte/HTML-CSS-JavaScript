
function shoppingCart(){
    let cart =[];

    function addItem(item, price){
        cart.push({item, price});
        console.log(`${item} added to the cart for $${price}`);
    }

    function removeItem(item){
        const index = cart.findIndex(product => product.item === item);
        if(index !== -1){
            console.log(`${cart[index].item} removed from the cart.`);
            cart.splice(index, 1);
        } else {
            console.error(`No such item in the cart.`);
        }
    }

    function getTotal(){
        const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
        console.log(`Total Items: ${cart.length}`);
        console.log(`Total Price: $${totalPrice}`);
    }

    function viewCart(){
        if(cart.length === 0){
            console.log(`Cart is empty.`);
        } else {
            console.log("Your cart contains: ");
            cart.forEach(product => console.log(`- ${product.item}: $${product.price}`));

        }
    }

    return {addItem, removeItem, getTotal, viewCart };
}

const shopper1 = shoppingCart();

shopper1.addItem("Milk", 150);
shopper1.addItem("Bread", 100);
shopper1.addItem("Pasta", 120);
shopper1.getTotal();
shopper1.viewCart();
shopper1.removeItem("Pasta");
shopper1.getTotal();
shopper1.viewCart();
