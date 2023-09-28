export default function CurrentCity({ cityName = 'No data loaded'} : any) {
  return <h1 className="text-2xl mt-2">{cityName}</h1>;
}
