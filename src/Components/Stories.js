import './styles/stories.css'

import img1 from './images/Where the Wild Things Are.jpg'
import img2 from './images/The Very Hungry Caterpillar.jpeg'
import img3 from './images/Goodnight Moon.jpg'
import img4 from './images/Harry Potter.jpg'
import img5 from './images/The Mysteries Book.jpg'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  { useRef } from 'react';



function Courses() {

  const sectionRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const courses = [
    {
      title: 'Where the Wild Things Are',
      imageSrc: img1
    },
    {
      title: 'The Mystrious Book',
      imageSrc: img5
    },
    {
      title: 'The Very Hungry Caterpillar',
      imageSrc: img2
    },
    {
      title: 'Goodnight Moon',
      imageSrc: img3
    },
    {
      title: 'Harry Potter',
      imageSrc: img4
    },
    {
      title: 'Charlottes Web'
    },
    {
      title: 'Matilda'
    },
    {
      title: 'Alices Adventures in Wonderland'
    },
    {
      title: 'Green Eggs and Ham'
    },
    {
      title: 'The Tale of Peter Rabbit'
    },
    {
      title: 'Winnie the Pooh'
    },
    {
      title: 'The Cat in the Hat'
    }
  ];
  const coursesToShow = searchQuery
    ? courses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : courses;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div ref={sectionRef} smooth={true} duration={500}>

      <div className="course-box">
        <div className="course-bar">
          <p className="course-text">Stories</p>
          <div className="search-box">
            <input
              className="input-search-box"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>
      <div className="JavaScript-lesson-section">
      <select className='filter-box' >
          <option>Filter</option>
          <option >Subject</option>
          <option>Level of Difficulty</option>
          <option>Price</option>
          <option>Duration</option>
          <option>Ratings and Reviews</option>
        </select>
      <br/><br /><br></br>
      </div>
        <div className="course-Scroll">
          <div className="carousel-container">
            {coursesToShow.map((course, index) => (
              <div className="courses-card" key={index}>
                <Link to="/story1">
                  <div className="card-header">
                    <img
                      src={course.imageSrc}
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body">
                    <div className="tutotrs-role">
                      <p>{course.title}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

  );
}

export default Courses;
