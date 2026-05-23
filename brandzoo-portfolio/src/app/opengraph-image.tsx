import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Amit Rai - Digital Marketing Specialist, Website Developer, and CEO of Brandzoo Media";
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
          padding: 72,
          color: "white",
          background:
            "radial-gradient(circle at 78% 28%, rgba(67,217,255,0.42), transparent 36%), radial-gradient(circle at 22% 78%, rgba(167,249,80,0.22), transparent 32%), #05070B",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              border: "1px solid rgba(67,217,255,0.5)",
              background: "rgba(67,217,255,0.10)",
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
            <span style={{ fontSize: 28, fontWeight: 700 }}>Amit Rai</span>
            <span style={{ fontSize: 18, color: "rgba(255,255,255,0.62)" }}>
              Founder & CEO · Brandzoo Media
            </span>
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 16px",
              borderRadius: 10,
              border: "1px solid rgba(167,249,80,0.35)",
              background: "rgba(167,249,80,0.12)",
              color: "#D6F8A6",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "#A7F950",
              }}
            />
            Available · Booking 2026
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: -2,
              maxWidth: 1060,
            }}
          >
            Performance Marketing & High-Converting Websites for Brands Ready to
            Scale.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 24,
              color: "#A7F3FF",
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <span>Meta Ads</span>
            <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
            <span>Google Ads</span>
            <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
            <span>SEO & AI</span>
            <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
            <span>Lead Generation</span>
            <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
            <span>Website Development</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "rgba(255,255,255,0.62)",
          }}
        >
          <span>brandzoomedia.in</span>
          <span>+91 99105 50679 · brandzoomediaagency@gmail.com</span>
        </div>
      </div>
    ),
    size,
  );
}
