import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  id?: string;
}

export default function Layout({ children, id }: LayoutProps) {
  return (
    <section id={id} className="h-[2000px] w-full">
      {children}
    </section>
  );
}
