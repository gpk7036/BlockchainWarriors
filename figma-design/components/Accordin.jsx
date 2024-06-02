"use client";
import { useState } from 'react';

export function Accordion() {
  const [open, setOpen] = useState([true, false, false, false]);

  const toggleOpen = (index) => {
    setOpen((prevState) => prevState.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse" className='text-white'>
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className={`flex justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded={open[0]}
          aria-controls="accordion-collapse-body-1"
          onClick={() => toggleOpen(0)}
        >
            <p>1</p>
            <p>Why choose "Savior"?</p>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform ${open[0] ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`${open[0] ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
        </div>
      </div>

      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
          data-accordion-target="#accordion-collapse-body-2"
          aria-expanded={open[1]}
          aria-controls="accordion-collapse-body-2"
          onClick={() => toggleOpen(1)}
        >
          <p>2</p>
            <p>Why is the IDO duration so long?</p>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform ${open[1] ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className={`${open[1] ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
        </div>
      </div>

      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
          data-accordion-target="#accordion-collapse-body-3"
          aria-expanded={open[2]}
          aria-controls="accordion-collapse-body-3"
          onClick={() => toggleOpen(2)}
        >
          <p>3</p>
            <p>When will trading go live?</p>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform ${open[2] ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className={`${open[2] ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-4">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
          data-accordion-target="#accordion-collapse-body-4"
          aria-expanded={open[3]}
          aria-controls="accordion-collapse-body-4"
          onClick={() => toggleOpen(3)}
        >
          <p>4</p>
            <p>When can we claim the tokens?</p>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform ${open[3] ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-4"
        className={`${open[3] ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-4"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          After the IDO concludes, you can claim the tokens on our official website.
          </p>
        </div>
      </div>
    </div>
  );
}
