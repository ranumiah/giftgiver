import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';

class App extends Component {

    constructor() {
        super();

        this.state = { gifts: [] };
    }

    addGift = () => {
        const { gifts } = this.state; //destructive construct
        const ids = this.state.gifts.map(gift => gift.id);
        const max_id =ids.length > 0 ? Math.max(...ids) : 0; //spread operator

        gifts.push({ id: max_id + 1 });

        // restructuring syntax
        this.setState({ gifts }); // same as this: this.setState( { gifts: gifts })
    }

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className='gift-list'>
                    {
                        this.state.gifts.map(gift => {
                            return (
                                <Gift key={gift.id}></Gift>
                            )
                        })
                    }
                </div>
                <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}

export default App;