import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
    render() {
        return (
            <div>
                <div>Available Letters</div>
                {Object.keys(this.props.allTheLetters).map(l => {
                    
                    return <span> <Letter allTheLetters={l}/></span>
                })}
            </div>
        )
    }
}

export default Letters