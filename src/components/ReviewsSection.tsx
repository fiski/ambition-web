const imgStar = "https://www.figma.com/api/mcp/asset/21271934-95a7-47cb-8c62-d6c861d73278";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/92e8e161-37c2-448e-a36a-7e25786b532e";
const imgStefan = "https://www.figma.com/api/mcp/asset/ad1d2513-9562-44c7-b3f8-d51a55ecb358";
const imgGuilherme = "https://www.figma.com/api/mcp/asset/73049c00-1684-47d9-b5bf-a4a94938ccea";
const imgLance = "https://www.figma.com/api/mcp/asset/4e1bfc06-743f-484f-9423-24bb51c160b8";

const quote =
  '"The courses on Learly are incredible. I learned digital marketing from scratch and landed a job in just three months. The instructors are amazing, and the platform is so easy to use. Truly life-changing!"';

const testimonials = [
  { name: "Stefan Andresson", role: "CEO, Newspack", image: imgStefan, flag: "🇸🇪" },
  { name: "Stina Svensson", role: "UX LEAD, ICA", image: imgGuilherme, flag: "🇸🇪" },
  { name: "Stina Svensson", role: "UX LEAD, ICA", image: imgLance, flag: "🇸🇪" },
];

function Rating() {
  return (
    <div className="flex gap-[6px] items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="relative size-[17px]">
          <img alt="star" className="absolute inset-[0_2.45%_9.55%_2.45%] block max-w-none size-full" src={imgStar} />
        </div>
      ))}
    </div>
  );
}

function Testimonial({
  name,
  role,
  image,
  flag,
}: {
  name: string;
  role: string;
  image: string;
  flag: string;
}) {
  return (
    <div className="bg-white flex flex-col items-start justify-end overflow-hidden rounded-2xl w-full">
      {/* Photo */}
      <div className="flex flex-col h-[251px] items-start overflow-hidden w-full">
        <div className="flex-1 min-h-0 overflow-hidden relative w-full">
          <img alt={name} className="absolute inset-0 w-full h-full object-cover" src={image} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8 items-start pl-6 pt-8 w-full">
        <div className="flex flex-col gap-8 items-start pr-10 w-full">
          <Rating />
          <p className="font-light text-base text-charcoal leading-[21.6px] w-full">
            {quote}
          </p>
          <div className="flex flex-col gap-1 items-start justify-center whitespace-nowrap">
            <p className="font-semibold text-base text-plum leading-[21.6px]">{name}</p>
            <div className="flex font-light gap-2 items-start text-sm">
              <p className="text-plum leading-[18.9px]">{role}</p>
              <p className="text-plum">{flag}</p>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end w-full">
          <div className="h-[38px] w-[37px]">
            <img alt="" className="block size-full" src={imgIcon3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-forest flex flex-col items-start pb-20 pt-[117px] relative w-full">
      {/* REVIEWS overlay */}
      <div
        className="absolute flex flex-col items-center justify-center left-0 w-full pointer-events-none z-10"
        style={{ top: "67px", mixBlendMode: "plus-lighter" }}
      >
        <p
          className="font-extrabold leading-normal text-lagoon text-center uppercase whitespace-nowrap"
          style={{ fontSize: "72.656px" }}
        >
          reviews
        </p>
      </div>

      <div className="flex flex-col gap-8 items-start pb-4 px-4 w-full">
        {testimonials.map((t, i) => (
          <Testimonial key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
