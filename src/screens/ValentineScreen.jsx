import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";

const rejectionHandlingMessages = [
  "No",
  "Think twice",
  "Think again",
  "Are you sure?",
  "Don't be hasty",
  "Last chance",
  "Please say yes",
  "I insist",
  "Please??",
  "Pretty please????",
  "Pwweaaassseee???????",
];

function ValentineScreen() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  document.title =
    step === 1 ? "Answer this question" : "Will you be my valentine?";

  const [buttonSizeReductionMultiplier, setButtonSizeReductionMultiplier] =
    useState(0);
  const noButtonRef = useRef(null);
  const yesButtonRef = useRef(null);

  const handleRejection = () => {
    noButtonRef.current.style.transform =
      "scale(" +
      (1 - 0.05 * buttonSizeReductionMultiplier) +
      ") translateX(" +
      (Math.random() * 300 - 150) +
      "px) translateY(" +
      (Math.random() * 200 - 100) +
      "px)";

    yesButtonRef.current.style.transform = `scale(${1 + 0.1 * buttonSizeReductionMultiplier})`;

    setButtonSizeReductionMultiplier((prev) => prev + 1);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center gap-6">
      {step === 1 && (
        <>
          <img src="/question.png" alt="" className="" />
          <p className="text-4xl max-w-xl">
            Now, I need you to answer a question for me
          </p>

          <Button onClick={() => setStep(2)}>What?</Button>
        </>
      )}

      {step === 2 && (
        <>
          <img src="/bmv.png" alt="" className="max-w-xs" />
          <p className="text-4xl">Will you be my valentine?</p>

          <div className="flex gap-4">
            <div ref={yesButtonRef} className="relative">
              <Button
                className="min-w-30"
                onClick={() => navigate("/accepted")}
              >
                Yes
              </Button>
            </div>

            <div ref={noButtonRef} className="relative">
              <Button className="min-w-30" onClick={handleRejection}>
                {
                  rejectionHandlingMessages[
                    Math.min(
                      buttonSizeReductionMultiplier,
                      rejectionHandlingMessages.length - 1,
                    )
                  ]
                }
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ValentineScreen;
