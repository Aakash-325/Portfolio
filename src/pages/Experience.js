import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import { School } from "@material-ui/icons";
import { Work } from "@material-ui/icons";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#191919">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: "#191919", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Front - end
          </h3>
          <p> Created a Frontend Website using HTML, CSS and Javascript for a client where he can scale their custome online.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#191919", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Clone Projects
          </h3>

          {/* <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4> */}

          <p>I have created many clone projects like a Lyrics clone of Spotify, a SearchOver clone of Google also made an IMDb clone name Moviebetter.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#191919", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Back - end
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
          </h4> */}
          <p>Created a Backend for the website using Node.js and Express.js with proper User Authentication system and intergred Payment gateway.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#191919", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Full-Stack Developer
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4> */}
          <p>
          I have created Fully Responsive Full stack MERN application with user authentication payment gateway capable of Autoresponse.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;