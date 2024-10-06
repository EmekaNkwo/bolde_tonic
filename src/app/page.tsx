"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/about");
  }, [router]);
  return (
    <div className="text-center p-5">
      <h1>Redirecting...</h1>
    </div>
  );
}
