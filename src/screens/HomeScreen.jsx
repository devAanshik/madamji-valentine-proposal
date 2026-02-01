import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col items-center justify-center gap-6">
      <img src="/hello.png" alt="" className="" />
      <p className="text-4xl">Hello Madamji</p>

      <Button
        onClick={() => {
          navigate("/ily");
        }}
      >
        Hello
      </Button>
    </div>
  );
}

export default HomeScreen;
