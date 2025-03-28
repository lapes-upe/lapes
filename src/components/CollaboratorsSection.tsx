import { CustomImage } from "@/components/image";

export const CollaboratorsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-serif text-4xl text-primary font-normal">Collaborators</h1>
      <div className="w-full flex items-center pt-6 justify-around font-sans">
        <div className="flex flex-col gap-2 items-center justify-center">
          <CustomImage src="/helaine.svg" alt="Helaine Lins" width={176} height={176} />
          <span className="text-xl text-gray-500">Helaine Lins</span>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <CustomImage src="/gabriel.svg" alt="Gabriel Lima" width={176} height={176} />
          <span className="text-xl text-gray-500">Gabriel Lima</span>
        </div>
      </div>
    </div>
  );
};