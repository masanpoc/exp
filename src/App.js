
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
  let letter1 = useRef();
  let letter2 = useRef();
  let letter3 = useRef();
  let letter4 = useRef();
  let letter5 = useRef();
  let letter6 = useRef();
  let letter7 = useRef();

  // useState definitions

  // useEffect definitions
  useEffect(() => {
    gsap.to(magnifier, {
      duration: 0, 
      scale: 2,
      motionPath: {
        path: [{x:-1200, y:0}],
      }
    })
    gsap.to(image, {
      duration: 0, 
      scale: 2,
      motionPath: {
        path: [{x:1200, y:0}],

      }
    })
    const timeline = gsap.timeline({ease: 'bounce-out'})
    timeline
    .to(magnifier, {
      delay: 3,
      scale: 1,
      duration: 3, 
      motionPath: {
        path: [{x:-20, y:100}],
        curviness: 2
      }
    })
    .to(image, {
      scale: 1,
      duration: 3, 
      motionPath: {
        path: [{x:20, y:-100}],
        curviness: 2
      }
    }, '>-3')
    .from(letter1, {
      scale: 2,
      autoAlpha: 0,
      duration: 2,
      x: 100,
      y: 200,
      skewX: 50
    }, '>-3')
    .from(letter2, {
      scale: 2,
      autoAlpha: 0,
      duration: 2,
      x: 50,
      y: -100,
      skewX: 70
    }, '>-2')
    .from(letter3, {
      scale: 2,
      autoAlpha: 0,
      duration: 2,
      x: 200,
      y: 400,
      skewY: 30 
    }, '>-2')
    .from(letter4, {
      scale: 2,
      autoAlpha: 0,
      duration: 2,
      x: 20,
      y: 700,
      skewX: 45
    }, '>-2')
    .from(letter5, {
      scale: 2,
      autoAlpha: 0,
      duration: 2,
      x:44 ,
      y: -402,
      skewY: 36
    }, '>-2')
    .from(letter6, {
      scale: 2,
      autoAlpha: 0,
      duration: 2,
      x: 587,
      y:52 ,
      skewY: 58
    }, '>-2')
    .from(letter7, {
      scale: 2,
      autoAlpha: 0,
      duration: 2,
      x:25 ,
      y: 547,
      skewX: 45
    }, '>-2')

    .from(subtitle, {
      duration: 1,
      y: 50,
      autoAlpha: 0,
    })
    .from(subtitle2, {
      delay: 0.5,
      duration: 1,
      y: 20,
      autoAlpha: 0
    })
    .to(App, {
      delay: 2,
      yPercent: -100,
      // skewX: 10,
      // skewY: 10,
      duration: 2
    })
    .set(App, {
      className: 'none'
    })


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
      {/* <h1 ref={el => (header=el)} className='header'>Header fdsewfw fwdcfwefe edfww</h1> */}
      <div ref={el => (magnifier=el)} className='magnifier'>
        <img ref={el => (image=el)} className='image' src={pic} alt='header' />
      </div>
      <div className='wraper'>
        <div ref={el=>(letter1=el)} className='letter'>H</div>
        <div ref={el=>(letter2=el)} className='letter'>A</div>
        <div ref={el=>(letter3=el)} className='letter'>E</div>
        <div ref={el=>(letter4=el)} className='letter'>N</div>
        <div ref={el=>(letter5=el)} className='letter'>D</div>
        <div ref={el=>(letter6=el)} className='letter'>E</div>
        <div ref={el=>(letter7=el)} className='letter'>L</div>
      </div>
      
      {/* <p>djfimowpcjwd</p>
      <p>jvemiopljdlkm</p> */}
      <h3 ref={el => (subtitle=el)} className='subtitle1' >Todos necesitamos algún tipo de música</h3>
      <h5 ref={el => (subtitle2=el)} className='subtitle2' >Música clásica quizás? Descubre quiénes somos</h5>
      {/* <div ref={el => (animation=el)} className='animation' >Animation</div> */}
    </div>
  );
}

export default App;
