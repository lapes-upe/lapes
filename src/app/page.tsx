import { texts } from "@/resources/texts";
import { CollaboratorsSection } from "@/components/CollaboratorsSection";
import { ArticlesSection } from "@/components/ArticlesSection";
import { PapersSection } from "@/components/PapersSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 mt-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-serif text-[48px] text-primary font-normal">{texts.pages.home.en.lapes}</h1>
        <p className="text-justify">{texts.pages.home.en.description}</p>
      </div>
      <CollaboratorsSection />
      <ArticlesSection />
      <PapersSection />
    </div>
  );
}
