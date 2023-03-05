import { useState, useEffect } from 'react';

export default function useConfig({ rumusJarakBayangan, rumusUkuranBayangan }) {
  const [ukuranBenda, setUkuranBenda] = useState(50);
  const [jarakBenda, setJarakBenda] = useState(200);
  const [titikFokus, setTitikFokus] = useState(-100);

  const jarakBayanganBaru = rumusJarakBayangan(titikFokus, jarakBenda);
  const ukuranBayanganBaru = rumusUkuranBayangan(jarakBayanganBaru, ukuranBenda, jarakBenda);

  const [jarakBayangan, setJarakBayangan] = useState(jarakBayanganBaru);
  const [ukuranBayangan, setukuranBayangan] = useState(ukuranBayanganBaru);

  useEffect(() => {
    const jarakBayanganBaru = rumusJarakBayangan(titikFokus, jarakBenda);
    const ukuranBayanganBaru = rumusUkuranBayangan(jarakBayanganBaru, ukuranBenda, jarakBenda);

    setJarakBayangan(jarakBayanganBaru);
    setukuranBayangan(ukuranBayanganBaru);
  }, [ukuranBenda, titikFokus, jarakBenda, rumusJarakBayangan, rumusUkuranBayangan])

  const onUkuranBendaChange = (event) => {
    setUkuranBenda(event.target.value)
  }

  const onJarakBendaChange = (event) => {
    setJarakBenda(event.target.value)
  }

  const onTitikFokusChange = (event) => {
    setTitikFokus(event.target.value)
  }

  console.log([jarakBayangan, ukuranBayangan])

  return {
    setter: [onUkuranBendaChange, onJarakBendaChange, onTitikFokusChange],
    value: [ukuranBenda, jarakBenda, titikFokus, jarakBayangan, ukuranBayangan],
  };
}
