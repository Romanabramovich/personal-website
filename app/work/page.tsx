// app/work/page.tsx

export default function Page() {
  return (
   <div className="space-y-6">
      {/* header section */}
      <header>
        {/* name + born/raised row */}
        <div className="flex items-center gap-2 md:gap-14">
          
          {/* page title */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none">work</h1>

          {/* page description - vertically centered with 'roman' */}
          <div className="flex gap-8 text-sm md:text-base mt-3">
            <div className="text-gray-600 dark:text-gray-400 space-y-1 ml-10">
              <p>internships:</p>
              <p>projects:</p>
            </div>
            <div className="space-y-1">
              <p>one ... and counting</p>
              <p>three ... and counting</p>
            </div>
          </div>

         
        </div>

        {/* last name row */}
        <h6 className="text-xl text-gray-600 dark:text-gray-400 pl-2">always looking for more</h6>
      </header>

      <hr className="w-full border-gray-200 dark:border-white-200 border-2.5"/>
      
      {/* page content */}
      <div className="space-y-3">
        <div className="space-y-3">
          <h6 className="text-sm font-semibold text-gray-600 dark:text-gray-400  tracking-wider">noun</h6>
          <ol style={{ listStyleType: 'lower-roman' }} className="text-sm list-outside pl-10.5 space-y-1 text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>computer science student at toronto metropolitan university ('27 grad)</li>
            <li>just a guy who builds cool things to make peoples lives easier</li>
            <li>someone who loves learning and getting better everyday</li>
          </ol>
        </div>
        
        <div className="space-y-3">
          <h6 className="text-sm font-semibold text-gray-600 dark:text-gray-400  tracking-wider">adjective</h6>
          <ol style={{ listStyleType: 'lower-roman' }} className="text-sm list-outside pl-10.5 space-y-1 text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>curious</li>
            <li>hardworking</li>
            <li>tall ... very tall (an entire 194 centimeters tall)</li>
          </ol>
        </div>
      </div>
    </div>
  );
}