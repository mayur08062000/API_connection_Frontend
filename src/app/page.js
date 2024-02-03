import Link from "next/link";


export default function page() {
  return (
    <div className="container ">
      <Link className="btn" href="./addproduct">Add Products </Link>
      <Link className="btn" href="./products">Add List </Link>
    </div>
  )
}
