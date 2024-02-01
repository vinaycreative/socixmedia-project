import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="w-full h-[85vh] grid place-content-center overflow-hidden">
      <div className="text-center -mt-20">
        <Image src="/images/404.gif" alt="404 Error" width={400} height={400} />

        <Link
          className="px-4 py-2 border border-slate-400 hover:border-slate-500 rounded-md text-slate-600"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
