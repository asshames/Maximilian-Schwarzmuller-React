import * as actionsTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...state.orderData,
                id: orderId
            }
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder)
            };
        case actionsTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}

export default reducer;