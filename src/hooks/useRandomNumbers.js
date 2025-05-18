import { useEffect, useState } from "react";
import { generateRandomNumbers } from "../utils/generateNumbers";

export function useRandomNumbers() {
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const { n1, n2 } = generateRandomNumbers();
    setNumber1(n1);
    setNumber2(n2);
    setIsReady(true);
  }, []);

  return { number1, number2, isReady };
}
