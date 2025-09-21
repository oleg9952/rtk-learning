import React, { useState, useRef, useCallback } from "react";
import type { ReactNode } from "react";

interface SplitPaneProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  title?: string;
  initialLeftWidth?: number; // percentage (0-100)
  minLeftWidth?: number; // percentage
  minRightWidth?: number; // percentage
  className?: string;
}

const SplitPane: React.FC<SplitPaneProps> = ({
  leftContent,
  rightContent,
  title,
  initialLeftWidth = 50,
  minLeftWidth = 20,
  minRightWidth = 20,
  className = "",
}) => {
  const [leftWidth, setLeftWidth] = useState(initialLeftWidth);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const newLeftWidth =
        ((e.clientX - containerRect.left) / containerRect.width) * 100;

      // Apply min/max constraints
      const constrainedWidth = Math.max(
        minLeftWidth,
        Math.min(100 - minRightWidth, newLeftWidth)
      );

      setLeftWidth(constrainedWidth);
    },
    [isDragging, minLeftWidth, minRightWidth]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleReset = useCallback(() => {
    setLeftWidth(50);
  }, []);

  // Add/remove global event listeners
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className={className}>
      {/* Title */}
      {title && (
        <div className="mb-4">
          <h2 className="text-xl text-center pt-2 font-semibold text-gray-800">
            {title}
          </h2>
        </div>
      )}

      {/* Split Pane Container */}
      <div ref={containerRef} className="flex h-full w-full">
        {/* Left Panel */}
        <div
          className="flex-shrink-0 overflow-hidden p-5"
          style={{ width: `${leftWidth}%` }}
        >
          {leftContent}
        </div>

        {/* Resizer */}
        <div
          className={`flex-shrink-0 w-1 bg-gray-300 hover:bg-gray-400 cursor-col-resize transition-colors duration-150 relative group ${
            isDragging ? "bg-gray-400" : ""
          }`}
          onMouseDown={handleMouseDown}
          onDoubleClick={handleReset}
          title="Double-click to reset to 50/50"
        >
          {/* Resizer Handle - Visual indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-8 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center">
              <div className="w-0.5 h-4 bg-white rounded-full"></div>
              <div className="w-0.5 h-4 bg-white rounded-full ml-0.5"></div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div
          className="flex-1 overflow-hidden p-5"
          style={{ width: `${100 - leftWidth}%` }}
        >
          {rightContent}
        </div>
      </div>
    </div>
  );
};

export default SplitPane;
