// useRandomNumbers.js
import { useEffect, useState, useCallback } from "react";
import { generateRandomNumbers } from "../utils/generateNumbers";

export function useRandomNumbers() {
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const generateNumbers = useCallback(() => {
    const { n1, n2 } = generateRandomNumbers();
    setNumber1(n1);
    setNumber2(n2);
    setIsReady(true);
  }, []);

  useEffect(() => {
    generateNumbers();
  }, [generateNumbers]);

  return { number1, number2, isReady, generateNumbers };
}
