import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-14">
        <Image src="/warning.png" alt="warning" width={100} height={100} className="md:w-[200px] md:h-[200px]" />
        <div className="flex flex-col gap-5">
          <p className="text-lg md:text-3xl font-bold text-center">
            وبسایت اویم استانبول به علت کلاهبرداری
          </p>
          <p className="text-lg md:text-3xl font-bold text-center">
            .و نقض قوانین مسدود شده است
          </p>
        </div>
      </div>
    </div>
  );
}