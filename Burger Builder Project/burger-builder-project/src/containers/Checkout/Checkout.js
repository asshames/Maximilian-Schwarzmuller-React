import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to="/" />
        if (this.props.ingdnts) {
            summary = (
                <div>
                    <CheckoutSummary
                        ingredients={this.props.ingdnts}
                        CheckoutCancelled={this.checkoutCancelHandler}
                        CheckoutContinued={this.checkoutContinueHandler} />
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            )
        }
        return summary;
    };
};

const mapStateToProps = state => {
    return {
        ingdnts: state.ingredients
    }
};

export default connect(mapStateToProps)(Checkout);