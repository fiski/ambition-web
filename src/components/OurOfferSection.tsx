const imgIcon2 = "https://www.figma.com/api/mcp/asset/1fa1e2bd-9da8-4d94-8b10-7584cb7fd220";
const imgConsulting = "https://www.figma.com/api/mcp/asset/64a57130-c03c-415e-96d0-52a03c3fef85";
const imgRecruitment = "https://www.figma.com/api/mcp/asset/8f0add43-0b8a-4518-8a0e-637f28820324";
const imgEmpower = "https://www.figma.com/api/mcp/asset/7cbbe4c3-08c3-43d2-bdb7-0fc4a061f0db";

const body =
  "Designed for your busy life, Empower helps you grow in just one hour a week — through live sessions with world-class experts, curated content, and team reflection.";

const services = [
  { title: "Consulting", image: imgConsulting },
  { title: "Recruitment", image: imgRecruitment },
  { title: "Empower", image: imgEmpower },
];

function ServiceCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="flex flex-col h-[500px] items-start w-full">
      {/* Image */}
      <div className="flex-1 min-h-0 overflow-hidden relative rounded-tl-lg rounded-tr-lg rounded-bl-lg w-full">
        <img
          alt={title}
          className="absolute inset-0 max-w-none object-cover size-full rounded-tl-lg rounded-tr-lg rounded-bl-lg"
          src={image}
        />
      </div>
      {/* Card content */}
      <div className="flex flex-col gap-4 items-start w-full">
        <div className="flex items-start justify-between pl-1 w-full">
          <div className="flex items-start pr-3 py-3 w-[345px]">
            <p className="font-black text-2xl text-moss leading-[28.8px] whitespace-nowrap">
              {title}
            </p>
          </div>
          <div className="relative shrink-0 size-[38px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
          </div>
        </div>
        <div className="flex items-center justify-center pl-1 w-full">
          <p className="flex-1 font-light text-base text-charcoal leading-[21.6px]">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OurOfferSection() {
  return (
    <section className="flex flex-col items-start pt-24 relative w-full">
      {/* Section heading overlay */}
      <div className="absolute flex items-center justify-center left-0 top-[53px] pointer-events-none z-10" style={{ mixBlendMode: "plus-lighter" }}>
        <p
          className="font-extrabold leading-normal text-lagoon uppercase whitespace-nowrap"
          style={{ fontSize: "62.49px" }}
        >
          our offer
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-8 items-start pb-4 px-4 w-full">
        {services.map((s) => (
          <ServiceCard key={s.title} title={s.title} image={s.image} />
        ))}
      </div>
    </section>
  );
}
