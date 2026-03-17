import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../shared/Button';
import Icon from '../shared/Icon';
import Input from '../shared/Input';



export default function SearchBar () {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!searchQuery.trim()) {
      return
    } else {
      navigate(`/products/search?k=${searchQuery}`);
      setSearchQuery('');
    }
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }

  return (
    <>
      <form className='form--search flex flex-row' onSubmit={handleSubmit}>
        <Button
          type='button'
          variant='default'
          className='button--search p-2 rounded-l-xs'
          aria-label='submit your search'
        >
          <Icon className="fas fa-search"/>
        </Button>
        <Input 
          type="search"
          className="bg-white "
          placeholder="Search..."
          onChange={handleChange}
          
        />
      </form>
    </>
  )
}
