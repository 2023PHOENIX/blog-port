import Link from "next/link";
import React from "react";
type NavItem = {
  label: String;
  path: String;
};

const navItem: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Blog", path: "/blog" },
];
const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <img src="/crafterCode.png" alt="Logo" className="h-16 w-16" />
      <ul className="flex space-x-6">
        {navItem.length > 0 && navItem.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
