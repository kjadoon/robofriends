import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.state({ hasError: true })
    }

    render() {
        return this.state.hasError ? <h1>Oooops. Something went wrong!</h1> : this.props.children 
    }
}

export default ErrorBoundary;