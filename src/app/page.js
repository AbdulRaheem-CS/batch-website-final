import { redirect } from "next/navigation";

export default function Home() {
  // Redirect root to the landing_page route where the 3D scene lives
  redirect("/landing_page");
}
