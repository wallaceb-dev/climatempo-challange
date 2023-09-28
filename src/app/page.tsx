import Image from "next/image";
import SearchBar from "./components/SearchBar";
import CurrentCity from "./components/CurrentCity";
import ForecastCard from "./components/ForecastCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="w-full">
        <div className="h-10 flex items-center justify-center">
          <Image
            src="/logo-white.png"
            alt="Climatempo"
            width={110}
            height={37}
          />
        </div>
      </header>
      <SearchBar />
      <div className="w-full p-5 flex flex-col">
        <CurrentCity />
        <ForecastCard />
        <ForecastCard />
      </div>
    </main>
  );
}
