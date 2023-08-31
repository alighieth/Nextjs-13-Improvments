"use client";

import { saveToken } from "@/utils/server-acitions";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  async function login() {
    await saveToken();
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        className="rounded bg-purple-400 w-[10vw] h-[2rem]"
        onClick={login}
      >
        Login
      </button>
    </main>
  );
}
