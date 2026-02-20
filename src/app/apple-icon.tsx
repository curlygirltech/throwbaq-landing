import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const syne = await fetch(
    "https://fonts.gstatic.com/s/syne/v24/8vIS7w4qzmVxsWxjBZRjr0FKM_24vj6k.ttf"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          backgroundColor: "#49261D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Syne",
            color: "#FB4D00",
            fontSize: 90,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          tb
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Syne",
          data: syne,
          weight: 800,
          style: "normal",
        },
      ],
    }
  );
}
