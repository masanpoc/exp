
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
  let animation = useRef();

  // useState definitions

  // useEffect definitions
  useEffect(() => {
    gsap.to(magnifier, {
      duration: 0, 
      motionPath: {
        path: [{x:-800, y:100}],
      }
    })
    gsap.to(image, {
      duration: 0, 
      motionPath: {
        path: [{x:800, y:-100}],

      }
    })
    gsap.to(magnifier, {
      duration: 5, 
      motionPath: {
        path: [{x:-200, y:300}, {x:-20, y:100}],
      }
    })
    gsap.to(image, {
      duration: 5, 
      motionPath: {
        path: [{x:200, y:-300}, {x:20, y:-100}],

      }
    })
  }, [])

  // functions

  return (
    <div ref={el => (App=el)} className="App">
      <h1 ref={el => (header=el)} className='header'>Header</h1>
      <div ref={el => (magnifier=el)} className='magnifier'>
        <img ref={el => (image=el)} className='image' src={pic} alt='header' />
      </div>
      <h3 ref={el => (subtitle=el)} className='subtitle' >Subtitle</h3>
      <div ref={el => (animation=el)} className='animation' >Animation</div>
    </div>
  );
}

export default App;
