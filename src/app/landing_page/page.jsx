"use client";

import dynamic from "next/dynamic";
import Footer from "../../components/footer";
import IPhoneScrollAnimation from "../../components/IPhoneScrollAnimation";
import ProductSection10 from "../../components/ProductSection10";



const Navbar = dynamic(
	() =>
		import("../../components/navbar").then((mod) => {
			return mod.default || mod.Navbar || mod;
		}),
	{ ssr: false }
);

export default function LandingPage() {
	return (
		<main className="min-h-screen relative bg-white text-black flex flex-col">
			<Navbar />

			<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
				<video
					className="absolute inset-0 w-full h-full object-cover z-0"
					src="/media/New_Batch_Video_Desktop.mp4"
					autoPlay
					muted
					loop
					playsInline
					aria-hidden="true"
				/>
			</section>
			<IPhoneScrollAnimation />
			<Footer />



		</main>
	);
}
