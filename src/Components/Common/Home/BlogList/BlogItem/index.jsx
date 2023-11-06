import React from 'react'
import './styles.css'
import {Chip} from '../../../../Common/Chip'
import {Link} from 'react-router-dom'

export const BlogItem = ({blog:{id,description,title,createdAt,authorName,authorAvatar,category,cover}}) => {
  return (
    <div className='blog-item'>
        <img src={cover} alt="cover" className='blog-item-cover'/>
        <Chip  label={category} />
        <h3>{title}</h3>
        <p className='blog-item-desc'>{description}</p>
        <footer>
          <div className='blog-item-author'>
            <img src={authorAvatar} alt="avtar" />
            <div>
              <h6>{authorName}</h6>
              <p className='blog-item-desc'>{createdAt}</p>
            </div>
          </div>
          <Link to={`/blog/${id}`} className='blog-item-link'>⮕</Link>
        </footer>
    </div>
  )
}
