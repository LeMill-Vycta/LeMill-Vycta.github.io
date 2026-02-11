import { createContext, useContext, useMemo, useState } from "react";

const GlobeContext = createContext(null);

export const useGlobe = () => {
  const context = useContext(GlobeContext);

  if (!context) {
    throw new Error("useGlobe must be used inside GlobeProvider");
  }

  return context;
};

export const GlobeProvider = ({ children }) => {
  const [globeReady, setGlobeReady] = useState(false);

  const value = useMemo(
    () => ({ globeReady, setGlobeReady }),
    [globeReady]
  );

  return <GlobeContext.Provider value={value}>{children}</GlobeContext.Provider>;
};
