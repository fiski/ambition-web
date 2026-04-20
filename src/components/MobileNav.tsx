const imgVector = "https://www.figma.com/api/mcp/asset/3e52c90d-1273-4b88-8f0b-d787a57ed011";

export default function MobileNav() {
  return (
    <nav className="bg-forest border-b border-clay flex h-[108px] items-center justify-between pt-[44px] px-5 w-full sticky top-0 z-50">
      {/* Logo icon */}
      <div className="overflow-clip relative shrink-0 size-9">
        <img
          alt="Ambition logo"
          className="absolute block inset-0 max-w-none size-full object-contain"
          src={imgVector}
        />
      </div>

      {/* Nav placeholder */}
      <p className="font-light text-2xl text-center text-white leading-[0.9]">
        Placeholder nav
      </p>

      {/* Hamburger */}
      <div className="flex flex-col gap-[6px] items-center justify-center px-2 py-[10px] w-10">
        <div className="bg-sand h-0.5 rounded-sm w-[22px]" />
        <div className="bg-sand h-0.5 rounded-sm w-[22px]" />
        <div className="bg-sand h-0.5 rounded-sm w-[22px]" />
      </div>
    </nav>
  );
}
