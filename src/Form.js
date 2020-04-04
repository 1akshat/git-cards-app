import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    state = {
        userName: ''
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        // Axios returns a promise. So using async and await
        const response = await
            axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(response.data);
        // Emptying the field after submit
        this.setState({userName: ''})
    };

    render() {
        return (
                <form onSubmit={ this.handleSubmit } style={{ marginTop: '30px', textAlign: 'center' }}>
                    <input
                        type="text"
                        placeholder='GitHub Username'
                        value={this.state.userName}
                        onChange={event => this.setState({ userName: event.target.value })}
                        required/>
                    <button>Add Card</button>
                </form>
        )
    }
}

export default Form;