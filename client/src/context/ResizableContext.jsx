import { useState, createContext } from "react";

export const ResizableContext = createContext();

const ResizableProvider = ({ children }) => {
  const [dimA, setDimA] = useState({
    height: 350,
    width: 500,
    maxWidth: 1000,
    maxHeight: 700,
  });
  const [dimB, setDimB] = useState({
    height: 350,
    width: 500,
    maxWidth: 1000,
    maxHeight: 700,
  });
  const [dimC, setDimC] = useState({
    height: 350,
    width: 1020,
    maxWidth: 1020,
    maxHeight: 700,
  });

  const onResizeA = (event, { node, size, handle }) => {
    setDimA({
      ...dimA,
      height: size.height > dimA.maxHeight ? dimA.maxHeight : size.height,
      width: size.width > dimA.maxWidth ? dimA.maxWidth : size.width,
    });
    setDimB({
      ...dimB,
      height: size.height > dimB.maxHeight ? dimB.maxHeight : size.height,
      width: 1008 - (size.width > dimA.maxWidth ? dimA.maxWidth : size.width),
    });
    setDimC({
      ...dimC,
      height:
        720 - (size.height > dimA.maxHeight ? dimA.maxHeight : size.height),
    });
  };
  const onResizeB = (event, { node, size, handle }) => {
    setDimB({
      ...dimB,
      height: size.height > dimB.maxHeight ? dimB.maxHeight : size.height,
      width: size.width > dimB.maxWidth ? dimB.maxWidth : size.width,
    });
    setDimA({
      ...dimA,
      height: size.height > dimA.maxHeight ? dimA.maxHeight : size.height,
      width: 1008 - (size.width > dimB.maxWidth ? dimB.maxWidth : size.width),
    });
    setDimC({
      ...dimC,
      height:
        720 - (size.height > dimB.maxHeight ? dimB.maxHeight : size.height),
    });
  };
  const onResizeC = (event, { node, size, handle }) => {
    setDimC({
      ...dimC,
      height: size.height > dimC.maxHeight ? dimC.maxHeight : size.height,
      width: size.width > dimC.maxWidth ? dimC.maxWidth : size.width,
    });
    setDimA({
      ...dimA,
      height:
        720 - (size.height > dimC.maxHeight ? dimC.maxHeight : size.height),
    });
    setDimB({
      ...dimB,
      height:
        720 - (size.height > dimC.maxHeight ? dimC.maxHeight : size.height),
    });
  };
  return (
    <ResizableContext.Provider
      value={{ dimA, dimB, dimC, onResizeA, onResizeB, onResizeC }}
    >
      {children}
    </ResizableContext.Provider>
  );
};
export default ResizableProvider;
