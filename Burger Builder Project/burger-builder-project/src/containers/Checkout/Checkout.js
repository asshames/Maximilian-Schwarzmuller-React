import React, { Component } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component{
    state = {
        ingredients: {
            salad:1,
            meat:1,
            cheese:1,
            bacon:1
        }
    }
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const orderIngredients = {};
        for (let param of query.entries()) {
            // ['salad', '1']
            orderIngredients[param[0]] = +param[1];
        }
        this.setState({ ingredients: orderIngredients });
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <CheckoutSummary
                ingredients={this.state.ingredients}
                CheckoutCancelled={this.checkoutCancelHandler}
                CheckoutContinued={this.checkoutContinueHandler} />
        );
    };
};

export default Checkout;