import Link from "next/link";

const mockUrls = [
  "https://qmod1bsj3d.ufs.sh/f/ja6jLbig3bsiVqG5N4dd9GC6ZQgpckU2qItM5BehFHPXNjY8",
  "https://qmod1bsj3d.ufs.sh/f/ja6jLbig3bsiaglqY7Qbocq2Vfyz76BAOrlDYUSJXE1G3isN",
  "https://qmod1bsj3d.ufs.sh/f/ja6jLbig3bsiq3NWx9EhK70FmVsZjJ2O5BaClWpnAwbNcQkY",
  "https://qmod1bsj3d.ufs.sh/f/ja6jLbig3bsirQsngtWcIkp0DRgAFZmQiPcuXVEOS6Ywd5Ks"
];
const mockImages = mockUrls.map((url,index) => ({
  id :index +1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
    <div className="flex flex-wrap gap-4">
      {[...mockImages, ...mockImages,...mockImages].map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} />
        </div>
      ))}
    </div>
  </main>
  
  );
}
