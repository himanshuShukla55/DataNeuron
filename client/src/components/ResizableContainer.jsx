import { Resizable } from "react-resizable";

const ResizableContainer = ({
  id,
  height,
  width,
  onResize,
  handles,
  children,
}) => {
  return (
    <div>
      <Resizable
        id={id}
        height={height}
        width={width}
        onResize={onResize}
        resizeHandles={handles}
      >
        <div
          className="bg-slate-100 bg-opacity-10 rounded-lg shadow-lg"
          style={{ width: width + "px", height: height + "px" }}
        >
          {children}
        </div>
      </Resizable>
    </div>
  );
};

export default ResizableContainer;
