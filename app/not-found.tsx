import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center md:items-start w-full md:w-2/3 min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col md:flex-row md:flex gap-4 items-center md:items-end">
        <FontAwesomeIcon icon={faFaceFrown} size={"5x"} />
        <div>
          <h2 className="text-xl md:text-3xl">404 - Hér er ekki neitt</h2>
        </div>
      </div>
      <Link href="/">
        <FontAwesomeIcon icon={faRotateLeft} />
        Fara aftur á forsíðu
      </Link>
    </div>
  );
}
