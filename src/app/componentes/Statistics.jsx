import React from 'react';

export default class Statistics extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>So far there have been {this.props.counter.statistics.numClicks} clics</h2>
                    <button onClick={this.props.reset}>Reset</button>
                </div>
            </div>
        );
    }
}
