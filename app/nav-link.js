"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const NavLink = ({ href, children }) => {
  const segment = useSelectedLayoutSegment();
  const isActive = href === `/${segment}`;

  return (
    <Link className={isActive ? "underline" : ""} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
