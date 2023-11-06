import  { React,useState } from "react";
import { Header } from "../../Common/Home/Header";
import { SearchBar } from "../../Common/Home/SearchBar";
import { BlogList } from "../../Common/Home/BlogList";
import { blogArray } from "../../Common/Home/config/data";
import './styles.css'


export const Home = () => {
  const [blogs,setBlogs] = useState(blogArray);
  const [searchKey,setSearchKey] = useState('');
  const handleSearchSubmit=(e)=>{
    e.preventDefault();
    handleSearchResults();
  }
  const handleSearchResults=()=>{
    const allBlogs = blogArray;
    const filteredBlogs = allBlogs.filter((blog)=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
    setBlogs(filteredBlogs);
  }

  const handleClearSearch=()=>{
    setBlogs(blogArray);
    setSearchKey('');
  }

  return (
    <div>
      <Header />
      <SearchBar value={searchKey} clearSearch={handleClearSearch} formSubmit={handleSearchSubmit} handleSearch={(e)=>setSearchKey(e.target.value)} />
      <BlogList blogs={blogs} />
    </div>
  );
};
