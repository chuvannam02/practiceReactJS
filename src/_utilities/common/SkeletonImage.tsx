import { useState } from "react";

interface SkeletonImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

import "./SkeletonImage.scss";

export default function SkeletonImage({
  src,
  alt = "",
  width = 200,
  height = 200,
}: SkeletonImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        overflow: "hidden",
        borderRadius: "8px",
      }}
    >
      {!loaded && (
        <div
          className="skeleton"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%)",
            backgroundSize: "400% 100%",
            animation: "shimmer 1.2s ease-in-out infinite",
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: loaded ? "block" : "none",
        }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
