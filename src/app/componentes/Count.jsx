import React from 'react';
import { Link } from 'react-router';

export default class Count extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { counter } = this.props;
        return (
            <div className="App">
                <h1>{counter.valor}</h1>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
                <br/><br/>
                <Link to="statistics/">View Statistics</Link>
            </div>

        );
    }
}
