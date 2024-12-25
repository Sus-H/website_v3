import React from "react";

const scrollingBannerStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  position: "relative" as "relative",
};

const scrollingBannerContentStyle = {
  display: "inline-block",
  animation: "scroll 20s linear infinite",
  whiteSpace: "nowrap",
};

const keyframes = `
  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-40%);
    }
  }
`;

export function SideScrollingBanner() {
  return (
    <div style={scrollingBannerStyle} className="py-2">
      <style>{keyframes}</style>
      <div style={scrollingBannerContentStyle} className="text-6xl font-inter font-extralightlight italic text-black">
        <span className="inline-block px-4">UX</span>
        <span className="inline-block px-4">USABILITY</span>
        <span className="inline-block pl-4 pr-1">PRODUCT</span>
        <span className="inline-block pr-4 pl-1">DEVELOPMENT</span>
        <span className="inline-block pl-4 pr-1">INTERACTION</span>
        <span className="inline-block pr-4 pl-1">DESIGN</span>
        <span className="inline-block px-4">UX</span>
        <span className="inline-block px-4">USABILITY</span>
        <span className="inline-block pl-4 pr-1">PRODUCT</span>
        <span className="inline-block pr-4 pl-1">DEVELOPMENT</span>
        <span className="inline-block pl-4 pr-1">INTERACTION</span>
        <span className="inline-block pr-4 pl-1">DESIGN</span>
        
      </div>
      <div style={scrollingBannerContentStyle} className="text-6xl font-inter font-extralight italic text-black">
        <span className="inline-block px-4">UX</span>
        <span className="inline-block px-4">USABILITY</span>
        <span className="inline-block pl-4 pr-1">PRODUCT</span>
        <span className="inline-block pr-4 pl-1">DEVELOPMENT</span>
        <span className="inline-block pl-4 pr-1">INTERACTION</span>
        <span className="inline-block pr-4 pl-1">DESIGN</span>
        <span className="inline-block px-4">UX</span>
        <span className="inline-block px-4">USABILITY</span>
        <span className="inline-block pl-4 pr-1">PRODUCT</span>
        <span className="inline-block pr-4 pl-1">DEVELOPMENT</span>
        <span className="inline-block pl-4 pr-1">INTERACTION</span>
        <span className="inline-block pr-4 pl-1">DESIGN</span>
      </div>
    </div>
  );
}