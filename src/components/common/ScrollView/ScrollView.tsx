import React from "react";
import type { ReactNode } from "react";

interface ScrollViewProps {
  children: ReactNode;
  maxHeight?: string | number;
  className?: string;
  showScrollbar?: boolean;
}

const ScrollView: React.FC<ScrollViewProps> = ({
  children,
  maxHeight = "400px",
  className = "",
  showScrollbar = true,
}) => {
  const scrollbarClasses = showScrollbar
    ? "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
    : "scrollbar-hide";

  return (
    <div
      className={`overflow-y-auto ${scrollbarClasses} ${className}`}
      style={{ maxHeight }}
    >
      {children}
    </div>
  );
};

export default ScrollView;
