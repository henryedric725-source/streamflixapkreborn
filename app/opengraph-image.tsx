import { ImageResponse } from "next/og";
import { REBORN, V2 } from "@/lib/variants";

export const alt = "StreamFlix APK Download";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#FFFFFF",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#E8112D",
          }}
        >
          Android package documentation
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 700 }}>
            StreamFlix APK
          </div>
          {/* Single text child: satchel/ImageResponse requires explicit display
              on any element with more than one child node. */}
          <div style={{ marginTop: 18, fontSize: 30, color: "#A1A1A6" }}>
            {`Reborn v${REBORN.version}  ·  StreamFlix 2.0 build ${V2.version}`}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#6B6B73" }}>
          Two different apps, documented separately. Not a Play Store listing.
        </div>
      </div>
    ),
    { ...size },
  );
}
