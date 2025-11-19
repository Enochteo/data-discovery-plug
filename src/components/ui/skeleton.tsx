import React from "react";

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
}

const Skeleton = ({
  className = "",
  width = "100%",
  height = "1rem",
  rounded = true,
}: SkeletonProps) => {
  const radius = rounded ? "rounded-md" : "";
  const style: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-slate-700 ${radius} ${className}`}
      style={style}
      aria-hidden
    />
  );
};

export default Skeleton;
