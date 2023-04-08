import { useEffect, useState } from "react";

const useGradient = () => {
  const [current, setCurrent] = useState(0);
  const [showGradient, setShowGradient] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % 3);
      setShowGradient(true);
      setTimeout(() => setShowGradient(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return { current, showGradient };
};

export default useGradient;
