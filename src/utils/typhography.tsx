export function TypographyH1({ children, classNames }: { children: React.ReactNode, classNames?: string }) {
  return (
    <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${classNames}`}>
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

export function TypographyH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

export function TypographyP({ children, classNames }: { children: React.ReactNode, classNames?: string}) {
  return (
      <p className={`leading-7 [&:not(:first-child)]:mt-6 ${classNames}`}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {children}
    </blockquote>
  );
}