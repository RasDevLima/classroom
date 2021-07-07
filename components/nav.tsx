import { NextPage } from 'next';
import Link from 'next/link';

const Nav: NextPage = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline">Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
