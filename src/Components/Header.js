import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {

    if(this.props.data){
       var project = this.props.data.project;
       var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}>
           <a href={network.url}>
           <i className={network.className}>
           </i>
           </a>
         </li>
      })
    }

    return (

      <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul class="social">
       <li><a href="https://www.linkedin.com/in/mary-feiz/">
        <i class="fa fa-linkedin"></i></a></li>
        
        <li><a href="https://www.twitter.com/aalinoosh">
        
        <i class="fa fa-twitter"></i></a></li>

        <li><a href=" https://www.instagram.com/aalinoosh/">
        
        <i class="fa fa-instagram"></i></a></li>

        
        <li>
           <a href={github}><i class="fa fa-github"></i></a></li>

           <li><a href="https://www.facebook.com/maryam.fza/">
        <i class="fa fa-facebook"></i></a></li>  
      </ul>


            
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
