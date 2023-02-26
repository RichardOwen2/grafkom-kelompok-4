import { useState, useEffect } from 'react';

export default function useConfig({ rumusJarakBayangan, rumusUkuranBayangan }) {
  const [ukuranBenda, setUkuranBenda] = useState(50);
  const [jarakBenda, setJarakBenda] = useState(200);
  const [titikFokus, setTitikFokus] = useState(-100);
  const [jarakBayangan, setJarakBayangan] = useState(null);
  const [ukuranBayangan, setukuranBayangan] = useState(null);

  useEffect(() => {
    const jarakBayanganBaru = rumusJarakBayangan(titikFokus, jarakBenda);
    const ukuranBayanganBaru = rumusUkuranBayangan(jarakBayanganBaru, ukuranBenda, jarakBenda);

    setJarakBayangan(jarakBayanganBaru);
    setukuranBayangan(ukuranBayanganBaru);
  }, [ukuranBenda, titikFokus, jarakBenda])
  
  return {
    setter: [setUkuranBenda, setJarakBenda, setTitikFokus],
    value: [ukuranBenda, jarakBenda, titikFokus, jarakBayangan, ukuranBayangan],
  };
}
