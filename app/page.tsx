import About from "@/components/about";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Skills from "@/components/skills";

function Content() {

  return (
    <>
      <Hero /> 
      <About />
      <Skills />
    </>
  );
}

export default async function Home() {

  return (
    <>
        <Content />
    </>
  );
}
