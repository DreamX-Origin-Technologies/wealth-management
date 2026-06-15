import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode[];
  interval?: number;
};

export default function MotionCarousel({ children, interval = 4500 }: Props) {
  const [index, setIndex] = useState(0);
  const count = React.Children.count(children);

  useEffect(() => {
    if (count <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(t);
  }, [count, interval]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {React.Children.map(children, (child) => (
            <div className="w-full flex-shrink-0 px-2">{child}</div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 rounded-full ${i === index ? "bg-foreground" : "bg-border/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
