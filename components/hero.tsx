import Image from 'next/image'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { BiLogoGmail, BiLogoNodejs, BiLogoReact } from 'react-icons/bi'
import { SiPrisma } from 'react-icons/si'
import { HiOutlineDownload } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-[90%] max-w-5xl flex items-center gap-8 py-8">
        <div className="flex items-center gap-6">
          <div className="flex flex-col gap-4 text-2xl"> {/* main techs */}
            <BiLogoNodejs className="border border-white rounded-[50%] p-2 w-16 h-16" />
            <BiLogoReact className="border border-white rounded-[50%] p-2 w-16 h-16" />
            <SiPrisma className="border border-white rounded-[50%] p-2 w-16 h-16" />
          </div>
          <Image className="rounded-[50%]" src="/profile-image.png" alt="Foto do profissional" width={200} height={200} />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Tiago S. C.</h1>
          <h3 className="text-2xl font-bold">Dev Fullstack</h3>
          <div className="flex items-center gap-4  text-2xl">
            <a href="https://github.com/Tiago-Silverio-da-Costa" target="_blank">
              <BsGithub /> {/* github */}
            </a>
            <a href="https://www.linkedin.com/in/tiagosc/" target="_blank">
              <BsLinkedin /> {/* linkdien */}
            </a>
            <a href="https://wa.me/5511982391118" target="_blank">
              <BsWhatsapp /> {/* whats */}
            </a>
            <a href="mailto:tiagosilveriodacosta@gmaill.com" target="_blank">
              <BiLogoGmail /> {/* email */}
            </a>
            <a className="flex items-center gap-2 border border-white rounded-3xl py-2 px-4 text-lg cursor-pointer" href="/curriculum" download={"tiagosc-curriculum.pdf"}>
              <HiOutlineDownload /> {/* download curriculum */}
              <p className="text-lg font-bold upper">
                Curriculum
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}