import React from "react" 
import { Link } from "react-router-dom"

const BlogItem = props => {
  const {
    id, 
    blog_status,
    content,
    title,
    featured_image_url
  } = props.blogItem

  return (
    <div>
      <Link to={`/b/${id}`} >
      <h1>{title}</h1>
      </Link>
      
      <h2>{id} , {blog_status}, {featured_image_url}</h2>
      <div>
        {content}
      </div>
    </div>
  )
}


export default BlogItem