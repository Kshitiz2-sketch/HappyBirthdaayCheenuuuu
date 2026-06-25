import { useEffect, useState } from "react";

export default function ResponsiveLayout({ children }) {
  const [mobile, setMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const resize = () => setMobile(window.innerWidth < 768);

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div
      className={`
        min-h-screen
        w-full
        overflow-x-hidden
        ${mobile ? "px-4 py-4" : "px-12 py-10"}
      `}
    >
      {children}
    </div>
  );
}