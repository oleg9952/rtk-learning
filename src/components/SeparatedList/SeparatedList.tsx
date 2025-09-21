import React from "react";

interface SeparatedListProps {
  children: React.ReactNode | React.ReactNode[];
  separatorClassName?: string;
  className?: string;
}

const SeparatedList: React.FC<SeparatedListProps> = ({
  children,
  separatorClassName = "border-gray-200",
  className = "",
}) => {
  // Filter out null/undefined children and handle both single child and array
  const validChildren = React.Children.toArray(children).filter(
    (child) => child != null
  );

  if (validChildren.length === 0) {
    return null;
  }

  // If only one child, render it without separator
  if (validChildren.length === 1) {
    return <div className={className}>{validChildren[0]}</div>;
  }

  return (
    <div className={className}>
      {validChildren.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {/* Add separator after each child except the last one */}
          {index < validChildren.length - 1 && (
            <div className={`border-t-4 ${separatorClassName}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SeparatedList;
