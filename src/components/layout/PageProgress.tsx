"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PageProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setVisible(true);
    setWidth(70);
    const done = setTimeout(() => {
      setWidth(100);
      const hide = setTimeout(() => {
        setVisible(false);
        setWidth(0);
      }, 250);
      return () => clearTimeout(hide);
    }, 180);
    return () => clearTimeout(done);
  }, [pathname]);

  return (
    <div
      className={`page-progress${visible ? " is-visible" : ""}`}
      style={{ width: `${width}%` }}
      aria-hidden="true"
    />
  );
}
