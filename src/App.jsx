import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import PageSizeContext from "./contexts/PageSizeContext";
import CerminCembung from "./pages/CerminCembung";

export default function App() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <PageSizeContext.Provider value={windowDimensions}>
      <Routes>
        <Route path={'/'} element={<CerminCembung />} />
      </Routes>
    </PageSizeContext.Provider>
  );
}
