import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "performance", label: "Performance" },
  { id: "security", label: "Security" },
  { id: "control", label: "Control & Management" },
  { id: "hosting", label: "Hosting Essentials" },
];

const generateLongText = (repeat: number) =>
  Array.from({ length: repeat })
    .map(
      () =>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada."
    )
    .join(" ");

export default function ScrollSpyDemo() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      root: contentRef.current, // quan sát trong container cuộn
      rootMargin: "0px 0px -60% 0px",
      threshold: 0.2,
    });

    sections.forEach((section) => {
      const el = contentRef.current?.querySelector<HTMLElement>(
        `#${section.id}`
      );
      if (el) observer.current?.observe(el);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar cố định */}
      <div
        style={{
          width: "220px",
          padding: "20px",
          borderRight: "1px solid #ddd",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              const el = contentRef.current?.querySelector<HTMLElement>(
                `#${s.id}`
              );
              if (el) {
                contentRef.current?.scrollTo({
                  top: el.offsetTop - (contentRef.current?.offsetTop || 0),
                  behavior: "smooth",
                });
              }
            }}
            style={{
              display: "block",
              width: "100%",
              padding: "10px 14px",
              marginBottom: "10px",
              borderRadius: "6px",
              background: activeId === s.id ? "#4f46e5" : "#f3f4f6",
              color: activeId === s.id ? "#fff" : "#111",
              fontWeight: activeId === s.id ? "bold" : "normal",
              border: "none",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Nội dung cuộn trong phạm vi riêng */}
      <div
        ref={contentRef}
        style={{
          flex: 1,
          overflowY: "auto",
          height: "100vh",
          padding: "1rem",
        }}
      >
        {sections.map((s) => (
          <section
            id={s.id}
            key={s.id}
            style={{
              minHeight: "100vh",
              marginBottom: "4rem",
              padding: "2rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#fff",
            }}
          >
            <h2>{s.label}</h2>
            <p>{generateLongText(40)}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
