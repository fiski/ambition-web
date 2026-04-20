const imgLogo = "https://www.figma.com/api/mcp/asset/442f3855-dee7-4f97-9f8a-efa6c7a8fa74";
const imgMdiInstagram = "https://www.figma.com/api/mcp/asset/37945e61-457f-49e1-85b9-c8162c49e908";
const imgIcBaselineFacebook = "https://www.figma.com/api/mcp/asset/34591426-7414-4eb8-951c-13d302730ae3";
const imgMdiLinkedin = "https://www.figma.com/api/mcp/asset/2c537726-e336-4673-b442-40b1b8d33526";

const navLinks = [
  "About us",
  "Courses",
  "The educators",
  "Blog",
  "Pricing",
  "Community FAQ",
  "Privacy Policy",
  "Terms and conditions",
  "Cookies",
];

export default function Footer() {
  return (
    <footer className="bg-moss flex flex-col items-start overflow-hidden py-16 w-full">
      <div className="flex flex-col gap-20 items-start w-full">
        {/* Logo + social links */}
        <div className="flex items-start justify-between px-4 w-full">
          <div className="h-[75px] relative w-[79.921px]">
            <img alt="Ambition logo" className="absolute block inset-0 max-w-none size-full" src={imgLogo} />
          </div>
          <div className="flex flex-col gap-3 items-start">
            {["linkedin", "facebook", "instagram"].map((s) => (
              <div key={s} className="flex items-start p-2">
                <p className="font-semibold text-base text-clay tracking-[1.6px] uppercase whitespace-nowrap leading-[17.6px]">
                  {s}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Big AMBITION text */}
        <div className="flex items-center justify-center w-full">
          <p className="font-black text-[70px] text-clay text-center uppercase leading-normal w-full">
            AMBITION
          </p>
        </div>

        {/* Nav links + contact */}
        <div className="flex flex-col font-light gap-10 items-start px-4 text-sm w-full">
          {/* Nav links */}
          <p className="text-clay w-full leading-[2.8]">
            {navLinks.map((link, i) => (
              <span key={link}>
                {link}
                {i < navLinks.length - 1 && (
                  <>
                    {"  "}
                    <span className="text-sun">/</span>
                    {"  "}
                  </>
                )}
              </span>
            ))}
          </p>

          {/* Contact info */}
          <div className="text-clay text-center w-full leading-[18.9px]">
            <p>Köpstadsvägen 5, 432 51 Varberg</p>
            <p>+46 123 - 123 00</p>
            <p>hello@ambitionempower.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
