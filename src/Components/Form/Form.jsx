import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            image_url: '',
            productName: '',
            price: '',
            selected: false
        }
    }
    componentDidUpdate(prevProps) {
        if(JSON.stringify(prevProps.selected) !== JSON.stringify(this.props.selected)) {
            let {image_url, name, price} = this.props.selected
            this.setState({
                image_url: image_url,
                productName: name,
                price: price,
                selected: true
            })
        }
    }
    updateImageUrl(event) {
        this.setState({
            image_url: event.target.value
        })
    }
    updateName(event) {
        this.setState({
            productName: event.target.value
        })
    }
    updatePrice(event) {
        this.setState({
            price: event.target.value
        })
    }
    cancel() {
        this.setState({
            image_url: '',
            productName: '',
            price: '',
        })
    }
    add() {
        let newItem = {
            name: this.state.productName,
            price: this.state.price,
            image_url: this.state.image_url
        }
        let promise = axios.post('/api/inventory', newItem)
        promise.then((res) => {
            this.props.cb()
            this.setState({
                image_url: '',
                productName: '',
                price: '',
            })
        })
    }
    update() {
        console.log('I ran')
        let newItem = {
            name: this.state.productName,
            price: this.state.price,
            image_url: this.state.image_url
        }
        const id = this.props.selected.product_id
        console.log(id)
        let promise = axios.put('/api/inventory/' + id, newItem)
        promise.then(res => {
            this.props.cb()
            this.setState({
                image_url: '',
                productName: '',
                price: '',
                selected: false
            })
        })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.image_url}
                    placeholder='Image_URL'
                    onChange={(event) => this.updateImageUrl(event)}
                />
                <input
                    type="text"
                    value={this.state.productName}
                    placeholder='Name'
                    onChange={(event) => { this.updateName(event) }}
                />
                <input
                    type="number"
                    value={this.state.price}
                    placeholder='Price'
                    onChange={(event) => { this.updatePrice(event) }}
                />
                <button onClick={() => this.cancel()} >Cancel</button>
                {this.state.selected ? <button onClick={() => {this.update()}} >Save Changes</button> : <button onClick={() => this.add()}>Add to Inventory</button> }
            </div >
        )
    }
}

export default Form;