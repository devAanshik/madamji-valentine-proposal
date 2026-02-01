import { useNavigate } from "react-router-dom";
import { useOverlay } from "../hooks/useOverlay.js";

import Button from "../components/Button";
import Overlay from "../components/Overlay.jsx";

function ILoveYouScreen() {
  const navigate = useNavigate();
  const { overlay, showOverlay, hideOverlay } = useOverlay();

  const handlePageChange = () => {
    navigate("/bmv");
  };

  return (
    <div className="h-full flex flex-col items-center justify-center gap-6">
      {overlay && (
        <Overlay>
          <div className="bg-rose-50 min-w-xs max-w-md w-full shadow-2xl shadow-rose-400/50 m-6 rounded-xl text-center py-10 px-4 flex flex-col gap-6">
            <h3 className="text-4xl">Haha 😆</h3>
            <div className="space-y-1">
              <p>NOOOOOO, I love you more</p>
              <p>END OF DISCUSSION!</p>
            </div>

            <Button
              className="w-fit self-center"
              onClick={() => {
                handlePageChange();
                hideOverlay();
              }}
            >
              Whatever 🙄
            </Button>
          </div>
        </Overlay>
      )}

      <img src="/flowers.png" alt="" className="" />
      <p className="text-4xl">I Love You {"<3"}</p>

      <div className="flex gap-4">
        <Button onClick={handlePageChange}>I love you too</Button>
        <Button
          onClick={() => {
            showOverlay();
          }}
        >
          I love you more
        </Button>
      </div>
    </div>
  );
}

export default ILoveYouScreen;
