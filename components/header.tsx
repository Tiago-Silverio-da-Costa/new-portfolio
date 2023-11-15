"use client";

import localFont from 'next/font/local'
import { useState } from 'react';

const Helvetica = localFont({
  src: [
    {
      path: "../public/fonts/FreeSans.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/FreeSansBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function Header() {
  const [lang, setLang] = useState("en");

  return (
    <header className="bg-black text-white">
      <div className="mx-auto w-[90%] max-w-5xl flex items-center justify-end py-8">
        <div className="flex items-center space-x-4">

          <button
            className="font-bold text-xl"
            onClick={() => {
              if (lang === "en") {
                setLang("pt_br");
              } else {
                setLang("en");
              }
            }}
          >
            {lang}
          </button>
        </div>
      </div>
    </header>
  )

}