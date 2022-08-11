import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                Hello. my name is {name}. <br />
                childeren value is "{children}". <br />
                my favorite number is {favoriteNumber}.
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name: 'Default'
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;