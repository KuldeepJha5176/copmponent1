import React from "react";
import {cn} from "../lib/utils";
const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative mx-auto h-full w-full max-w-4xl  bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
