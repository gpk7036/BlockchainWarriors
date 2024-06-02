export default function Button({ label, withIcon }) {
    return (
      <div className="inline-block">
        <div className="bg-gradient-to-r from-[#ed0137] to-[#f05734] h-9 p-3 rounded-xl flex items-center ml-4 md:text-sm">
          <button className="flex">
            {label}
            {withIcon && <span className="ml-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span>}
          </button>
        </div>
      </div>
    );
  }
  