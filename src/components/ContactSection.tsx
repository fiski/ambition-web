const imgPlaceholder = "https://www.figma.com/api/mcp/asset/16a088d2-f0f1-4f8f-96a4-696c84b5fddf";
const imgMdiInstagram = "https://www.figma.com/api/mcp/asset/37945e61-457f-49e1-85b9-c8162c49e908";
const imgIcBaselineFacebook = "https://www.figma.com/api/mcp/asset/34591426-7414-4eb8-951c-13d302730ae3";
const imgMdiLinkedin = "https://www.figma.com/api/mcp/asset/2c537726-e336-4673-b442-40b1b8d33526";

const employees = [
  {
    name: "Nathalie Tindsjö",
    title: "Head of Ambition Empower",
    phone: "+46 730 74 67 57",
    image: imgPlaceholder,
  },
  {
    name: "Jakob Rönnemalm",
    title: "Business Lead",
    phone: "+46 730 74 67 57",
    image: imgPlaceholder,
  },
  {
    name: "Cecilia Brunemark",
    title: "Business Lead",
    phone: "+46 730 74 67 57",
    image: imgPlaceholder,
  },
  {
    name: "Johan Berndtsson",
    title: "CEO of Ambition Empower",
    phone: "+46 730 74 67 57",
    image: imgPlaceholder,
  },
];

function Employee({
  name,
  title,
  phone,
  image,
}: {
  name: string;
  title: string;
  phone: string;
  image: string;
}) {
  return (
    <div className="flex flex-col items-start w-full">
      {/* Image */}
      <div className="flex flex-col h-[306px] items-start w-full">
        <div className="bg-white flex-1 min-h-0 overflow-hidden relative rounded-tl-2xl rounded-tr-2xl w-full">
          <img
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
            src={image}
          />
        </div>
      </div>
      {/* Info */}
      <div className="bg-sand flex flex-col gap-3 items-start p-4 rounded-bl-2xl rounded-br-2xl text-moss w-full">
        <p className="font-normal text-2xl leading-[28.8px] w-full">{name}</p>
        <div className="flex flex-col gap-[6px] items-start text-lg w-full">
          <p className="font-medium leading-[19.8px] tracking-[-0.18px]">{title}</p>
          <div className="flex flex-col font-light gap-1 items-start text-base leading-[16.2px]">
            <p>Send email</p>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="flex flex-col items-start pb-20 pt-[117px] relative w-full">
      {/* CONTACT overlay */}
      <div
        className="absolute flex flex-col items-center justify-center left-0 w-full pointer-events-none z-10"
        style={{ top: "67px", mixBlendMode: "plus-lighter" }}
      >
        <p
          className="font-extrabold leading-normal text-lagoon text-center uppercase whitespace-nowrap"
          style={{ fontSize: "72.656px" }}
        >
          contact
        </p>
      </div>

      {/* Employee cards */}
      <div className="flex flex-col gap-8 items-start pb-4 px-4 w-full">
        {employees.map((e) => (
          <Employee key={e.name} {...e} />
        ))}
      </div>

      {/* Address + social */}
      <div className="flex flex-col gap-[81px] items-center w-full mt-8">
        {/* Addresses */}
        <div className="flex flex-col gap-[35px] items-center text-base text-forest whitespace-nowrap">
          <div className="flex flex-col gap-[5px] items-center">
            <p className="font-semibold leading-[21.6px] text-right">HQ Office</p>
            <div className="font-light text-center leading-[21.6px]">
              <p>Kungsgatan 57</p>
              <p>C/o Welcom</p>
              <p>411 15 Göteborg</p>
              <p>Sweden</p>
            </div>
          </div>
          <div className="flex flex-col gap-[5px] items-center">
            <p className="font-semibold leading-[21.6px]">Postal adress</p>
            <div className="font-light text-center leading-[21.6px]">
              <p>Köpstadsvägen 5,</p>
              <p>432 51 Varberg</p>
              <p>Sweden</p>
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex flex-wrap gap-[58px] items-center justify-center w-full px-4">
          <img alt="Instagram" className="size-[56px]" src={imgMdiInstagram} />
          <img alt="Facebook" className="size-[56px]" src={imgIcBaselineFacebook} />
          <img alt="LinkedIn" className="size-[56px]" src={imgMdiLinkedin} />
        </div>
      </div>
    </section>
  );
}
