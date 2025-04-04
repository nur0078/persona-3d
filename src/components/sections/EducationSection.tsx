export function EducationSection() {
  return (
    <div id="education" className="mt-24 scroll-mt-24">
      <h2 className="text-neutral-50 text-3xl font-bold mb-8 border-b border-neutral-800 pb-2">
        Education
      </h2>
      <div className="bg-black/60 p-5 rounded-xl border border-neutral-800">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h3 className="font-medium text-neutral-100 text-lg">
            Bachelor of Information Technology
          </h3>
          <div className="flex items-center mt-1 md:mt-0">
            <span className="text-neutral-400 text-sm">
              Federation University
            </span>
            <span className="mx-2 text-neutral-600">•</span>
            <span className="text-neutral-400 text-sm">
              Ballarat, Australia • 2022
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 