import React from 'react'


class TodoForm extends React.Component {

    state = { name: ""}

    handleChange = (e) => {
        this.setState({ name; e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state.name)
        this.setState({name: ""})
    }

    render() {
        return(
        <form
          onSubmit={this.handleSubmit}>
          <input
            required
            placeholder="Add Todos"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            />
          </form>
        )
    }
}

export default TodoForm;