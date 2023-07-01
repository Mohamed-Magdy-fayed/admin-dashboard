import { useEffect, useState } from "react";

export const useOrigin = () => {
  const [ismounted, setIsmounted] = useState(false);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!ismounted) return "";

  return origin;
};
