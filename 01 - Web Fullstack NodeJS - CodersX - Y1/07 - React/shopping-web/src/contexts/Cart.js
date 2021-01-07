import React, {Component} from 'react';

export const CartContext = React.createContext()

export class CartProvider extends Component {
    constructor() {
        super();
        this.state = {
            cart: []
        }
        this.addToCart = this.addToCart.bind(this)
    }

    addToCart(product) {
        this.setState({
            cart: this.state.cart.concat(product),
        });
    }
    render() {
        return(
            <CartContext.Provider value={{
                cart: this.state.cart,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
} 