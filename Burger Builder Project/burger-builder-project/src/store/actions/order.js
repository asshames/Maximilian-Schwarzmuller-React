import * as actionsTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionsTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionsTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

export const purchaseBurgerStart = () => {
    return {
        type: actionsTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json?auth=' + token, orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData))
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            });
    };
};

export const purchasedInit = () => {
    return {
        type: actionsTypes.PURCHASE_INIT
    };
};

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionsTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionsTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionsTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/orders.json' + queryParams)
            .then(res => {
                const fetchingOrders = [];
                for (let key in res.data) {
                    fetchingOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchOrdersSuccess(fetchingOrders));
            })
            .catch(err => {
                dispatch(fetchOrdersFail(err));
            });
    };
}