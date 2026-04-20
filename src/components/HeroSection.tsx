const imgSurface = "https://www.figma.com/api/mcp/asset/3551f6bb-3d8f-4679-80ec-2eae2e6b2ee7";
const imgFrame = "https://www.figma.com/api/mcp/asset/7980eb8f-16aa-488a-b6af-69f69bdd0701";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-start pt-24 relative w-full">
      {/* AMBITION overlay text */}
      <div className="absolute flex items-center justify-center left-0 top-[53px] pointer-events-none z-10" style={{ mixBlendMode: "plus-lighter" }}>
        <p
          className="font-extrabold leading-normal text-lagoon uppercase w-full"
          style={{ fontSize: "70.489px" }}
        >
          AMBITION
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8 items-start pb-4 px-4 w-full">
        {/* Hero image */}
        <div className="h-[543px] relative rounded-3xl w-full overflow-hidden">
          <img
            alt="Ambition hero"
            className="absolute inset-0 max-w-none object-cover size-full rounded-3xl"
            src={imgSurface}
          />
        </div>

        {/* Tagline */}
        <p className="font-light leading-[30px] text-2xl text-charcoal text-center w-full">
          Ambition helps organizations grow through design, senior expertise, and learning that truly sticks.
        </p>

        {/* CTA Button */}
        <button className="bg-sun flex items-center justify-center p-0.5 rounded-full w-full">
          <div className="flex items-center justify-center overflow-hidden px-5 py-[10px] rounded-full">
            <span className="font-light text-lg text-moss tracking-[1.08px] uppercase whitespace-nowrap">
              book a discovery call
            </span>
          </div>
          <div className="relative shrink-0 size-[38px]">
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgFrame}
            />
          </div>
        </button>
      </div>
    </section>
  );
}
