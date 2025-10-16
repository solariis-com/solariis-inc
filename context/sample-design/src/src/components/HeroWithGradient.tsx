import React from "react";
import imgHero from "figma:asset/536a1ae83f57d91da6ef275fa0dc2287da77ba01.png";
import imgHero1 from "figma:asset/3e2148841e474ec66b5e606e4f4bcddcf6f0cf1d.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Rethink_Sans:ExtraBold',_sans-serif] font-extrabold justify-center leading-[133px] relative shrink-0 text-[128px] text-black text-nowrap whitespace-pre">
        <p className="mb-0">Marca.</p>
        <p className="mb-0">Estrategia.</p>
        <p>Conexión.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start max-w-[512px] pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[28px] relative shrink-0 text-[18px] text-black w-[555px]">
        <p className="mb-0">Solariis es un laboratorio creativo especializado en el desarrollo y expansión de marcas.</p>
        <p>Fusionamos diseño digital, branding y storytelling con inteligencia artificial para que las marcas globales brillen con autenticidad, propósito y fuerza propia en Venezuela y más allá.</p>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="bg-white box-border content-stretch flex h-[44px] items-center justify-center px-[32px] py-[16px] relative rounded-[6px] shrink-0" data-name="Component 5">
      <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">Descubre Cómo Expandirte</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[492.8px]" data-name="Container">
      <Heading1 />
      <Container4 />
      <Component18 />
    </div>
  );
}

function Container6() {
  return <div className="basis-0 grow h-full min-h-px min-w-px shrink-0" data-name="Container" />;
}

function Container7() {
  return (
    <div className="basis-0 content-stretch flex gap-[48px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center max-w-[1280px] relative shrink-0 w-full px-8" data-name="Container">
      <Container7 />
    </div>
  );
}

export default function HeroWithGradient() {
  return (
    <div className="box-border content-stretch flex h-[1200px] items-center justify-center min-h-[1200px] px-[32px] py-[250px] relative shrink-0 w-full" data-name="Hero">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[160%] left-[0.29%] max-w-none top-[-14.1%] w-full" src={imgHero} />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[137%] left-[-0.19%] max-w-none top-[-13.57%] w-[123.18%]" src={imgHero1} />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 via-orange-400/30 to-transparent" data-name="Gradient" />
      <Container8 />
    </div>
  );
}
