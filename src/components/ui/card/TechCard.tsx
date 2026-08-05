export default function TechCard({
  icon,
  category,
  items,
}: {
  icon: string;
  category: string;
  items: string[];
}) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-[24px] sm:rounded-[30px] md:rounded-[35px] p-4 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4 shadow-xl hover:border-white/30 hover:bg-white/15 transition-all duration-300 w-full">
      <div className="flex items-center gap-2.5 pb-2.5 sm:pb-3 border-b border-white/20">
        <span className="text-base sm:text-lg md:text-xl shrink-0">{icon}</span>
        <h4 className="text-xs sm:text-sm md:text-base font-semibold tracking-wider text-[#b8adad] truncate">
          {category}
        </h4>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-3 sm:gap-x-4 pt-1 sm:pt-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-[11px] sm:text-xs md:text-xs lg:text-sm text-[#b8adad] font-normal tracking-normal overflow-hidden"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8adad]/70 shrink-0" />
            <span className="whitespace-nowrap truncate">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
