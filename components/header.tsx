import localFont from 'next/font/local'

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

  return (
    <header className="bg-black text-white">
      <div className="mx-auto w-[90%] max-w-5xl flex items-center justify-end py-8">
        {/* <h1 className={`${Helvetica.className} uppercase font-bold text-xl`}>Tiago S. C.</h1> */}
        <div className="flex items-center justify-center flex-row flex-wrap w-fit gap-2">
          <a
            href="#sobremim"
            className="py-2 font-semibold text-xs md:text-sm hover:opacity-50 transition-all duration-300"
          >
            About me
          </a>
          <a
            href="#habilidades"
            className="py-2 font-semibold text-xs md:text-sm hover:opacity-50 transition-all duration-300"
          >
            Skills
          </a>
          <a
            href="#educacao"
            className="py-2 font-semibold text-xs md:text-sm hover:opacity-50 transition-all duration-300"
          >
            Education
          </a>

        </div>
      </div>
    </header>
  )

}