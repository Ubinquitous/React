import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        error: false
    };

    componentDidCatch(error: any, info: any) {
        this.setState({
            error: true
        });
        console.log({ error, info });
    }
    render() {
        if (this.state.error)
            return (
                <div>
                    404 Not Found
                </div>
            );
    }
}

export default ErrorBoundary;