


type ProgramFramesProps = {
  phi1Content: React.ReactNode;
  phi2Content: React.ReactNode;
};
export default function ProgramFrames({ phi1Content, phi2Content }: ProgramFramesProps) {
  return (
    <div className="w-full flex flex-col items-center px-2 md:px-4">
      {/* PHIÊN 1 */}
      <h2 className="session-title text-xl font-bold mt-6 mb-3 uppercase text-center">
        Phiên thứ nhất
      </h2>

      <div className="program-detail-box max-w-[650px] w-full border border-gray-300 rounded-xl p-4 md:p-6 bg-white overflow-hidden">
        <div className="whitespace-pre-wrap break-words text-base leading-relaxed">
          {phi1Content}
        </div>
      </div>

      {/* PHIÊN 2 */}
      <h2 className="session-title text-xl font-bold mt-10 mb-3 uppercase text-center">
        Phiên thứ hai
      </h2>

      <div className="program-detail-box max-w-[650px] w-full border border-gray-300 rounded-xl p-4 md:p-6 bg-white overflow-hidden">
        <div className="whitespace-pre-wrap break-words text-base leading-relaxed">
          {phi2Content}
        </div>
      </div>
    </div>
  );
}

/* CSS bổ sung trong globals.css hoặc tailwind layer */
/*
.session-title {
}

.program-detail-box {
}

@media (max-width: 480px) {
  .program-detail-box {
    max-width: 90%;
    padding: 10px 14px;
  }
}
*/
