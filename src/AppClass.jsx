import React, {Component} from 'react';

export default class AppClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };
    decrement = () => {
        this.setState({
            count: this.state.count - 1,
        });
    };

    render() {
        return (
            <>
                <h1>counter app</h1>
                <p>the count is: {this.state.count}</p>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </>
        );
    }
}
