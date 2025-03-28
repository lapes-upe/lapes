import { texts } from "@/resources/texts";

export default function Papers() {
  return (
    <div className="flex flex-col gap-12 mt-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-serif text-[48px] text-primary font-normal">{texts.pages.papers.en.title}</h1>
        <p className="text-justify">{texts.pages.papers.en.description}</p>
      </div>
    </div>
  );
}
