import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //this can be a functional component. changed to class just to check component updation
    componentDidUpdate() {
        console.log("[OS] will update");
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
                                .map(igkey => {
                                    return (
                                        <li key = {igkey}>
                                            <span style={{textTransform: "capitalize"}}>{igkey}</span> : {this.props.ingredients[igkey]}
                                        </li>
                                    );
                                });
        return(
            <Aux>
                <h3>Your Order!</h3>
                <p>Delicious Burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)} </strong></p>
                <p>Continue to checkout?</p>
                <Button btnType = 'Danger' clicked = {this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType = 'Success' clicked = {this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;