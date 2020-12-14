import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Auxillary'

export default class BurgerBuilder extends Component {
    state = {
        ingridients :{
            meat: 0,
            bacon: 0,
            cheese: 0,
            salad : 0
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingridients={this.state.ingridients}/>
            </Aux>
        )
    }
}
