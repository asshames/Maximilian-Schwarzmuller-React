import React, { Component } from "react";
import axios from "../../axios-orders";

import Order from '../../components/Order/Order';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";


class Orders extends Component{
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                // console.log(res.data);
                const fetchingOrders = [];
                for (let key in res.data) {
                    fetchingOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, orders: fetchingOrders });
            })
            .catch(error => {
                // console.log(error);
                this.setState({ loading: false });
        })
    }

    render() {
        return (
            <div>
                <Order />
                <Order />
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);