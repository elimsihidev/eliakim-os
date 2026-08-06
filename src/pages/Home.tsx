import Hero from "../components/Hero";

interface HomeProps {
  setPage: (page: number) => void;
}

export default function Home({ setPage }: HomeProps) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Hero setPage={setPage} />
    </div>
  );
}