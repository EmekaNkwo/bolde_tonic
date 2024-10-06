"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/about");
  }, [router]);
  return (
    <div className="">
      <h1>Home</h1>
    </div>
  );
}
