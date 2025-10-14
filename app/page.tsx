// app/page.tsx

export default function Page() {
  return (
    <div className="space-y-6">
      {/* header section */}
      <header>
        {/* name + born/raised row */}
        <div className="flex items-start md:items-center gap-2 md:gap-8">
          
          {/* page title */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none">roman</h1>

          {/* Right section: born/raised + status/links side by side on all sizes */}
          <div className="flex flex-row items-start md:items-center gap-2 md:gap-8 text-xs md:text-base mt-3 flex-1">
            {/* page description - vertically centered with 'roman' */}
            <div className="flex gap-2 md:gap-4">
              <div className="text-gray-600 dark:text-gray-400 space-y-1">
                <p>born:</p>
                <p>raised:</p>
              </div>
              <div className="space-y-1 text-[10px] sm:text-xs md:text-sm">
                <p className="whitespace-nowrap mt-1">buenos aires, argentina</p>
                <p className="whitespace-nowrap">toronto, canada</p>
              </div>
            </div>

            {/* status badge + social links */}
            <div className="flex flex-col items-start md:items-end md:ml-auto gap-1 ml-1 md:ml-0">
              {/* status badge */}
              <div className="flex items-center gap-1 md:gap-2" style={{ color: 'var(--status-text)' }}>
                <span className="text-xs md:text-sm whitespace-nowrap">seeking 2026 internship</span>
              </div>
              
              {/* social links */}
              <div className="flex gap-2 md:gap-4 text-xs md:text-sm">
                <a href="https://github.com/Romanabramovich" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 dark:hover:text-gray-400 transition-colors" style={{ color: 'var(--github-text)' }}>
                  github
                </a>
                <a href="https://www.linkedin.com/in/roman-abramovich-a49bb92a5/" target="_blank" rel="noopener" className="underline hover:text-gray-600 dark:hover:text-gray-400 transition-colors" style={{ color: 'var(--linkedin-text)' }}>
                  linkedin
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* last name row */}
        <h6 className="text-base md:text-xl pl-0 md:pl-44">abramovich</h6>
      </header>

      <hr className="w-full border-2.5" style={{ borderColor: 'var(--foreground)' }}/>
      
      {/* page content */}
      <div className="space-y-3">
        <div className="space-y-3">
          
          <ol style={{ listStyleType: 'lower-roman', color: 'var(--indent-text)' }} className="text-md list-outside pl-10.5 space-y-1 text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>computer science student at toronto metropolitan university ('27 grad)</li>
            <li>guy building cool things to make people's lives easier</li>
            <li></li>
          </ol>
        </div>
        
        
      </div>
    </div>
  );
}