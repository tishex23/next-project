import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>sorry, this page not found</h2>
      <p>go to <Link href="/">Home Page</Link></p>
    </div>
  )
}
