import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { MdOutlineArrowRight } from 'react-icons/md';

interface BreadcrumbProps {
  items: {
    title: string;
    href: string;
  }[];
  className?: string;
}

export const Breadcrumb = ({ items, className }: BreadcrumbProps) => {
  const router = useRouter();
  const returnToPreviousPage = () => {
    router.push(
      items[items.length > 1 ? items.length - 2 : items.length - 1].href
    );
  };
  return (
    <div
      className={`flex items-center h-max gap-3 text-secondary-text ${className}`}
    >
      <BsArrowLeftCircle
        className="text-xl cursor-pointer"
        onClick={returnToPreviousPage}
      />
      {items.map((item, idx) => (
        <div key={item.href} className="flex items-center gap-2">
          {idx > 0 && <MdOutlineArrowRight />}
          <Link passHref href={item.href}>
            <span className="text-secondary-text text-sm cursor-pointer">
              {item.title}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};
