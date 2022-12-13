import React from 'react';
import { LinkedIn } from '@material-ui/icons';
import { Email } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';

import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='homeTxt'>
        <h2>Hey, I'm Akash.</h2>
        <div>
          <p>
            A Web Developer With a passion for learning and creating.
          </p>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
      <div className='About'>
        <h1>About me</h1>
        <div className='about-txt'>
          <p>
            I'm a Full Stack developer based in Mumbai, India. With a focus on
            Front End Development as well as Backend Development. I am well-versed in a variety of front end and analytical languages, responsive frameworks,and database management systems. My goal is simple to use my development and analytical skills to improve corporate performance as an full stack engineer.
          </p>
          <p>
            Although I am well-versed in a variety of programming languages, my core expertise
            is in HTML/CSS, Bootstrap, JavaScript, React.js, Node.js, Express.js, MongoDb/Mongoose and Python.
          </p>
          <p>With a heavy emphasis on "Progressive Enhancement," I strive for innovative
            methods to push my bounds while adhering to proper code standards.
          </p>
          <p>
            In a quest for always keeping myself updated,I read books and attend seminars & meetups.
          </p>
          <p>I'm eager to combine my desire to use cutting-edge data technologies with my
            insatiable desire to learn new skills to improve organizational performance.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home