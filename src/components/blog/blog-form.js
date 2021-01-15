import React, { Component } from 'react'
import axios from "axios"

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

  buildForm() {
    let formData = new FormData()

    formData.append("portfolio_blog[title]", this.state.title)
    formData.append("portfolio_blog[blog_status]", this.state.blog_status)

    return formData
  }

  handleSubmit(event) {
    axios
      .post(
        "https://bradenbird.devcamp.space/portfolio/portfolio_blogs",
        this.buildForm(),
        { withCredentials: true }
      ).then(response => {
        this.props.handleSuccessfulFormSubmission(
          response.data.portfolio_blog
        )

        this.setState({
          title: "",
          blog_status: ""
        })
      }).catch(error => {
        console.log("handle submit error", error)
      })


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
      <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
        <div className="two-column">
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
        </div>
        <button className="btn">Save</button>
      </form>
    )
  }
}
