import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-primary p-4">
        <Link href="/">
            <div className="text-tertiary hover:text-secondary font-bold text-2xl">Ian Sabolik</div>
        </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/projects">
              <div className="text-tertiary hover:text-secondary cursor-pointer">Projects</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="text-tertiary hover:text-secondary cursor-pointer">About</div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className="text-tertiary hover:text-secondary cursor-pointer">Contact</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
