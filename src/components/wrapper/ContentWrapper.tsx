import React, { ReactHTMLElement, ReactNode } from "react";

function ContentWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className: StylePropertyMap | string;
}) {
  return (
    <div className={`min-h-[300px] w-full px-10 lg:px-20 py-16 ${className}`}>
      {children}
    </div>
  );
}

export default ContentWrapper;
