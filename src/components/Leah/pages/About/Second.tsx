import React, { useState } from 'react';
import { AfterCollege, Experience } from '../../model/AboutMe';
import { Dialog } from './Lingoda';
import { Pic } from './Pic';

interface Props {}

export const Second: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="h-fit">
      <div className="grid grid-rows-2 gap-4 divide-x md:m-20 sm:m-10 xl:grid-flow-col max-w-screen divide-slate-700">
        <div className="2xl:max-w-[400px] xl:max-w-[200px] w-full row-span-2 p-5 my-5 font-extrabold text-7xl xl:mx-10 2xl:ml-20 xl:text-right text-gray-300 h-fit">
          Before I started coding and after
        </div>
        <div className="py-5 text-lg leading-relaxed bg-transparent md:m-5 md:px-10 text-gray-700/25 md:ml-20 md:col-span-2 md:min-w-4xl indent-8 h-fit ">
          <p className="font-extrabold text-gray-300">
            Before I staretd coding
          </p>
          <hr className="mb-4" />
          {Experience.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col items-center rounded-lg lg:mx-5 sm:mx-0 p-7"
            >
              <p className="mb-3 font-bold sm:text-4xl">
                {experience.headline}
              </p>
              <p className="p-2">{experience.descr}</p>
              <p
                className={
                  experience.extra
                    ? 'self-start  text-gray-700 underline text-md underline-offset-1 '
                    : 'hidden'
                }
              >
                {experience.extra}
                <a
                  className="px-2 text-gray-700 bg-gray-300 rounded-full cursor-pointer"
                  href={experience.url}
                  target="_blank"
                  aria-label={experience.extra}
                >
                  {experience.click}
                </a>
              </p>
            </div>
          ))}
          {/* <Pic /> */}
        </div>
        <div className="py-5 text-lg leading-relaxed bg-transparent md:m-5 md:px-10 text-gray-700/25 md:ml-20 md:col-span-2 md:min-w-4xl indent-8 h-fit lg:-mt-30">
          <p className="font-extrabold text-gray-300">Coding journey</p>
          <hr className="mb-4" />
          {AfterCollege.map((detail) => (
            <div key={detail.id} className="flex flex-col m-5 p-7">
              <p className="p-2">{detail.descr}</p>
              <p
                className="text-gray-700 underline transition-all duration-300 ease-in-out cursor-pointer text-md underline-offset-1 "
                onClick={openModal}
              >
                {detail.extra}
              </p>
            </div>
          ))}
        </div>
      </div>
      {isOpen && <Dialog closeModal={closeModal} />}
    </div>
  );
};
