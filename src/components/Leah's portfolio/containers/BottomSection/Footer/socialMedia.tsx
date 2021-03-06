import React from 'react';
import { SocialIcons } from './SocialIcons';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
interface Props {}

export const SocialMedia: React.FC<Props> = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-5 cursor-pointer">
        <Link to="/" onClick={toggleHome} className="text-2xl font-bold">
          Leah
        </Link>
        <small className="mb-1 tracking-wide text-bg">
          helloleah23@gmail.com
        </small>
      </div>
      <SocialIcons />
      <small className="mt-1 tracking-wide capitalize">
        copyright © {new Date().getFullYear()} leah All rights reserved.
      </small>
    </div>
  );
};
