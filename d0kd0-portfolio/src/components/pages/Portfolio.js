import React from 'react';
import '/Users/nini/Bootcamp/REACT_Portfolio/d0kd0-portfolio/src/components/pages/style.css';
import project1 from "/Users/nini/Bootcamp/REACT_Portfolio/d0kd0-portfolio/src/components/image/Horiseon.jpeg";
import project2 from "/Users/nini/Bootcamp/REACT_Portfolio/d0kd0-portfolio/src/components/image/D0KD0.jpeg";
import project3 from "/Users/nini/Bootcamp/REACT_Portfolio/d0kd0-portfolio/src/components/image/recipe.jpeg";
import project4 from "/Users/nini/Bootcamp/REACT_Portfolio/d0kd0-portfolio/src/components/image/HelloBud_logo.png";
import project5 from "/Users/nini/Bootcamp/REACT_Portfolio/d0kd0-portfolio/src/components/image/pre-work.jpeg";

export default function Portfolio() {
  return (
    <div className="tab-container">
      <div className="container">
        <div className="row">
          <p>
          
          </p>
          <p>
            
          </p>
          <div class="col">
            <a href="https://d0kd0.github.io/1st-Challenge-Horiseon/" target='_blank' >
              <img
                src={project1}
                alt="desk at cafe"
                className="resize"
              />
            </a>
          </div>

          <div class="col">
            <a href="https://d0kd0.github.io/2nd-Challenge-D0KD0/" target='_blank' >
            <img 
                src={project2}
                alt="ipad on desk"
                className="resize"
              />
            </a>
          </div>

          <div class="col">
            <a href="https://d0kd0.github.io/prework-study-guide/" target='_blank' >
              <img 
                src={project3}
                alt="coding sign"
                className="resize"
              />
            </a>
          </div>

          <div class="col">
            <a href="https://olgagav.github.io/what-am-i-craving-today" target='_black' >
              <img 
                src={project4}
                alt="ipad on desk"
                className="resize"
              />
            </a>
          </div>

          <div class="col">
          <a href="https://hellobud-app.herokuapp.com/" target='_black' >
            <img 
            src={project5}
            alt="logo"
            className="resize"
            />
          </a>
          </div>

        </div>
      </div>
    </div>
  );
}
