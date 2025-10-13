// app/page.tsx

export default function Page() {
  return (
    <div className="space-y-6">
      {/* header section */}
      <header>
        {/* name + born/raised row */}
        <div className="flex items-center gap-2 md:gap-8">
          
          {/* page title */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none">roman</h1>

          {/* page description - vertically centered with 'roman' */}
          <div className="flex gap-4 text-sm md:text-base mt-3">
            <div className="text-gray-600 dark:text-gray-400 space-y-1">
              <p>born:</p>
              <p>raised:</p>
            </div>
            <div className="space-y-1">
              <p>buenos aires, argentina</p>
              <p>toronto, canada</p>
            </div>
          </div>

          {/* status badge + social links */}
          <div className="ml-auto flex flex-col items-end gap-1 text-sm md:text-base mt-3">
            {/* status badge */}
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>seeking summer 2026 internship</span>
            </div>
            
            {/* social links */}
            <div className="flex gap-4">
              <a href="https://github.com/Romanabramovich" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                github
              </a>
              <a href="https://www.linkedin.com/in/roman-abramovich-a49bb92a5/" target="_blank" rel="noopener" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                linkedin
              </a>
            </div>
          </div>
        </div>

        {/* last name row */}
        <h6 className="text-xl text-gray-600 dark:text-gray-400 pl-44">abramovich</h6>
      </header>

      <hr className="w-full border-gray-200 dark:border-white-200 border-2.5"/>
      
      {/* page content */}
      <div className="space-y-3">
        <div className="space-y-3">
          <h6 className="text-lg font-semibold text-gray-600 dark:text-gray-400  tracking-wider">noun</h6>
          <ol style={{ listStyleType: 'lower-roman' }} className="text-md list-outside pl-10.5 space-y-1 text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>computer science student at toronto metropolitan university ('27 grad)</li>
            <li>just a guy who builds cool things to make peoples lives easier</li>
            <li>someone who loves learning and getting better everyday</li>
          </ol>
        </div>
        
        <div className="space-y-3">
          <h6 className="text-lg font-semibold text-gray-600 dark:text-gray-400  tracking-wider">adjective</h6>
          <ol style={{ listStyleType: 'lower-roman' }} className="text-md list-outside pl-10.5 space-y-1 text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>curious</li>
            <li>hardworking</li>
            <li>tall ... very tall (an entire 194 centimeters tall)</li>
          </ol>
        </div>
      </div>
    </div>
  );
}