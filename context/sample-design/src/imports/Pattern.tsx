import img51 from "figma:asset/a494f7485c96dcc29f871189e62fbaad54906f4e.png";

function Variants() {
  return (
    <div className="absolute left-0 overflow-clip size-[240.625px] top-0" data-name="Variants">
      <div className="absolute left-0 size-[240.625px] top-0" data-name="5 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img51} />
      </div>
    </div>
  );
}

function Variants1() {
  return (
    <div className="overflow-clip relative size-[240.625px]" data-name="Variants">
      <div className="absolute left-0 size-[240.625px] top-0" data-name="5 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img51} />
      </div>
    </div>
  );
}

function Variants2() {
  return (
    <div className="absolute left-0 overflow-clip size-[240.625px] top-[240.63px]" data-name="Variants">
      <div className="absolute left-0 size-[240.625px] top-0" data-name="5 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img51} />
      </div>
    </div>
  );
}

export default function Pattern() {
  return (
    <div className="relative size-full" data-name="Pattern">
      <Variants />
      <div className="absolute flex items-center justify-center left-[240.63px] size-[240.625px] top-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Variants1 />
        </div>
      </div>
      <Variants2 />
      <div className="absolute flex items-center justify-center left-[240.63px] size-[240.625px] top-[240.63px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Variants1 />
        </div>
      </div>
    </div>
  );
}