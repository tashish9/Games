import { WordleInput } from "@components";
import { useEffect } from "react";
import { useWordleStore } from "../store/wordle";

export default function Wordle() {
  const { activeRow, updateWord, words } = useWordleStore();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      let lastTypedColIdx = words[activeRow].findIndex((el) => !el);

      if (e.code.includes("Key")) {
        const keyPressed = e.key.toLowerCase();
        updateWord(lastTypedColIdx, keyPressed.toUpperCase());
      } else if (e.key === "Backspace" && lastTypedColIdx) {
        updateWord(lastTypedColIdx === -1 ? 4 : lastTypedColIdx - 1, "");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [activeRow, updateWord, words]);

  return (
    <div className="grid place-items-center h-screen bg-white text-black">
      <p className="text-green-500">Wordle</p>
      <WordleInput />
    </div>
  );
}
