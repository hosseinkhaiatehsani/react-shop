export const addItemToCart = (cartItems, cartItemToAdd) => {
    // check if new item exist in cart
    const itemExitsts = cartItems.find( 
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(itemExitsts) {
        // if new item exists on cart, instead of
        // add another item just increase the quantity
        return cartItems.map( cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            );
    }

    // if item not exists add item to cart 
    // with a new property of quantity
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}


export const clearItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter( 
        cartItem =>  cartItem.id != cartItemToRemove.id
    );
}