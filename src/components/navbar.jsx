"use client";

import React, { useState } from "react";

function Navbar() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<nav className="w-full ml-10 mt-3 mb-3 fixed top-0 left-0 h-20 px-8 box-border z-50">
			<div className="max-w-[1400px] h-20 mx-auto flex items-center justify-between gap-6">
				<img
					src="/images/nav/Volume%20Icon.png"
					alt="Volume Icon"
					className="h-14 w-auto block"
				/>

				<div
					className="relative flex items-center justify-center"
					onMouseEnter={() => setIsExpanded(true)}
					onMouseLeave={() => setIsExpanded(false)}
				>
					<div
						className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${isExpanded
							? "w-[600px] bg-gray-100/80 backdrop-blur-sm rounded-full py-3"
							: "w-16 bg-transparent"
							} -translate-x-1/2 left-1/2`}
					>
						<div
							className={`flex items-center justify-end gap-6 pr-12 transition-all duration-300 delay-100 ${isExpanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
								}`}
						>
							<a href="#" className="text-gray-800 hover:text-black text-sm font-medium whitespace-nowrap">
								HOME
							</a>
							<a href="#" className="text-gray-800 hover:text-black text-sm font-medium whitespace-nowrap">
								ABOUT
							</a>
							<a href="#" className="text-gray-800 hover:text-black text-sm font-medium whitespace-nowrap">
								WHY
							</a>
						</div>

						<div className="w-16 h-16"></div>

						<div
							className={`flex items-center justify-start gap-6 pl-12 transition-all duration-300 delay-100 ${isExpanded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
								}`}
						>
							<a href="#" className="text-gray-800 hover:text-black text-sm font-medium whitespace-nowrap">
								HOW
							</a>
							<a href="#" className="text-gray-800 hover:text-black text-sm font-medium whitespace-nowrap">
								IGNITE
							</a>
							<a href="#" className="text-gray-800 hover:text-black text-sm font-medium whitespace-nowrap">
								CONTACT
							</a>
						</div>
					</div>

					<img
						src="/images/nav/Sticky%20Bar.svg"
						alt="Sticky Bar"
						className={`h-16 w-auto block relative z-20 transition-all duration-300 ${isExpanded ? "invert" : ""
							}`}
					/>
				</div>

				<div
					className="h-12 w-40 flex items-center justify-center bg-no-repeat bg-center bg-contain text-base font-medium hover:opacity-90"
					style={{ backgroundImage: 'url("/images/nav/Rectangle%202.png")' }}
				>
					<span className="text-gray-100 mr-3">Let&apos;s Talk</span>
					<img src="/icons/arrow.svg" alt="arrow" className="w-5 h-5" />
				</div>
			</div>
		</nav>
	);
}

export { Navbar };
export default Navbar;
