import React, { Component, useState, useEffect } from 'react'
import Aircraft from './Aircraft';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

 function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }


export default class Accueil extends Component {

  render() {
    const Component = () => {
        const { height, width } = useWindowDimensions();
        const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
        if (typeof window !== "undefined") {
        
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        }

        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [])
      
        return (
          <div>
            <p>width: {width} ~ height: {height}</p>
            <p>yposition : {scrollPosition}</p>
            <Aircraft scrollPosition={scrollPosition} pageWidth={width} pageHeight={height}/>
          </div>
        );
      }
    
    return (
      <div>accueil HELLO
        <Component />
      </div>
    )
  }
}

