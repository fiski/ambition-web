const imgEvent = "https://www.figma.com/api/mcp/asset/2bb4f6a8-faaa-441d-becf-b85963f7d2ba";
const imgFrame = "https://www.figma.com/api/mcp/asset/7980eb8f-16aa-488a-b6af-69f69bdd0701";
const imgFrame4 = "https://www.figma.com/api/mcp/asset/f7f6f983-7178-47c0-967f-21e91b599b35";

const events = [
  { date: "MAY 19", venue: "Surr Arena, Gothenburg" },
  { date: "MAY 25", venue: "Södra Teatern, Stockholm" },
];

export default function EventsSection() {
  return (
    <section className="bg-moss flex flex-col gap-2 items-start pb-24 w-full">
      {/* Top section with image and title */}
      <div className="flex flex-col items-start pt-[104px] relative w-full">
        {/* EVENTS overlay */}
        <div className="absolute flex items-center justify-center left-0 top-[53px] pointer-events-none z-10" style={{ mixBlendMode: "plus-lighter" }}>
          <p
            className="font-extrabold leading-normal text-lagoon uppercase whitespace-nowrap"
            style={{ fontSize: "89.604px" }}
          >
            events
          </p>
        </div>

        <div className="flex flex-col gap-8 items-start pb-4 px-4 w-full">
          {/* Event image */}
          <div className="h-[506px] overflow-hidden relative rounded-lg w-full">
            <img
              alt="Ambition Conference"
              className="w-full h-full object-cover"
              src={imgEvent}
            />
          </div>

          {/* Title + body */}
          <div className="flex flex-col gap-3 w-full">
            <p className="font-semibold text-2xl text-clay uppercase leading-[26.4px] w-full">
              Meet at The ambition empower conference 2026
            </p>
            <p className="font-light text-base text-sand leading-[21.6px] w-full">
              Access to the Ambition Conference in Stockholm or Gothenburg is included in the membership.
              Meet up and workshop with all the other members and listen to amazing speakers!
            </p>
          </div>
        </div>
      </div>

      {/* Event date cards + CTA */}
      <div className="flex flex-col gap-2 items-start px-4 w-full">
        {events.map((e) => (
          <div
            key={e.date}
            className="backdrop-blur-[27px] bg-plum flex flex-col gap-4 items-center pb-4 pt-8 rounded-[20px] w-full"
          >
            <div className="flex flex-col gap-2 items-center text-sun text-center w-full">
              <p className="font-bold text-[40px] leading-7">{e.date}</p>
              <p className="font-normal text-lg leading-7">{e.venue}</p>
            </div>
            <button className="bg-[rgba(226,255,111,0.1)] border border-[0.5px] border-sun flex h-[50px] items-center justify-center rounded-[6px] w-[162px]">
              <span className="font-black text-sm text-sun tracking-[1.4px] uppercase whitespace-nowrap">
                Sign up now
              </span>
            </button>
          </div>
        ))}

        {/* CTAs */}
        <div className="flex flex-col gap-2 items-start pt-6 w-full">
          <button className="bg-sun flex items-center justify-center p-0.5 rounded-full w-full">
            <div className="flex items-center justify-center overflow-hidden px-5 py-[10px] rounded-full">
              <span className="font-light text-lg text-moss tracking-[1.08px] uppercase whitespace-nowrap">
                read about our events
              </span>
            </div>
            <div className="relative shrink-0 size-[38px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
          </button>

          <div className="flex items-center justify-center w-full">
            <span className="font-light text-lg text-[#43d5d2] uppercase pr-[10px] py-[10px] leading-[1.35]">
              Read about our events
            </span>
            <div className="flex items-center p-[10px]">
              <div className="relative size-[27px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
