import React, { Component } from 'react';


class ClassEventPractice extends Component {
    state = {
        username: '',
        something: ''
    }

    handleChange = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value
            /* 
                username: e.target.value (username),
                something: e.target.value (something)
                각각의 input tag를 하나의 state로 가리킴.
                객체 내 key를 [ ]로 감싸면 그 안에 넣은 값이 key값으로 사용됨.
            */
            /*
                 const name = 'variantKey',
                 const object = {
                     [name]: 'value'
                 };
             ----------------------------------
             {
                 'variantKey':'value'
             }
            */
        });
    }

    handleClick = () => {
        alert(`${this.state.username}: ${this.state.something}`);
        this.setState({
            username: '',
            something: ''
        });
    }

    handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>event practice</h1>
                <input
                    type='text'
                    name='username'
                    placeholder='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='something'
                    placeholder='write some anything.'
                    value={this.state.something}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default ClassEventPractice;