import React, { useContext } from "react";
import { ResizableContext } from "./context/ResizableContext";
import {
  AddData,
  ResizableContainer,
  ShowCounts,
  ShowData,
} from "./components";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { dimA, dimB, dimC, onResizeA, onResizeB, onResizeC } =
    useContext(ResizableContext);
  return (
    <>
      <div className="h-[100vh] w-full flex justify-center items-center">
        <div>
          <div className="flex gap-5 mb-5">
            <ResizableContainer
              width={dimA.width}
              height={dimA.height}
              onResize={onResizeA}
              handles={["e", "s"]}
            >
              <AddData />
            </ResizableContainer>
            <ResizableContainer
              width={dimB.width}
              height={dimB.height}
              onResize={onResizeB}
              handles={["w", "s"]}
            >
              <ShowCounts />
            </ResizableContainer>
          </div>
          <ResizableContainer
            width={dimC.width}
            height={dimC.height}
            onResize={onResizeC}
            handles={["n", "e"]}
          >
            <ShowData />
          </ResizableContainer>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
