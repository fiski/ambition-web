const imgArrow = "https://www.figma.com/api/mcp/asset/52f0b1a7-6308-47cf-8677-0efd15a45099";
const imgFrame3 = "https://www.figma.com/api/mcp/asset/e1100872-6816-40a8-957d-7e5f0c303e13";
const imgPolestar = "https://www.figma.com/api/mcp/asset/75e48b94-7f42-492b-a8e4-e2589ff946f2";
const imgIkea = "https://www.figma.com/api/mcp/asset/3d4df202-25f3-4a8e-b4d6-d8dcf0599fc3";
const imgIca = "https://www.figma.com/api/mcp/asset/29cef5a6-c5f9-4d52-9836-5892d25f2a94";

function CaseCard({
  image,
  title,
  height = "h-[282px]",
}: {
  image: string;
  title: string;
  height?: string;
}) {
  return (
    <div className={`bg-white flex gap-[10px] items-center overflow-hidden relative rounded-lg w-full ${height}`}>
      <div className="absolute inset-0">
        <img alt={title} className="w-full h-full object-cover" src={image} />
      </div>
      {/* Title + link badge */}
      <div className="absolute bottom-0 right-0 flex items-center">
        <div className="bg-white flex items-center justify-center px-[10px] py-2 rounded-tl-[4px]">
          <p className="font-light text-2xl text-[#3d3d3d] leading-[30px] uppercase whitespace-nowrap">
            {title}
          </p>
        </div>
        <div className="bg-sun flex items-center self-stretch p-3">
          <img alt="→" className="h-[11.776px] w-[12.608px]" src={imgArrow} />
        </div>
      </div>
    </div>
  );
}

export default function SuccessStoriesSection() {
  return (
    <section className="flex flex-col items-start pb-20 pt-[197px] -mt-20 relative w-full z-10">
      {/* Section heading overlay */}
      <div
        className="absolute flex flex-col font-extrabold items-center justify-center left-0 text-lagoon text-center uppercase whitespace-nowrap pointer-events-none z-10"
        style={{ top: "100px", mixBlendMode: "plus-lighter" }}
      >
        <p style={{ fontSize: "78.663px", lineHeight: "90%" }}>
          success<br />stories
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8 items-start pb-4 px-4 w-full">
        {/* Polestar — large */}
        <CaseCard image={imgPolestar} title="Polestar" height="h-[548px]" />

        {/* Body text */}
        <div className="font-light text-base text-[#1a2627] leading-[21.6px] w-full">
          <p>
            Thoughtful perspectives, practical tools, and fresh ideas for organisations aiming to grow through design.
            This is where we share analysis, lessons, and inspiration to help you take the next step, whether you lead a team or shape a product.
          </p>
        </div>

        {/* IKEA */}
        <CaseCard image={imgIkea} title="ikea" />

        {/* ICA */}
        <CaseCard image={imgIca} title="ica" />

        {/* Read all link */}
        <div className="flex items-center justify-center w-full">
          <span className="font-light text-lg text-[#213e44] uppercase pr-[10px] py-[10px] leading-[1.35]">
            READ ALL
          </span>
          <div className="flex items-center p-[10px]">
            <div className="relative size-[27px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame3} />
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex gap-[10px] items-center justify-center w-full">
          <div className="bg-[#5b9d9b] h-[6px] rounded-[5.549px] w-11" />
          <div className="bg-[#1a2627] h-[6px] rounded-[5.549px] w-3" />
          <div className="bg-[#1a2627] h-[6px] rounded-[5.549px] w-3" />
        </div>
      </div>
    </section>
  );
}
