import { useState } from "react";
import LockScreen from "./components/LockScreen";
import Desktop from "./components/Desktop";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  return unlocked ? (
    <Desktop />
  ) : (
    <LockScreen onUnlock={() => setUnlocked(true)} />
  );
}