export default function ResumePage() {
  // Replace with your actual Google Drive preview URL
  const drivePreviewUrl = "https://drive.google.com/file/d/1Sw6ajp_Ehn1tsl0yO8-a3MgoOIuHZ7BU/preview";
  // Replace with path to your downloaded PDF in public folder
  const downloadUrl = "/roman_abramovich.pdf";

  return (
    <div className="space-y-6">
      {/* Header section */}
      <header>
        <div className="flex items-center justify-between gap-2 md:gap-14">
          {/* Page title */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none">resume</h1>

          {/* Download button */}
          <a
            href={downloadUrl}
            download="Roman_Abramovich_Resume.pdf"
            className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base lg:text-lg font-semibold bg-gray-900 dark:bg-gray-100 text-white dark:text-black rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors whitespace-nowrap"
          >
            download pdf
          </a>
        </div>
      </header>

      <hr className="w-full border-gray-200 dark:border-white-200 border-2.5 -mt-3" style={{ borderColor: 'var(--foreground)' }}/>

      {/* PDF Viewer */}
      <div className="w-full">
        <iframe
          src={drivePreviewUrl}
          className="w-full  h-[400px] md:h-[1000px] border border-gray-200 dark:border-gray-800 rounded-lg"
          allow="autoplay"
          title="Resume PDF"
        />
      </div>
    </div>
  );
}