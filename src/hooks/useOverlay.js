import { useContext } from "react";
import { OverlayContext } from "../context/overlayContext";

export const useOverlay = () => {
  const context = useContext(OverlayContext);

  if (!context) {
    throw new Error(
      "useCurrentScreen must be used within a CurrentScreenProvider",
    );
  }

  return context;
};
