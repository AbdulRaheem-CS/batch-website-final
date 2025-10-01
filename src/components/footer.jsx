"use client";

import React from "react";

const ArrowRightIcon = () => (
    <img src="/images/landing_page/arrow.png" alt="arrow" className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 group-hover:invert transition-all" />
);



export default function Footer() {
    return (
        <footer className="w-full bg-black text-white">
            <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">
                <div className="w-full">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-snug max-w-full">
                        We turn products into experience-driven gateways, seamlessly merging
                        physical and digital touchpoints while protecting against counterfeits.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mt-8">
                    <div className="lg:col-span-1">
                        <nav className="mt-4 md:mt-8">
                            <ul className="space-y-4 text-sm md:text-base">
                                {[
                                    "HOME",
                                    "ABOUT",
                                    "WHY",
                                    "HOW",
                                    "IGNITE",
                                    "CONTACT",
                                ].map((item) => (
                                    <li key={item} className="group flex items-center justify-between border-b border-white/20 pb-4 pt-1 px-3 transition-colors hover:shadow-sm hover:bg-white">
                                        <a href="#" className="uppercase tracking-wide font-normal text-lg text-white/90 transition-colors group-hover:text-black">
                                            {item}
                                        </a>
                                        <ArrowRightIcon />
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="mt-12 text-xs text-white/50 font-light">© 2025 EDTN inc. All Rights Reserved</div>
                    </div>

                    <div className="lg:col-span-1 flex flex-col items-start lg:items-end mt-12 lg:mt-0">
                        <div className="flex items-center gap-6 mb-16 md:mb-20">
                            <a href="#" aria-label="Instagram">
                                <img src="/images/landing_page/Instagram.png" alt="Instagram" className="w-8 h-8 object-contain" />
                            </a>

                            <a href="#" aria-label="Facebook">
                                <img src="/images/landing_page/Facebook.png" alt="Facebook" className="w-8 h-8 object-contain" />
                            </a>

                            <a href="#" aria-label="X">
                                <img src="/images/landing_page/X.png" alt="X" className="w-8 h-8 object-contain" />
                            </a>
                        </div>

                        <div className="text-left mb-12">
                            <ul className="space-y-3 text-lg font-normal">
                                {[
                                    ["Los Angeles", "#"],
                                    ["San Francisco", "#"],
                                    ["Mumbai", "#"],
                                ].map(([city, href]) => (
                                    <li key={city}>
                                        <a href={href} className="text-white/90 hover:text-white transition-colors">
                                            {city}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-left">
                            <div className="text-sm text-white/70 font-light mb-2">Say Hello</div>
                            <a href="mailto:hello@batchsys.com" className="text-lg font-normal inline-block hover:text-white transition-colors">
                                hello@batchsys.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}