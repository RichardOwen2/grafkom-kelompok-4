import { useState, useEffect } from 'react';
import useInput from './useInput';

export default function useConfig({ titikfokus, rumusJarakBayangan, rumusUkuranBayangan }) {
  const [ukuranBenda, onUkuranBendaChange] = useInput(50);
  const [jarakBenda, onJarakBendaChange] = useInput(200);
  const [titikFokus, onTitikFokusChange] = useInput(titikfokus);

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

  return {
    setter: [onUkuranBendaChange, onJarakBendaChange, onTitikFokusChange],
    value: [ukuranBenda, jarakBenda, titikFokus, jarakBayangan, ukuranBayangan],
  };
}
