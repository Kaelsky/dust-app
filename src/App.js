import { useState } from "react";
import { Drawer } from "./components/Drawer";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Overlay } from "./components/Overlay";
import { Welcome } from "./components/Welcome";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="bg-darkblue bg-opacity-1 h-screen w-screen flex justify-center items-center relative overflow-hidden">
      <AnimatedBackground isSuccess={isSuccess} />
      <Overlay isOpen={isOpen} />

      <Welcome
        className="z-1"
        setIsOpen={setIsOpen}
        setIsSuccess={setIsSuccess}
        isSuccess={isSuccess}
      />

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSuccess={() => setIsSuccess(true)}
      />
    </div>
  );
}

export default App;
