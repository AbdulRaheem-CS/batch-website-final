"use client";

import React, { useState } from "react";
import BlurryRingAnimation from "./BlurryRingAnimation";

const tabs = [
  {
    id: "ami",
    label: "Ami",
    logo: "/images/landing_page/amiNav.png",
    title: "A New Way to\nConnect with AMI Brandy",
    subtitle: "Discover provenance and reward the true fans.",
    image: "/images/landing_page/ami.png",
    quote:
      "Every bottle of Ami Brandy tells a story—Batch helps make sure it’s the real one. Our people deserve to know what they’re sipping is truly ours.",
    author: "NickNack PattiWhack",
    role: "Founder",
  },
  {
    id: "bigchief",
    label: "BigChief",
    logo: "/images/landing_page/bigChiefNav.png",
    title: "Power On. Tap Into Big Chief.",
    subtitle: "Add scarcity and trust with instant verification.",
    image: "/images/landing_page/navCap.png",
    quote:
      "Chief built its name through relentless dedication to quality, purity and timeless innovation. As the brand was growing, counterfeits were eroding our principles and stealing our connection to real customers. Every fake product sold was a lost opportunity to build trust and loyalty. Batch changed everything. Their platform gave us the power to eliminate fakes at the source, authenticate every product, and directly engage and reward the consumers who truly matter—igniting an innovative engine of trust and loyalty.",
    author: "Muhammad Khan",
    role: "CEO",
  },
  {
    id: "diamond",
    label: "Diamond",
    logo: "/images/landing_page/diamondNav.png",
    title: "A New Way to Connect with Diamond",
    subtitle: "Deliver rewards and content that feel like magic.",
    image: "/images/landing_page/diamond.png",
    quote: "When someone buys Diamond, they are not just buying a piece—they are buying into the culture. Batch makes sure our customers know they are getting the real thing. No fakes, no question. Just legit Diamond Supply Co. product.",
    author: "Nick Tershay",
    role: "Founder",
  },
];

export default function ProductSection10() {
  const [active, setActive] = useState(0);
  const t = tabs[active];

  return (
    <section className="w-full flex items-center justify-center min-h-screen bg-white">
      <div className="w-full px-6">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center rounded-full bg-white border border-cyan-50 shadow-sm px-4 py-2 gap-6">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`flex items-center justify-center w-30 h-8 rounded-full transition-transform duration-150 ${i === active ? "bg-teal-700/80 shadow-lg scale-126" : "hover:scale-105"
                  }`}
                title={tab.label}
              >
                <img src={tab.logo} alt={tab.label} className="w-13 h-13 object-contain" />
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border-2 border-cyan-50 p-8 bg-gray-50 mx-auto w-[95vw] max-w-[1200px] h-[72vh]">
          <div
            className="grid items-center gap-6 h-full"
            style={{ gridTemplateColumns: "260px 1fr 260px" }}
          >
            <div className="px-3 h-full overflow-auto flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight whitespace-pre-line">
                {t.title}
              </h3>
              <p className="mt-4 text-lg text-slate-600">{t.subtitle}</p>
            </div>

            <div className="flex items-center justify-center h-full">
              <div className="relative w-full h-full flex items-center justify-center">
                <BlurryRingAnimation>
                  <img
                    src={t.image}
                    alt={t.label}
                    className="max-h-[40vh] max-w-full object-contain mx-auto"
                  />
                </BlurryRingAnimation>
              </div>
            </div>

            <div className="px-2 text-left h-full flex flex-col justify-center">
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <div className="">
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
