import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface LinkBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function LinkBtn({ href, children, className, ...props }: LinkBtnProps) {
  return (
    <Link href={href} passHref>
      <button
        className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${className}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
}
