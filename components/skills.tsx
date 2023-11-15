"use client";

import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoCss3, BiLogoGraphql, BiLogoPostgresql, BiLogoPython, BiLogoTailwindCss, BiLogoVuejs } from 'react-icons/bi'
import { DiJavascript1 } from 'react-icons/di'
import { FaAngular, FaNodeJs, FaReact } from 'react-icons/fa6'
import { SiMysql, SiPrisma, SiRubyonrails } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { GrJava } from 'react-icons/gr'
import { GiBrazilFlag } from 'react-icons/gi'
import { LiaFlagUsaSolid } from 'react-icons/lia'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { dictionaries } from '../app/[lang]/dictionaries';

interface TippyContentProps {
  tooltip?: string;
  color?: string;
  zIndex?: string;
  abosulteLeftPosition?: string;
  textColor?: string;
  icon?: React.ReactNode;
}

interface TippyItemsProps {
  frontendExp: TippyContentProps[];
  backendExp: TippyContentProps[];
  backendBasic: TippyContentProps[];
  backendStudy: TippyContentProps[];
  frontendInterest: TippyContentProps[];
  backendInterest: TippyContentProps[];
  bothInterest: TippyContentProps[];
  dataInterest: TippyContentProps[];
}

export const SkillsCard = ({
  frontendExp,
  backendExp,
  backendBasic,
  backendStudy,
  frontendInterest,
  backendInterest,
  bothInterest,
  dataInterest,
}: TippyItemsProps) => {

  const dict = dictionaries
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-[90%] max-w-5xl py-16">
        <h1 className="text-4xl font-bold">
          {dict.en.skills.title}
        </h1>
        <div className="mt-4">
          <h1 className="text-2xl font-bold">
          {dict.en.skills.subtitle}
          </h1>

          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="w-64 h-80">
              <h2 className="pl-4 text-xl font-bold mt-4">I have experience</h2>
              <div className="pl-8 flex flex-col gap-6">
                <div className="flex flex-col gap-8">
                  <h3 className="text-lg font-bold mt-4">Frontend</h3>
                  <div className="flex items-center relative">
                    {frontendExp.map((frontExp, index) => (
                      <Tippy content={frontExp.tooltip} maxWidth={270} key={index.toString()}>
                        <div className={`hover:-translate-y-4	hover:z-50 transition-transform duration-300 ${`z-[` + frontExp.zIndex + `]`}  ${`left-` + frontExp.abosulteLeftPosition} ${`bg-[` + frontExp.color + `]`} ${frontExp.textColor} absolute p-2 w-fit text-5xl rounded-lg`}>
                          {frontExp.icon}
                        </div>
                      </Tippy>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <h3 className="text-lg font-bold mt-4">Backend</h3>
                  <div className="flex items-center relative">
                    {backendExp.map((backExp, index) => (
                      <Tippy content={backExp.tooltip} maxWidth={270} key={index.toString()}>
                        <div className={`hover:-translate-y-4	hover:z-50 transition-transform duration-300 ${`z-[` + backExp.zIndex + `]`}  ${`left-` + backExp.abosulteLeftPosition} ${`bg-[` + backExp.color + `]`} ${backExp.textColor} absolute p-2 w-fit text-5xl rounded-lg`}>
                          {backExp.icon}
                        </div>
                      </Tippy>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-64 h-64">
              <h2 className="pl-4 text-xl font-bold mt-4">Basic knowledge</h2>
              <div className="pl-8 flex flex-col gap-6">
                <div className="flex flex-col gap-8">
                  <h3 className="text-lg font-bold mt-4">Backend</h3>
                  <div className="flex items-center relative">
                    {backendBasic.map((backBasic, index) => (
                      <Tippy content={backBasic.tooltip} maxWidth={270} key={index.toString()}>
                        <div className={`hover:-translate-y-4	hover:z-50 transition-transform duration-300 ${`z-[` + backBasic.zIndex + `]`}  ${`left-` + backBasic.abosulteLeftPosition} ${`bg-[` + backBasic.color + `]`} ${backBasic.textColor} absolute p-2 w-fit text-5xl rounded-lg`}>
                          {backBasic.icon}
                        </div>
                      </Tippy>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-64 h-64">
              <h2 className="pl-4 text-xl font-bold mt-4">I&apos;m learning</h2>
              <div className="pl-8 flex flex-col gap-6">
                <div className="flex flex-col gap-8">
                  <h3 className="text-lg font-bold mt-4">Backend</h3>
                  <div className="flex items-center relative">
                    {backendStudy.map((backStudy, index) => (
                      <Tippy content={backStudy.tooltip} maxWidth={270} key={index.toString()}>
                        <div className={`hover:-translate-y-4	hover:z-50 transition-transform duration-300 ${`z-[` + backStudy.zIndex + `]`}  ${`left-` + backStudy.abosulteLeftPosition} ${`bg-[` + backStudy.color + `]`} ${backStudy.textColor} absolute p-2 w-fit text-5xl rounded-lg`}>
                          {backStudy.icon}
                        </div>
                      </Tippy>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-64 h-[28rem]">
              <h2 className="pl-4 text-xl font-bold mt-4">I want to learn</h2>
              <div className="pl-8 flex flex-col gap-6">
                <div className="flex flex-col gap-8">
                  <h3 className="text-lg font-bold mt-4">Frontend</h3>
                  <div className="flex items-center relative">
                    {frontendInterest.map((frontInt, index) => (
                      <Tippy content={frontInt.tooltip} maxWidth={270} key={index.toString()}>
                        <div className={`hover:-translate-y-4	hover:z-50 transition-transform duration-300 ${`z-[` + frontInt.zIndex + `]`}  ${`left-` + frontInt.abosulteLeftPosition} ${`bg-[` + frontInt.color + `]`} ${frontInt.textColor} absolute p-2 w-fit text-5xl rounded-lg`}>
                          {frontInt.icon}
                        </div>
                      </Tippy>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <h3 className="text-lg font-bold mt-4">Backend</h3>
                  <div className="flex items-center relative">
                    {backendInterest.map((backInt, index) => (
                      <Tippy content={backInt.tooltip} maxWidth={270} key={index.toString()}>
                        <div className={`hover:-translate-y-4	hover:z-50 transition-transform duration-300 ${`z-[` + backInt.zIndex + `]`}  ${`left-` + backInt.abosulteLeftPosition} ${`bg-[` + backInt.color + `]`} ${backInt.textColor} absolute p-2 w-fit text-5xl rounded-lg`}>
                          {backInt.icon}
                        </div>
                      </Tippy>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex flex-col gap-8">
                    <h3 className="text-lg font-bold mt-4">Both</h3>
                    <div className="flex items-center relative">
                      {bothInterest.map((bothInt, index) => (
                        <Tippy content={bothInt.tooltip} maxWidth={270} key={index.toString()}>
                          <div className={`hover:-translate-y-4	hover:z-50 transition-transform duration-300 ${`z-[` + bothInt.zIndex + `]`}  ${`left-` + bothInt.abosulteLeftPosition} ${`bg-[` + bothInt.color + `]`} ${bothInt.textColor} absolute p-2 w-fit text-5xl rounded-lg`}>
                            {bothInt.icon}
                          </div>
                        </Tippy>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-8">
                    <h3 className="text-lg font-bold mt-4">Data</h3>
                    <div className="flex items-center relative">
                      {dataInterest.map((dataInt, index) => (
                        <Tippy content={dataInt.tooltip} maxWidth={270} key={index.toString()}>
                          <div className={`hover:-translate-y-4	hover:z-50 transition-transform duration-300 ${`z-[` + dataInt.zIndex + `]`}  ${`left-` + dataInt.abosulteLeftPosition} ${`bg-[` + dataInt.color + `]`} ${dataInt.textColor} absolute p-2 w-fit text-5xl rounded-lg`}>
                            {dataInt.icon}
                          </div>
                        </Tippy>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-24 md:mt8">
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

export default function Skills() {
  const TippyItems: TippyItemsProps[] = [
    {
      frontendExp: [
        {
          tooltip: 'HTML',
          color: '#e44d26',
          zIndex: "0",
          abosulteLeftPosition: "0",
          icon: <AiFillHtml5 />,
        },
        {
          tooltip: 'CSS',
          color: '#1572b6',
          zIndex: "10",
          abosulteLeftPosition: "8",
          icon: <BiLogoCss3 />
        },
        {
          tooltip: 'TailwindCSS',
          color: 'white',
          zIndex: "20",
          abosulteLeftPosition: "16",
          icon: <BiLogoTailwindCss />,
          textColor: "text-black"
        },
        {
          tooltip: 'JavaScript',
          color: '#ffdf00',
          zIndex: "30",
          abosulteLeftPosition: "24",
          icon: <DiJavascript1 />,
          textColor: "text-black"
        },
        {
          tooltip: 'React',
          color: '#61dafb',
          zIndex: "40",
          abosulteLeftPosition: "32",
          icon: <FaReact />
        },
      ],
      backendExp: [
        {
          tooltip: 'PostgreSQL',
          color: 'white',
          zIndex: "0",
          abosulteLeftPosition: "0",
          icon: <BiLogoPostgresql />,
          textColor: "text-black"
        },
        {
          tooltip: 'Prisma',
          color: '#0c344b',
          zIndex: "10",
          abosulteLeftPosition: "8",
          icon: <SiPrisma />
        },
        {
          tooltip: 'MySQL',
          color: '#4479a1',
          zIndex: "20",
          abosulteLeftPosition: "16",
          icon: <SiMysql />
        }
      ],
      backendBasic: [
        {
          tooltip: 'NodeJS',
          color: '#90c640',
          zIndex: "0",
          abosulteLeftPosition: "0",
          icon: <FaNodeJs />
        },
        {
          tooltip: 'Python',
          color: '#ffc007',
          zIndex: "10",
          abosulteLeftPosition: "8",
          icon: <BiLogoPython />,
          textColor: "text-black"
        },
        {
          tooltip: 'Java',
          color: '#f44336',
          zIndex: "20",
          abosulteLeftPosition: "16",
          icon: <GrJava />,
          textColor: "text-white"
        }
      ],
      backendStudy: [
        {
          tooltip: 'NextJS',
          color: 'white',
          zIndex: "0",
          abosulteLeftPosition: "0",
          icon: <TbBrandNextjs />,
          textColor: "text-black"
        },
        {
          tooltip: 'NodeJS',
          color: '#90c640',
          zIndex: "10",
          abosulteLeftPosition: "8",
          icon: <FaNodeJs />
        },
        {
          tooltip: 'Prisma',
          color: '#0c344b',
          zIndex: "20",
          abosulteLeftPosition: "16",
          icon: <SiPrisma />
        }
      ],
      frontendInterest: [
        {
          tooltip: 'VueJS',
          color: 'white',
          zIndex: "0",
          abosulteLeftPosition: "0",
          icon: <BiLogoVuejs />,
          textColor: "text-black"
        },
        {
          tooltip: 'Angular',
          color: '#e53935',
          zIndex: "10",
          abosulteLeftPosition: "8",
          icon: <FaAngular />,
          textColor: "text-white"
        },
      ],
      backendInterest: [
        {
          tooltip: 'Ruby on Rails',
          color: '#cc0000',
          zIndex: "0",
          abosulteLeftPosition: "0",
          icon: <SiRubyonrails />,
        },
        {
          tooltip: 'Java',
          color: '#f44336',
          zIndex: "10",
          abosulteLeftPosition: "8",
          icon: <GrJava />,
        }
      ],
      bothInterest: [
        {
          tooltip: 'GraphQL',
          color: '#e535ab',
          zIndex: "0",
          abosulteLeftPosition: "0",
          icon: <BiLogoGraphql />,
        }
      ],
      dataInterest: [
        {
          tooltip: 'Pandas',
          color: '#ffc007',
          zIndex: "0",
          abosulteLeftPosition: "0",
          icon: <BiLogoPython />,
          textColor: "text-black"
        }
      ]
    }
  ];

  return (
    <>
      {TippyItems.map((card, index) => (
        <SkillsCard
          key={index.toString()}
          frontendExp={card.frontendExp}
          backendExp={card.backendExp}
          backendBasic={card.backendBasic}
          backendStudy={card.backendStudy}
          frontendInterest={card.frontendInterest}
          backendInterest={card.backendInterest}
          bothInterest={card.bothInterest}
          dataInterest={card.dataInterest}
        />
      ))}
    </>
  )
}