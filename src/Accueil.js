import React, { Component, useState, useEffect, useLayoutEffect } from 'react'

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
/**
 * first
 *  function useWindowPosition() {
    const [scrollPosition, setPosition] = useState(0);
    useLayoutEffect(() => {
      function updatePosition() {
        setPosition(window.scrollY);
      }
      window.addEventListener('scroll', updatePosition);
      updatePosition();
      return () => window.removeEventListener('scroll', updatePosition);
    }, []);
    return scrollPosition;
  }
 */


export default class Accueil extends Component {

  render() {
    //const {width, height} = useWindowDimensions();
    const Component = () => {
        const { height, width } = useWindowDimensions();
        //const { yposition } = useWindowPosition();
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

/**
 * first
 * <p>height, {height}</p>
        <p>width, {width}</p>
 */
