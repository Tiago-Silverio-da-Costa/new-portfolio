import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoCss3, BiLogoGraphql, BiLogoPostgresql, BiLogoPython, BiLogoTailwindCss, BiLogoVuejs } from 'react-icons/bi'
import { DiJavascript1 } from 'react-icons/di'
import { FaAngular, FaNodeJs, FaReact } from 'react-icons/fa6'
import { SiMysql, SiPrisma, SiRubyonrails } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { GrJava } from 'react-icons/gr'
import { GiBrazilFlag } from 'react-icons/gi'
import { LiaFlagUsaSolid } from 'react-icons/lia'

export default function Skills() {

  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-[90%] max-w-5xl py-16">
        <h1 className="text-4xl font-bold">
          Skills
        </h1>
        <div className="mt-4">
          <h1 className="text-2xl font-bold">
            Technologies
          </h1>

          <div className="flex items-start gap-10">
            <div className="border-r border-gray-500 pr-16 h-96">
              <h2 className="pl-4 text-xl font-bold mt-4">I have experience</h2>
              <div className="pl-8 flex flex-col gap-6">
                <div className="flex flex-col gap-8">
                  <h3 className="text-lg font-bold mt-4">Frontend</h3>
                  <div className="flex items-center relative">
                    <div className="z-0 absolute left-0 bg-[#e44d26] p-2 w-fit text-5xl rounded-lg">
                      <AiFillHtml5 />
                    </div>
                    <div className="z-10 absolute left-8 ease-in-out bg-[#1572b6] p-2 w-fit text-5xl rounded-lg">
                      <BiLogoCss3 />
                    </div>
                    <div className="z-20 absolute left-16 ease-in-out bg-white p-2 w-fit text-5xl rounded-lg text-black">
                      <BiLogoTailwindCss />
                    </div>
                    <div className="z-30 absolute left-24 ease-in-out bg-[#ffdf00] p-2 w-fit text-5xl rounded-lg text-black">
                      <DiJavascript1 />
                    </div>
                    <div className="z-40 absolute left-32 ease-in-out bg-[#61dafb] p-2 w-fit text-5xl rounded-lg">
                      <FaReact />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <h3 className="text-lg font-bold mt-4">Backend</h3>
                  <div className="flex items-center relative">
                    <div className="z-0 absolute left-0 bg-white p-2 w-fit text-5xl rounded-lg text-black">
                      <BiLogoPostgresql />
                    </div>
                    <div className="z-10 absolute left-8 bg-[#0c344b] p-2 w-fit text-5xl rounded-lg">
                      <SiPrisma />
                    </div>
                    <div className="z-20 absolute left-16 bg-[#4479a1] p-2 w-fit text-5xl rounded-lg">
                      <SiMysql />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-r border-gray-500 pr-16 h-96">
              <h2 className="pl-4 text-xl font-bold mt-4">Basic knowledge</h2>
              <div className="pl-8 flex flex-col gap-6">
                <div className="flex flex-col gap-8">
                  <h3 className="text-lg font-bold mt-4">Backend</h3>
                  <div className="flex items-center relative">
                    <div className="z-0 absolute left-0 bg-[#90c640] p-2 w-fit text-5xl rounded-lg">
                      <FaNodeJs />
                    </div>
                    <div className="z-10 absolute left-8 bg-[#ffc007] p-2 w-fit text-5xl rounded-lg text-black">
                      <BiLogoPython />
                    </div>
                    <div className="z-20 absolute left-16 bg-[#f44336] p-2 w-fit text-5xl rounded-lg fill-white">
                      <GrJava />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-r border-gray-500 pr-24 h-96">
              <h2 className="pl-4 text-xl font-bold mt-4">Studying</h2>
              <div className="pl-8 flex flex-col gap-6">
                <div className="flex flex-col gap-8">
                  <h3 className="text-lg font-bold mt-4">Backend</h3>
                  <div className="flex items-center relative">
                    <div className="z-0 absolute left-0 bg-white text-black p-2 w-fit text-5xl rounded-lg">
                      <TbBrandNextjs />
                    </div>
                    <div className="z-10 absolute left-8 bg-[#90c640] p-2 w-fit text-5xl rounded-lg">
                      <FaNodeJs />
                    </div>
                    <div className="z-10 absolute left-16 bg-[#0c344b] p-2 w-fit text-5xl rounded-lg">
                      <SiPrisma />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="pl-4 text-xl font-bold mt-4">I am interested</h2>
              <div className="pl-8 flex flex-col gap-6">
                <div className="flex flex-col gap-8">
                  <h3 className="text-lg font-bold mt-4">Frontend</h3>
                  <div className="flex items-center relative">
                    <div className="z-0 absolute left-0 ease-in-out bg-white text-black p-2 w-fit text-5xl rounded-lg">
                      <BiLogoVuejs />
                    </div>
                    <div className="z-10 absolute left-8 bg-[#e53935] p-2 w-fit text-5xl rounded-lg">
                      <FaAngular />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <h3 className="text-lg font-bold mt-4">Backend</h3>
                  <div className="flex items-center relative">
                    <div className="z-0 absolute left-0 bg-[#cc0000] p-2 w-fit text-5xl rounded-lg ">
                      <SiRubyonrails />
                    </div>
                    <div className="z-10 absolute left-8 bg-[#f44336] p-2 w-fit text-5xl rounded-lg fill-white">
                      <GrJava />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex flex-col gap-8">
                    <h3 className="text-lg font-bold mt-4">Both</h3>
                    <div className="flex items-center relative">
                      <div className="z-0 absolute left-0 bg-[#e535ab] p-2 w-fit text-5xl rounded-lg fill-white">
                        <BiLogoGraphql />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8">
                    <h3 className="text-lg font-bold mt-4">Pandas</h3>
                    <div className="flex items-center relative">
                      <div className="z-0 absolute left-0 bg-[#ffc007] p-2 w-fit text-5xl rounded-lg text-black">
                        <BiLogoPython />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8">
            <h1 className="text-2xl font-bold">
              Languages
            </h1>
            <div className="flex items-center gap-2 text-2xl mt-4">
              <GiBrazilFlag />
              <p className="text-lg">Portuguese(Brazil) - native</p>
            </div>
            <div className="flex items-center gap-2 text-2xl mt-4">
              <LiaFlagUsaSolid />
              <p className="text-lg">English - advanced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}