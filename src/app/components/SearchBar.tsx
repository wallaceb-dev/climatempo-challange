import Image from "next/image";
import MagnifierGlassImage from "../../../public/search.png";

export default function SearchBar() {
  return (
    <div className="w-full h-12 bg-white flex ps-4 pe-4 items-center justify-between">
      <input
        type="text"
        placeholder="Search a city"
        className="placeholder:italic outline-none"
      />
      <i>
        <Image src={MagnifierGlassImage} alt="Search a city" width={30} height={20} />
      </i>
    </div>
  );
}
