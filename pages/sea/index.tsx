import Link from "next/link";

const Sea = () => (
  <div className="duration-300 h-screen">
    <ul className="flex">
      <li className="mr-2 p-2 border-2 border-none rounded-lg bg-gray-500">
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className="mr-2 p-2 border-2 border-none rounded-lg bg-gray-500">
        <Link href="/forest">
          <a>Forest</a>
        </Link>
      </li>
      <li className="mr-2 p-2 border-2 border-none rounded-lg bg-gray-500">
        <Link href="/volcano">
          <a>Volcano</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Sea;
