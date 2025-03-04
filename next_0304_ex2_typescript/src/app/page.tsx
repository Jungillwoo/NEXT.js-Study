"use client";
import { useState } from "react";

export default function Home() {

  let title: string = "제목1";
  const [sub, setSub] = useState<string>("부 제목1");
  let title2: string = "sub_title";

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="title">{title}</h1>
      <h2 className={title2}>{sub}</h2>
    </div>
  );
}
