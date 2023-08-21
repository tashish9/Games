import { create } from "zustand";

type WordleState = {
  activeRow: number;
  words: string[][];
  updateWord: (c: number, val: string) => void;
};

export const useWordleStore = create<WordleState>((set) => ({
  activeRow: 0,
  words: Array.from({ length: 6 }, () => Array(5).fill("")), // Create a new array for each row
  updateWord: (c, val) => {
    set((state) => {
      const curr = state.words.map((row) => [...row]); // Create a shallow copy of the array
      console.log(curr);
      curr[state.activeRow][c] = val;
      console.log(curr);
      return {
        ...state,
        words: curr,
      };
    }, true);
  },
}));
