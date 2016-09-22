import React from 'react';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {React.cloneElement(this.props.children, this.props)}
            </div>

        );
    }

}
