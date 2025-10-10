import React from 'react';
import {Link} from 'react-router-dom';

export default function Logo() {
  return(
    <>
      <h1 
        className="logo"
      >
          <Link 
            to="/" 
            className="text-white"
            id="title"
            >
              The Mash Up
            </Link>
      </h1>
    </>
  )
};