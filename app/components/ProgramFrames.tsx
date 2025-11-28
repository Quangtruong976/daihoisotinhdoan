type ProgramFramesProps = {
  phi1Content: React.ReactNode;
  phi2Content: React.ReactNode;
};

export default function ProgramFrames({ phi1Content, phi2Content }: ProgramFramesProps) {
  return (
    <div className="w-full flex flex-col items-center px-2 md:px-4">

      {/* PHIÊN 1 */}
      <h2 className="session-title text-lg font-semibold mt-6 mb-3 text-left w-full max-w-[650px]">
        1. Phiên thứ nhất (bắt đầu lúc 15g00 ngày 18/12/2025)
      </h2>

      <div className="program-detail-box max-w-[650px] w-full border border-gray-300 rounded-xl p-4 md:p-6 bg-white">
        <div className="whitespace-pre-wrap break-words text-base leading-relaxed">
          {phi1Content}
        </div>
      </div>

      {/* PHIÊN 2 */}
      <h2 className="session-title text-lg font-semibold mt-6 mb-3 text-left w-full max-w-[650px]">
        2. Phiên thứ hai (bắt đầu lúc 8g00 ngày 19/12/2025)
      </h2>

      <div className="program-detail-box max-w-[650px] w-full border border-gray-300 rounded-xl p-4 md:p-6 bg-white">
        <div className="whitespace-pre-wrap break-words text-base leading-relaxed">
          {phi2Content}
        </div>
      </div>
    </div>
  );
}
