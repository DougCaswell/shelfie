import React, { Component } from 'react';
import Product from '../Product/Product.jsx';

class Dashboard extends Component {
    render() {
        return (
            <div className='Dashboard'>
                {this.props.inventory.map((product, i) => {
                    return (
                        <Product select={this.props.select} cb={this.props.cb} item={product} key={i} />
                    )
                })}
            </div >
        )
    }
}

export default Dashboard;