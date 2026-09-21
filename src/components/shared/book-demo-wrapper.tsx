"use client";

import { BookDemoProvider } from "@/components/shared/book-demo-modal";
import { useBookDemo } from "@/components/shared/book-demo-modal";
import { useEffect } from "react";

function BookDemoTrigger() {
  const { open } = useBookDemo();

  // Intercept all clicks on elements with [data-book-demo] attribute
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-book-demo]");
      if (target) {
        e.preventDefault();
        open();
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [open]);

  return null;
}

export function BookDemoWrapper({ children }: { children: React.ReactNode }) {
  return (
    <BookDemoProvider>
      <BookDemoTrigger />
      {children}
    </BookDemoProvider>
  );
}
