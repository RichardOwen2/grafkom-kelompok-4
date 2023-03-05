import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import PageSizeContext from "./contexts/PageSizeContext";
import LensaCembung from "./pages/LensaCembung";
import LensaCekung from "./pages/LensaCekung";
import CerminCekung from "./pages/CerminCekung";
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
        <Route path={'/lensa/cembung'} element={<LensaCembung />} />
        <Route path={'/lensa/cekung'} element={<LensaCekung />} />
        <Route path={'/cermin/cekung'} element={<CerminCekung />} />
        <Route path={'/cermin/cembung'} element={<CerminCembung />} />
      </Routes>
    </PageSizeContext.Provider>
  );
}
