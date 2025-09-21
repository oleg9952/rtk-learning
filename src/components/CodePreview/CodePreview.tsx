import React from "react";

interface CodePreviewProps {
  data: any;
  title?: string;
  maxHeight?: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({
  data,
  title = "Code Preview",
  maxHeight = "400px",
}) => {
  const formatData = (obj: any): string => {
    if (obj === null) return "null";
    if (obj === undefined) return "undefined";

    try {
      return JSON.stringify(obj, null, 2);
    } catch (error) {
      return `Error formatting data: ${
        error instanceof Error ? error.message : "Unknown error"
      }`;
    }
  };

  const formattedData = formatData(data);

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
      )}
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-300 text-sm font-mono">JSON</span>
          </div>
        </div>
        <div className="p-4 overflow-auto" style={{ maxHeight }}>
          <pre className="text-gray-100 font-mono text-sm leading-relaxed whitespace-pre-wrap break-words">
            <code>{formattedData}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodePreview;
