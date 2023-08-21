/* eslint-disable react/display-name */
import { useWordleStore } from "@store";
import { memo } from "react";

const WordleInputBlock = memo(({ value }: { value?: string }) => {
  return (
    <div className="h-13 w-13 border-2 font-bold text-center border-gray-400 text-3xl outline-none grid place-items-center ">
      {value}
    </div>
  );
});

export const WordleInputRow = ({ rowNum }: { rowNum: number }) => {
  const { words } = useWordleStore();

  return (
    <div className="flex gap-4">
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <WordleInputBlock value={words[rowNum][idx]} key={idx} />
        ))}
    </div>
  );
};

export const WordleInput = () => {
  return (
    <div className="grid gap-4">
      {Array(6)
        .fill(0)
        .map((_, idx) => (
          <WordleInputRow rowNum={idx} key={idx} />
        ))}
    </div>
  );
};
