import profileImage from "../../../public/images/profile.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="프로필이미지"
        width={250}
        height={250}
        priority
      />

      <h2 className="text-3xl font-bold mt-2">Hi, We are WiSoft</h2>
      <h3 className="text-xl font-semibold">Web Front-End group</h3>
      <p>한밭대학교 무선통신 소프트웨어 연구실 WiSoft</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact me
        </button>
      </Link>
    </section>
  );
}
