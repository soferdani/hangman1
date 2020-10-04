import React, { Component } from 'react';

class Letter extends Component {
    render() {
        return (
            <span>
                {this.props.allTheLetters}
            </span>
        )
    }
}


export default Letter