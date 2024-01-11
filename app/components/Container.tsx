import React from "react";
import { twMerge } from "tailwind-merge";

const Container = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={twMerge("container mx-auto", className)} {...props} />;
};

export default Container;
