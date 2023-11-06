import React from 'react'
import { BlogItem } from './BlogItem'
import './styles.css'

export const BlogList = ({blogs}) => {
  return (
    <div className='blog-list'>
        {blogs.map((blog)=><BlogItem blog={blog} />)}
    </div>
  )
}
