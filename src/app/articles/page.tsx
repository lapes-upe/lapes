import { texts } from "@/resources/texts";

export default function Articles() {
  return (
    <div className="flex flex-col gap-12 mt-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-serif text-[48px] text-primary font-normal">{texts.pages.articles.en.title}</h1>
        <p className="text-justify">{texts.pages.articles.en.description}</p>
      </div>
    </div>
  );
}
