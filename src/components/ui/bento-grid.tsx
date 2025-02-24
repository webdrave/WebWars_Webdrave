import { cn } from "@/lib/utils";

import React from "react";
interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col p-4 bento-grid",
        className
      )}
    >
      {/* Header (no spacing applied here) */}
      {header}

      {/* Conditional spacing for title, description, and icon */}
      {(title || description || icon) && (
        <div className="space-y-4 group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          {title && (
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-xl">
              {title}
            </div>
          )}
          {description && (
            <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
              {description}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
