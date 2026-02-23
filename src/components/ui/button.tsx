import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "arrow" | "outline" | "default";
};

const ArrowIcon = () => (
  <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-dark-green transition-[width] group-hover:w-[calc(100%-8px)]">
    <div className="mr-3.5 flex items-center justify-center">
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-5 w-5 text-neutral-50">
        <path
          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
);

const variantConfig = {
  default: {
    className: "h-12 px-6 rounded-full bg-primary text-white hover:bg-primary/90",
    inner: (children: React.ReactNode) => <>{children}</>,
  },
  outline: {
    className: "h-12 px-6 rounded-full border border-secondary text-secondary hover:bg-secondary hover:text-primary",
    inner: (children: React.ReactNode) => <>{children}</>,
  },
  arrow: {
    className: "h-[calc(48px+8px)] pl-6 pr-14 rounded-full border border-secondary text-secondary",
    inner: (children: React.ReactNode) => (
      <>
        <span className="z-10 pr-2">{children}</span>
        <ArrowIcon />
      </>
    ),
  },
};

export function Button({
  variant = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const { className: variantClass, inner } = variantConfig[variant];

  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center font-medium transition-colors wait",
        variantClass,
        className
      )}
      {...props}
    >
      {inner(children)}
    </button>
  );
}