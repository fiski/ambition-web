const imgIconButtonOutlined = "https://www.figma.com/api/mcp/asset/638a64d0-b492-4315-9d78-26f9cf128c46";

export default function NewsletterSection() {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="bg-lagoon flex flex-col gap-12 items-start px-4 py-6 w-full">
        {/* Heading */}
        <p className="font-normal text-[25px] text-forest uppercase leading-normal w-full whitespace-pre-wrap">
          {"Stay ahead in design, product and leadership.\n\nSubscribe to Ambition Group's newsletter for sharp insights."}
        </p>

        {/* Email input */}
        <div className="flex gap-12 items-end w-full">
          <div className="flex flex-1 flex-col gap-[18px] items-start min-w-0">
            <p className="font-light text-[32px] text-forest uppercase leading-normal w-full h-[50px]">
              Your email
            </p>
            <div className="border-t border-forest h-0 w-full" />
          </div>
          <div className="relative shrink-0 h-[84px] w-[85px]">
            <img
              alt="Send"
              className="absolute block inset-0 max-w-none size-full"
              src={imgIconButtonOutlined}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
