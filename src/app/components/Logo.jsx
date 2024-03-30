import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
        {/* <img class="max-w-[100px] md:max-w-[165px]" src="./assets/lws_logo.png" alt="Lws" /> */}
        <Image
          src="/lws_logo.png"
          alt="Lws logo"
          height={100}
          width={165}
        />
      </Link>
  )
}
