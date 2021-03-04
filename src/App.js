
import './App.css';
import pic from './img/pic.jpg';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);


function App() {

  // constant variables

  // useRef definitions 
  let header = useRef();
  let magnifier = useRef();
  let image = useRef();
  let subtitle = useRef();
  let subtitle2 = useRef();
  let animation = useRef();

  // useState definitions

  // useEffect definitions
  useEffect(() => {
    // gsap.to(magnifier, {
    //   duration: 0, 
    //   motionPath: {
    //     path: [{x:-800, y:0}],
    //   }
    // })
    // gsap.to(image, {
    //   duration: 0, 
    //   motionPath: {
    //     path: [{x:800, y:0}],

    //   }
    // })
    // gsap.to(magnifier, {
    //   duration: 3, 
    //   motionPath: {
    //     path: [
    //       // {x:-550, y:0},
    //        {x:-150, y:250}, {x:-20, y:100}],
    //     curviness: 2
    //   }
    // })
    // gsap.to(image, {
    //   duration: 3, 
    //   motionPath: {
    //     path: [
    //       // {x:550, y:0},
    //        {x:150, y:-250}, {x:20, y:-100}],
    //     curviness: 2
    //   }
    // })


    const timeline = gsap.timeline({ease: 'bounce-out'})
    timeline
    .from(subtitle, {
      duration: 1,
      y: -50,
      autoAlpha: 0,
    })
    .from(subtitle2, {
      duration: 1,
      y: -20,
      autoAlpha: 0,
    }
    , '>-0.4' 
    )
     // .from(animation, {
    //   y: 50,
    //   autoAlpha: 0,
    //   // delay: 3
    // })
    // .from(header, {
    //   y: 50,
    //   autoAlpha: 0,
    // })

  }, [])

  // functions

  return (
    <div ref={el => (App=el)} className="App">
      <h1 ref={el => (header=el)} className='header'>Header fdsewfw fwdcfwefe edfww</h1>
      <div ref={el => (magnifier=el)} className='magnifier'>
        <img ref={el => (image=el)} className='image' src={pic} alt='header' />
      </div>
      <p>djfimowpcjwd</p>
      <p>jvemiopljdlkm</p>
      <h3 ref={el => (subtitle=el)} className='subtitle' >Subtitle</h3>
      <h3 ref={el => (subtitle2=el)} className='subtitle' >Subtitle</h3>
      <div ref={el => (animation=el)} className='animation' >Animation</div>
    </div>
  );
}

export default App;
