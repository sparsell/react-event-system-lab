// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {
    onBlur = (event) => {
        console.log("Hey! Eyes on me!")
    }

    onFocus = (event) => {
        console.log("Good!")
    }
    render() {
        return (
            <button onBlur={this.onBlur} onFocus={this.onFocus}></button>
        )
    }

}