import { createContext, useState } from "react";

export const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
  const [overlay, setOverlay] = useState(false);

  const toggleOverlay = () => {
    setOverlay((prev) => !prev);
  };

  const showOverlay = () => {
    setOverlay(true);
  };

  const hideOverlay = () => {
    setOverlay(false);
  };

  const value = { overlay, showOverlay, hideOverlay, toggleOverlay };

  return (
    <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>
  );
};
