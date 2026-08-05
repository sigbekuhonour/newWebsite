export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-widest uppercase text-white underline">
        {title}
      </h3>
    </div>
  );
}
