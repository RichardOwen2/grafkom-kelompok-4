import { useState, useEffect } from 'react';

export default function useConfig({ rumusJarakBayangan, rumusUkuranBayangan }) {
  const [ukuranBenda, setUkuranBenda] = useState(12);
  const [jarakBenda, setJarakBenda] = useState(12);
  const [titikFokus, setTitikFokus] = useState(12);
  const [jarakBayangan, setJarakBayangan] = useState(12);
  const [ukuranBayangan, setukuranBayangan] = useState(12);

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
