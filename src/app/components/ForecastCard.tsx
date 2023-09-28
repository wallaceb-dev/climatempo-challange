import Image from "next/image";

export default function ForecastCard() {
  return (
    <div className="bg-white rounded-sm mt-7 shadow-md">
      <div className="font-medium px-3 py-2">01/02/2023</div>
      <div className="font-medium text-xs px-3 mb-2">
        Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a
        qualquer hora.
      </div>
      <div className="bg-gray-100 rounded-sm flex flex-col pt-1">
        <div className="flex p-4">
          <div className="w-full flex">
            <Image src="/upload.png" width={30} height={30} alt="High Icon" />
            <span className="text-red-600 text-2xl w-full text-center">20°C</span>
          </div>
          <div className="w-full flex">
            <Image src="/download.png" width={30} height={30} alt="Down Icon" />
            <p className="text-blue-500 text-2xl w-full text-center">10°C</p>
          </div>
        </div>
        <div className="flex p-4">
          <div className="w-full flex">
            <Image
              src="/raindrop-close-up.png"
              width={30}
              height={30}
              alt="Raindrop Icon"
            />
            <span className="text-2xl w-full text-center">10mm</span>
          </div>
          <div className="w-full flex">
            <Image
              src="/umbrella.png"
              width={30}
              height={30}
              alt="Umbrella Icon"
            />
            <span className="text-2xl w-full text-center">50%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
