import React from 'react';
import { Component } from 'react';
import '../ValidationSample.css';

/*
    ValidationSample.css

    .success {
        background-color: lightgreen;
    }

    .failure {
        background-color: lightcoral;
    }
*/
class ValidationSample extends Component {

    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e: any) => {
        this.setState({
            password: e.target.value
        });
    }

    // handleButtonClick = () => {
    //     this.setState({
    //         clicked: true,
    //         validated: this.state.password === '0000'
    //     });
    //     this.input.focus();
    // }

    // render() {
    //     return (
    //         <div>
    //             <input
    //                 type='password'
    //                 value={this.state.password}
    //                 onChange={this.handleChange}
    //                 className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
    //                 ref={(ref) => this.input = ref}
    //             />
    //             <button onClick={this.handleButtonClick}>검증하기</button>
    //         </div>
    //     );
    // }
};

export default ValidationSample;