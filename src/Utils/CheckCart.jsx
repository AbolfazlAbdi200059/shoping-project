const CheckCart = (cart , Product) => {
    return cart.find((c) => c.id === Product.id);
}

export default CheckCart;