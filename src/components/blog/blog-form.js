import React, { Component } from 'react'

export default class BlogForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      blogStatus: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    this.props.handleSuccessfulFormSubmission(this.state)
    event.preventDefault()
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name="title"
          placeholder="Blog Title"
          value={this.state.title}
          onChange={this.handleChange} 
          type="text"
        />
        <input 
          name="blogStatus"
          placeholder="Blog Status"
          value={this.state.blog_status}
          onChange={this.handleChange} 
          type="text"
        />

        <button>Save</button>
      </form>
    )
  }
}
