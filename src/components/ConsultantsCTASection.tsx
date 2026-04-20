const imgFrame = "https://www.figma.com/api/mcp/asset/7980eb8f-16aa-488a-b6af-69f69bdd0701";
const imgArrow1 = "https://www.figma.com/api/mcp/asset/370f09b0-b571-4c28-9d18-250aad23894a";
const imgPerson1 = "https://www.figma.com/api/mcp/asset/a17889b4-20c9-4445-9dd1-b69eae53fd1a";
const imgPerson2 = "https://www.figma.com/api/mcp/asset/85141694-36e1-4b6d-8d9f-9a8cb7bc2f69";
const imgPhoto1 = "https://www.figma.com/api/mcp/asset/41a108a7-e1c3-4464-ab21-c07009d48296";
const imgPhoto2 = "https://www.figma.com/api/mcp/asset/5cb62bb3-2439-4f3a-bf46-a67c871fdeb2";
const imgPhoto3 = "https://www.figma.com/api/mcp/asset/2e69ad5f-8a83-4c20-b209-38f335dd2532";

export default function ConsultantsCTASection() {
  return (
    <section className="flex flex-col gap-6 items-start pb-20 w-full">
      {/* Heading */}
      <p className="font-black text-[48px] text-forest text-center tracking-[-0.48px] uppercase leading-[1.1] w-full px-4">
        Do you need help to find the right expert for your next project?
      </p>

      <div className="flex flex-col gap-8 items-start pb-4 px-4 w-full">
        {/* CTA button card */}
        <div className="bg-white flex flex-col items-start pl-5 pr-4 py-3 rounded-2xl w-full">
          <div className="flex flex-col gap-3 items-start justify-center w-full">
            {/* Team avatars + label */}
            <div className="flex gap-[19px] items-center w-full">
              {/* Overlapping avatars */}
              <div className="flex items-center pr-5">
                <div className="bg-white border border-sand h-[75px] -mr-5 overflow-hidden relative rounded-[50px] w-[57px] z-10">
                  <img alt="Team member" className="absolute inset-0 w-full h-full object-cover" src={imgPerson1} />
                </div>
                <div className="bg-white border border-sand h-[75px] -mr-5 overflow-hidden relative rounded-[50px] w-[57px] z-0">
                  <img alt="Team member" className="absolute inset-0 w-full h-full object-cover" src={imgPerson2} />
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center p-[10px]">
                <p className="flex-1 font-light text-xl text-forest uppercase leading-[1.35]">
                  Speak with our team
                </p>
              </div>
            </div>
            {/* Arrow button */}
            <div className="flex items-center p-[10px] w-full">
              <div className="bg-moss border border-[#213e44] flex flex-1 h-[38px] items-center justify-center px-5 py-2 rounded-full">
                <img alt="→" className="h-[11.776px] w-[12.608px]" src={imgArrow1} />
              </div>
            </div>
          </div>
        </div>

        {/* Body text */}
        <p className="font-light text-2xl text-[#1a2627] leading-[30px] w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>

        {/* Portfolio images */}
        <div className="bg-white h-[570px] overflow-hidden relative rounded-[22.857px] w-full">
          <img alt="Portfolio" className="absolute inset-0 w-full h-full object-cover" src={imgPhoto1} />
        </div>
        <div className="bg-white h-[463px] overflow-hidden relative rounded-[22.857px] w-full">
          <img alt="Portfolio" className="absolute inset-0 w-full h-full object-cover" src={imgPhoto2} />
        </div>
        <div className="bg-white h-[693px] overflow-hidden relative rounded-[22.857px] w-full">
          <img alt="Portfolio" className="absolute inset-0 w-full h-full object-cover" src={imgPhoto3} />
        </div>

        {/* Book a call button */}
        <button className="bg-sun flex items-center justify-center p-0.5 rounded-full w-full">
          <div className="flex items-center justify-center overflow-hidden px-5 py-[10px] rounded-full">
            <span className="font-light text-lg text-moss tracking-[1.08px] uppercase whitespace-nowrap">
              book a discovery call
            </span>
          </div>
          <div className="relative shrink-0 size-[38px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
        </button>
      </div>
    </section>
  );
}
