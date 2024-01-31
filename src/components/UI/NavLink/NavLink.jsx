'use client';

import Link from 'next/link';

import navLinkStyles from './NavLink.module.css';

const NavLink = ({ to, children }) => {
  return (
    <Link
      href={to}
      className={navLinkStyles.navlink}
    >
      {children}
    </Link>
  );
};

export default NavLink;