// app/page.tsx

export default function Page() {
  return (
    <div className="space-y-6">
      {/* header section */}
      <header>
      {/* name + born/raised row */}        
        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
          <div className="flex flex-col md:flex-row md:items-baseline">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none">roman</h1>
            <h6 className="text-lg md:text-xl md:ml-2" style={{ color: 'var(--lastname-text)' }}>abramovich</h6>
          </div>
        </div>

        {/* vertical stack on mobile, horizontal on desktop */}
        <div className="mt-4 md:mt-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
          
          {/* location info */}
          <div className="flex flex-col gap-1.5 text-sm md:text-lg lg:text-lg xl:text-2xl">
            <div className="flex gap-2">
              <span className="text-gray-600 dark:text-gray-400 w-14">born:</span>
              <span className="xl:ml-12">buenos aires, argentina</span>
            </div>
            <div className="flex md:mt-4 gap-2 ">
              <span className="text-gray-600 dark:text-gray-400 w-14 ">raised:</span>
              <span className="xl:ml-12">toronto, canada</span>
            </div>
          </div>

          {/* links */}
          <div className="flex flex-col gap-2.5 md:items-end md:ml-auto">
            <div className="inline-flex items-center gap-2 " style={{ color: 'var(--status-text)' }}>
              <span className="text-sm md:text-lg md:text-base lg:text-lg xl:text-2xl font-medium py-1">seeking 2026 internships</span>
            </div>
            
            <div className="flex gap-4 text-sm md:text-lg md:text-base lg:text-lg xl:text-2xl">
              <a 
                href="https://github.com/Romanabramovich" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-gray-600 dark:hover:text-gray-400 transition-colors py-1" 
                style={{ color: 'var(--github-text)' }}
              >
                github
              </a>
              <a 
                href="https://www.linkedin.com/in/roman-abramovich-a49bb92a5/" 
                target="_blank" 
                rel="noopener" 
                className="underline hover:text-gray-600 dark:hover:text-gray-400 transition-colors py-1" 
                style={{ color: 'var(--linkedin-text)' }}
              >
                linkedin
              </a>
            </div>
          </div>
        </div>
      </header>

      <hr className="w-full border-2.5" style={{ borderColor: 'var(--foreground)' }}/>
      
      {/* page content */}
      <div className="space-y-3">
        <div className="space-y-3">
          
          <ol style={{ listStyleType: 'lower-roman', color: 'var(--indent-text)' }} className="text-md list-outside pl-4 space-y-3 md:space-y-8 lg:space-y-8 xl:space-y-10 lg:text-2xl xl:space-y-10 2xl:space-y-16 xl:text-xl 2xl:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>computer science student at toronto metropolitan university ('27 grad)</li>
            <li>just a guy building cool things to make people's lives easier</li>
            <li>outside of vscode, you can find me golfing or on the basketball court</li>
            <li>haha get it i used roman numerals list numbering because of my name</li>
          </ol>
        </div>
        
        
      </div>
    </div>
  );
}