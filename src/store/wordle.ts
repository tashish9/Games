import { create } from "zustand";

type WordleState = {
  activeRow: number;
  words: string[][];
  updateWord: (c: number, val: string) => void;
};

export const useWordleStore = create<WordleState>((set) => ({
  activeRow: 0,
  words: Array.from({ length: 6 }, () => Array(5).fill("")),
  updateWord: (c, val) => {
    set((state) => {
      const curr = state.words.map((row) => [...row]);
      curr[state.activeRow][c] = val;
      return {
        ...state,
        words: curr,
      };
    }, true);
  },
}));
