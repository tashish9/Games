import { WordleInput } from "@components";
import { useEffect } from "react";
import { useWordleStore } from "../store/wordle";

export default function Wordle() {
  const { activeRow, updateWord, words } = useWordleStore();
  // console.log(words);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      let lastTypedColIdx = words[activeRow].findIndex((el) => !el);

      // if (lastTypedColIdx === -1) {
      //   lastTypedColIdx = words[0].length;
      // }

      if (
        (e.keyCode >= 65 && e.keyCode <= 90) ||
        (e.keyCode >= 97 && e.keyCode <= 122)
      ) {
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
