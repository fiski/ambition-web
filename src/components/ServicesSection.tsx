const imgIcon = "https://www.figma.com/api/mcp/asset/6727cba7-1082-460f-96a1-3ea537977a1a";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/2fe1ce7a-575f-4cf0-b179-376a656032a9";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/d5575699-4b69-40ea-9a25-5c26fae83fae";
const imgUxDesign = "https://www.figma.com/api/mcp/asset/75e48b94-7f42-492b-a8e4-e2589ff946f2";
const imgProductDesign = "https://www.figma.com/api/mcp/asset/7a5fd438-853f-437e-9617-cddac11f2d8d";
const imgResearch1 = "https://www.figma.com/api/mcp/asset/7ad53702-1ce7-47a5-9f18-4f2ef24b1848";
const imgCxDesign = "https://www.figma.com/api/mcp/asset/2fe7c6fe-2cab-406c-a7bd-f9f10789a9ff";
const imgProjMgmt = "https://www.figma.com/api/mcp/asset/5b319bcf-20f9-4f43-a36a-b01f04814e5f";

const serviceBody = `Ambition helps organizations design services that work in real life and create clear business value. We start from the customer perspective, identify needs and friction, and turn insights into practical, implementable solutions.

By clarifying complex systems and focusing on what truly matters, we help teams reduce risk, make better decisions and build services that are easy to use, deliver and evolve over time.`;

const imageLinks = [
  { label: "UX DESIGN", image: imgUxDesign, height: "h-[339px]", placement: "top" },
  { label: "product design", image: imgProductDesign, height: "h-[250px]", placement: "bottom" },
  { label: "research", image: imgResearch1, height: "h-[339px]", placement: "bottom" },
  { label: "cx design", image: imgCxDesign, height: "h-[300px]", placement: "top" },
  { label: "project management", image: imgProjMgmt, height: "h-[246px]", placement: "bottom" },
];

function ServiceImageLink({
  label,
  image,
  height,
  placement,
}: {
  label: string;
  image: string;
  height: string;
  placement: "top" | "bottom";
}) {
  return (
    <div className={`bg-white flex gap-[10px] items-center overflow-hidden relative rounded-2xl w-full ${height}`}>
      <div className="absolute inset-0">
        <img alt={label} className="w-full h-full object-cover" src={image} />
      </div>
      <div
        className={`absolute flex items-center left-4 ${placement === "top" ? "top-4" : "bottom-4"}`}
      >
        <div className="bg-[#213e44] flex items-center justify-center px-[10px] py-1 rounded-bl-lg rounded-tl-lg">
          <span className="font-light text-xl text-white uppercase whitespace-nowrap leading-none">
            {label}
          </span>
        </div>
        <div className="relative shrink-0 size-7">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="flex flex-col items-start pb-20 pt-[117px] relative w-full">
      {/* SERVICES overlay */}
      <div className="absolute flex flex-col items-center justify-center left-0 pointer-events-none z-10" style={{ top: "66.97px", mixBlendMode: "plus-lighter" }}>
        <p
          className="font-extrabold leading-normal text-lagoon text-center uppercase whitespace-nowrap"
          style={{ fontSize: "72.656px" }}
        >
          services
        </p>
      </div>

      <div className="flex flex-col gap-8 items-start pb-4 px-4 w-full">
        {/* Service Design card */}
        <div className="bg-lagoon flex flex-col gap-7 items-start overflow-hidden p-4 rounded-2xl w-full">
          {/* Category tag */}
          <div className="flex items-center">
            <div className="bg-moss flex items-center justify-center px-[10px] py-1 rounded-bl-lg rounded-tl-lg">
              <span className="font-light text-lg text-white tracking-[1.08px] uppercase whitespace-nowrap leading-[19.8px]">
                Service DESIGN
              </span>
            </div>
            <div className="flex items-center justify-center size-7 rotate-90">
              <img alt="" className="size-7" src={imgIcon1} />
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-7 w-full">
            <p className="font-light text-base text-forest leading-[21.6px]">
              {serviceBody}
            </p>
            {/* Read more */}
            <div className="flex items-center">
              <span className="font-light text-lg text-white tracking-[1.08px] uppercase pr-[10px] py-[10px]">
                Read more
              </span>
              <div className="flex items-center p-[10px]">
                <img alt="" className="size-[27px]" src={imgFrame2} />
              </div>
            </div>
          </div>
        </div>

        {/* Image link cards */}
        {imageLinks.map((item) => (
          <ServiceImageLink
            key={item.label}
            label={item.label}
            image={item.image}
            height={item.height}
            placement={item.placement as "top" | "bottom"}
          />
        ))}
      </div>
    </section>
  );
}
