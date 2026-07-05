import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import BackgroundEffects from "./components/BackgroundEffects";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <BackgroundEffects />
      <CustomCursor />
      <ScrollProgress />
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      {!isLoading && <Home />}
    </>
  );
}

export default App;