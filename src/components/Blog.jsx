import React, { Component } from 'react'
import { Grid } from 'react-bootstrap';
import './Blog.css';

export default class Blog extends Component {
  render() {
    return (
      <div className="Blog-box">
        <Grid>
        <h4 className="heading">Serving the Community & learning Code</h4>
        
            <p className="blog-txt">I’m currently involved in a project with a meet-up group called <a className="blog-link" href="https://www.meetup.com/Wellington-JavaScript-for-Juniors/" target="_blank"><span className="wj"> WJ4J (Wellington JavaScript for Juniors)</span></a>. This meet-up is unlike any other Tech related meet-up you would find in Wellington. I, along with rest of the team have the privilege of being one of its first members. </p>
          
            <p className="blog-txt">Sponsored in part by BNZ, WJ4J is a Wellington-based project to help recent grads and other would-be developers gain enough experience with JavaScript development to get a job as a junior developer. To this end, each team builds a state-of-the-art JavaScript application for a local charity. Developers are involved in every stage of the project, from first discussions with the client to final delivery and deployment. The current project that my team is working on uses React, Redux, ReduxObservable, Rx.js, Apollo, GraphQL, Prisma, Docker, PostgreSQL, and more in a strongly functional way using ES.next. The junior developers and testers work through stories, do code reviews, run tests, get product owner sign off, etc. until the final project is delivered.</p>
          
        
          <h1 className="blog-subheading">Getting Started:</h1>

            <p className="blog-txt">The meet-up scene in Wellington has changed and tech meetups are becoming increasingly prevalent and popular among software developers. The main appeal behind software development in general is to learn new things and tech meetups are a great way to gain knowledge about a brand new technology. From my own perspective and I’m sure this is the general consensus among a lot of people who attend tech meet-ups.These can be very un-organised and though you always learn something new or widen your networking circle, most meet-ups don’t produce anything substantial.</p>
              
            <p className="blog-txt">This is where WJ4J differs. The organisers and the team of junior devs are committed in creating a complex javascript app. The approach towards achieving this goal is anything but casual, the entire process is being done as holistically and professionally as possible.  I and other team members are indebted to our Project Lead and organiser Charles F. Munat and other Designers, Testers and a very talented Business Analyst, all of whom have years of experience in their respective fields.</p>
          
          
        
          <h1 className="blog-subheading">More than just a meet-up:</h1>
            
            <p className="blog-txt">We’re a very diverse bunch, including students and other self-taught coders who are currently working in the IT industry in non-developer/programmer roles. What makes us different is the commitment and regular contribution that each member of the team is providing. We meet twice a week and every week it’s something new like bringing in testers or designers.</p>
          
          
          <h1 className="blog-subheading">Ramda & Other new concepts:</h1>
            
            <p className="blog-txt">For this project we’re using the Ramda library of functions and delving deep into Functional Programming. We’re also using JavaScript-based tools to write CSS. Called the new wave of CSS, Styled Components is one of these libraries, and it has quickly attracted a lot of attention due to its mix of innovation and familiarity. 
            Other tools we’ll be using as we get closer to completing our app will be GraphQL, Apollo, Prisma and many others. I’ve personally never used any of these apart from Functional programming. </p>
          
          <h1 className="blog-subheading">Current Stage:</h1>
    
            <p className="blog-txt">It took a while for the project to gain momentum but we’re slowly yet gradually approaching the MVP stage. Our project lead has already brought in a well experienced UX/Designer and in the coming weeks we’ll be discussing automated end to end testing with senior testers who’ve volunteered to help us out. 
            We’ve got a long way to go but things are looking very promising and our team is getting first-hand experience at how things are done in big organizations. I’m personally very excited about how the end product will look and can’t wait till we reach MVP. Watch this space for updates…</p>
          
        </Grid>
      </div>
    )
  }
}
