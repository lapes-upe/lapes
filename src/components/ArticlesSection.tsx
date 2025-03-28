import Link from "next/link";

export const ArticlesSection = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-serif text-4xl text-primary font-normal">Articles</h1>
      <div className="flex flex-col gap-1 p-4 font-mono justify-center">
        <Link href={"#"} className="flex">
          <h3 className="flex-1 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</h3>
          <span className="justify-end items-end">March, 2025</span>
        </Link>
        <Link href={"#"} className="flex">
          <h3 className="flex-1 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</h3>
          <span className="justify-end items-end">March, 2025</span>
        </Link>
        <Link href={"#"} className="flex">
          <h3 className="flex-1 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</h3>
          <span className="justify-end items-end">March, 2025</span>
        </Link>
        <Link href={"#"} className="flex">
          <h3 className="flex-1 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</h3>
          <span className="justify-end items-end">March, 2025</span>
        </Link>
      </div>
      <div className="text-lg font-light content-center text-center">
        <Link href="/" className="relative group">
          see more
          <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:bg-amber-400`} />
        </Link>
      </div>
    </div>
  );
};