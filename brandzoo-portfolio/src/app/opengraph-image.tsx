import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Amit Rai Brandzoo Media performance marketing portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          color: "white",
          background:
            "radial-gradient(circle at 78% 28%, rgba(67,217,255,0.36), transparent 34%), radial-gradient(circle at 28% 72%, rgba(167,249,80,0.18), transparent 30%), #05070B",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 10,
              border: "1px solid rgba(67,217,255,0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#A7F3FF",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            BZ
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 26, fontWeight: 700 }}>Amit Rai</span>
            <span style={{ fontSize: 18, color: "rgba(255,255,255,0.58)" }}>
              Brandzoo Media
            </span>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 64, lineHeight: 0.98, fontWeight: 800, letterSpacing: -2 }}>
            Helping Brands Scale With Performance Marketing & Data-Driven Growth
          </div>
          <div style={{ marginTop: 28, fontSize: 26, color: "#A7F3FF" }}>
            Meta Ads | Google Ads | SEO | Lead Generation | Funnels
          </div>
        </div>
      </div>
    ),
    size,
  );
}
