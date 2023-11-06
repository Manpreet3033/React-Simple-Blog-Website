import React, { useEffect, useState } from 'react'
import './styles.css'
import { Link, useParams } from 'react-router-dom'
import { blogArray } from '../../Common/Home/config/data';
import { Chip } from '../../Common/Chip';
export const Blog = () => {
  const {id} = useParams();
  const [blog,setBlog] = useState(null);
  useEffect(()=>{
    const blog = blogArray.find((blogEvent)=>blogEvent.id===parseInt(id));
    if(blog){
      setBlog(blog);
    }
  },[id]);
  return (
    <div>
        <Link className='go-back' to={'/'}>
        <span>←</span> Go Back
        </Link>
        {
          blog ?(
          <div className='blog-wrap'>
            <header>
              <p className='blog-date'>Published {blog.createdAt}</p>
              <h1>{blog.title}</h1>
              <div className='blog-subcategory'>
                {blog.subCategory.map((category) => (
                <div>
                  <Chip label={category}></Chip>
                </div>
                ))}
                </div>
            </header>
            <img src={blog.cover} alt="cover" />
            <p className='blog-description'>{blog.description}</p>
          </div>): (<div className='blog-not-found'>
            <h1>Error Blog Not Found...</h1>
            </div>)
        }
    </div>
  )
}
