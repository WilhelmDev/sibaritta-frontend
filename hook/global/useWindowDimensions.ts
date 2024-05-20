import { useState, useEffect } from 'react';

type WindowDimensionsType = {
    width: number | null;
    height: number | null;
  };

function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  // Default values when window is not available
  return {
    width: null,
    height: null
  };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensionsType>({ width: null, height: null });

  useEffect(() => {
    // This effect runs once after the component mounts,
    // at which point 'window' is available
    setWindowDimensions(getWindowDimensions());

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowDimensions;
}