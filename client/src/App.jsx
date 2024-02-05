import React, { useContext } from "react";
import ResizableContainer from "./components/ResizableContainer";
import { ResizableContext } from "./context/ResizableContext";
const App = () => {
  const { dimA, dimB, dimC, onResizeA, onResizeB, onResizeC } =
    useContext(ResizableContext);
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div>
        <div className="flex gap-5 mb-5">
          <ResizableContainer
            id="A"
            width={dimA.width}
            height={dimA.height}
            onResize={onResizeA}
            handles={["e", "s"]}
          />
          <ResizableContainer
            id="B"
            width={dimB.width}
            height={dimB.height}
            onResize={onResizeB}
            handles={["w", "s"]}
          />
        </div>
        <ResizableContainer
          id="C"
          width={dimC.width}
          height={dimC.height}
          onResize={onResizeC}
          handles={["n", "e"]}
        />
      </div>
    </div>
  );
};

export default App;
