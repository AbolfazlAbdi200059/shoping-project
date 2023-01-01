const AddCart = (state , payload) => {
    const UpdatedCart = [...state.cart];
    const UpdatedItemIndex = UpdatedCart.findIndex((p) => p.id === payload.id);
    if(UpdatedItemIndex < 0) {
        UpdatedCart.push({...payload , quantity: 1})
    }else {
        const UpdatedItem = {...UpdatedCart[UpdatedItemIndex]};
        UpdatedItem.quantity++;
        UpdatedCart[UpdatedItemIndex] = UpdatedItem;
    }
    state.total += payload.price;
    state.discount += payload.price - payload.offPrice; 
    return {...state , cart: UpdatedCart}
}

const Increament = (state , payload) => {
    const UpdatedCart = [...state.cart];
    const SelectedCart = UpdatedCart.find((c) => c.id === payload.id);
    SelectedCart.quantity++;
    state.total += payload.price;
    state.discount += payload.price - payload.offPrice;
    return {...state , cart: UpdatedCart};
}

const Decreament = (state , payload) => {
    if(payload.quantity == 1){
        const UpdatedCart = [...state.cart];
        const FiltredCart = UpdatedCart.filter((c) => c.id !== payload.id);
        state.total -= payload.price;
        state.discount -= (payload.price - payload.offPrice);
        return {...state, cart: FiltredCart}
    }else{
        const UpdatedCart = [...state.cart];
        const SelectedCart = UpdatedCart.find((c) => c.id === payload.id);
        SelectedCart.quantity--;
        state.total -= payload.price;
        state.discount -= (payload.price - payload.offPrice);
        return {...state , cart: UpdatedCart}
    }
}

const Delete = (state , payload) => {
    const UpdatedCart = [...state.cart];
    const FiltredCart = UpdatedCart.filter((c) => c.id !== payload.id);
    state.total -= payload.price;
    return {...state , cart: FiltredCart}
}


const CartReducer = (state , action) => {
    switch (action.type) {
        case "Add-To-Cart":
            return AddCart(state , action.payload)
        case "increament": 
            return Increament(state , action.payload)
        case "decreament":
            return Decreament(state , action.payload)
        case "delete":
            return Delete(state , action.payload)
        default:
            return state;
    }
}


export default CartReducer;