"use client";

import { useState } from "react";
import { Trophy, Medal, Star } from "lucide-react";

export default function Accomplishments() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  return (
    <section id="accomplishments" className="py-32 px-6 md:px-12 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 flex flex-col items-center">
          <Trophy className="w-16 h-16 text-black mb-6" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            PLAYER ACCOMPLISHMENTS
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed text-gray-800">
            Over the years, Transform Tennis Academy (TTA) has produced some of the most promising tennis players in the country. Our structured training programs and competitive environment have helped players achieve success at national and international levels.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-gray-50 border border-gray-200 p-10 hover:bg-gray-100 transition-colors text-center">
            <div className="text-6xl font-black text-black mb-4">60+</div>
            <div className="text-2xl font-bold tracking-tight uppercase">Nationally Ranked Players</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-10 hover:bg-gray-100 transition-colors text-center">
            <div className="text-6xl font-black text-black mb-4">20+</div>
            <div className="text-2xl font-bold tracking-tight uppercase">Internationally Ranked Players</div>
          </div>
        </div>

        {/* Highlights 2025 */}
        <div className="mb-24">
          <h3 className="text-3xl font-black mb-12 text-center border-b border-gray-300 pb-6 uppercase tracking-tight">Highlights</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* National Champions */}
            <div className="bg-white p-8 border border-gray-200 shadow-sm border-t-4 border-t-black">
              <h4 className="text-xl font-bold mb-6 flex items-center text-black uppercase tracking-wide">
                <Medal className="w-6 h-6 mr-3" /> National Champions
              </h4>
              <ul className="space-y-4 font-normal text-gray-800">
                <li className="flex items-center gap-4 border-b border-gray-100 pb-3">
                  <img
                    src="/images/transform-tennis/champ-gandharv.jpg"
                    alt="Gandharv Kothapalli"
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-gray-200 cursor-pointer hover:opacity-80 transition"
                    onClick={() => setPreviewImage("/images/transform-tennis/champ-gandharv.jpg")}
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-black">Gandharv Kothapalli</span>
                    <span className="text-sm font-light text-gray-600">MCC Clay court U18 Nationals 2025 - Winner</span>
                  </div>
                </li>
                <li className="flex items-center gap-4 border-b border-gray-100 pb-3">
                  <img
                    src="/images/transform-tennis/champ-puneet-v2.jpg"
                    alt="Puneet M"
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-gray-200 cursor-pointer hover:opacity-80 transition"
                    onClick={() => setPreviewImage("/images/transform-tennis/champ-puneet-v2.jpg")}
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-black">Puneet M</span>
                    <span className="text-sm font-light text-gray-600">MSLTA Nationals 2024 U12 - Winner</span>
                  </div>
                </li>
                <li className="flex items-center gap-4 border-b border-gray-100 pb-3">
                  <img
                    src="/images/transform-tennis/champ-harshini.jpg"
                    alt="Harshini Nagaraj"
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-gray-200 cursor-pointer hover:opacity-80 transition"
                    onClick={() => setPreviewImage("/images/transform-tennis/champ-harshini.jpg")}
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-black">Harshini Nagaraj</span>
                    <span className="text-sm font-light text-gray-600">Fenesta Nationals 2025 U18 - Winner</span>
                  </div>
                </li>
                <li className="flex items-center gap-4 pt-1">
                  <img
                    src="/images/transform-tennis/champ-snigdha.jpg"
                    alt="Snigdha Kanta"
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-gray-200 cursor-pointer hover:opacity-80 transition"
                    onClick={() => setPreviewImage("/images/transform-tennis/champ-snigdha.jpg")}
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-black">Snigdha Kanta</span>
                    <span className="text-sm font-light text-gray-600">Clay court Nationals 2025 U16 - Winner</span>
                    <span className="text-sm font-light text-gray-600">Fenesta Nationals 2025 U18 - Runner-up</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* National Rankings */}
            <div className="bg-white p-8 border border-gray-200 shadow-sm border-t-4 border-t-black max-h-[400px] overflow-y-auto custom-scrollbar">
              <h4 className="text-xl font-bold mb-6 flex items-center text-black uppercase tracking-wide">
                <Star className="w-6 h-6 mr-3" /> National Rankings
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center bg-gray-50 p-3"><span className="text-black font-semibold">Puneet M</span> <span className="text-orange-600 font-bold">No.1 (U14)</span></li>
                <li className="flex justify-between items-center bg-gray-50 p-3"><span className="text-black font-semibold">Arjun Manikandan</span> <span className="text-orange-600 font-bold">No.3 (U14)</span></li>
                <li className="flex justify-between items-center bg-gray-50 p-3"><span className="text-black font-semibold">Jahnavi Tammineedi</span> <span className="text-orange-600 font-bold">No.7 (U14)</span></li>
                <li className="flex justify-between items-center bg-gray-50 p-3"><span className="text-black font-semibold">Aradhya Kshitij</span> <span className="text-orange-600 font-bold">No.2 (U18)</span></li>
                <li className="flex justify-between items-center bg-gray-50 p-3"><span className="text-black font-semibold">Snigdha Kanta</span> <span className="text-orange-600 font-bold">No.3 (U18)</span></li>
                <li className="flex justify-between items-center bg-gray-50 p-3"><span className="text-black font-semibold">Harshini Nagaraj</span> <span className="text-orange-600 font-bold">No.8 (U18)</span></li>
              </ul>
            </div>

            {/* International */}
            <div className="bg-white p-8 border border-gray-200 shadow-sm border-t-4 border-t-black">
              <h4 className="text-xl font-bold mb-6 flex items-center text-black uppercase tracking-wide">
                <Trophy className="w-6 h-6 mr-3" /> International
              </h4>
              <ul className="space-y-4 font-normal text-gray-800">
                <li className="flex flex-col border-b border-gray-100 pb-3">
                  <span className="font-bold text-black">Aradhya Kshitij</span>
                  <span className="text-xs text-orange-600 font-bold mb-1">World No.92 (Jan 2026)</span>
                  <span className="text-sm font-light text-gray-600">ITF Junior J60 & J200 Winner</span>
                </li>
                <li className="flex flex-col border-b border-gray-100 pb-3">
                  <span className="font-bold text-black">Snigdha Kanta</span>
                  <span className="text-sm font-light text-gray-600">ITF Junior J60 Winner</span>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <span className="font-bold text-black">Puneet M</span>
                  <span className="text-sm font-bold text-orange-600">Asian U14 Champ</span>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <span className="font-bold text-black">Madhav Dadhich</span>
                  <span className="text-sm font-bold text-orange-600">Asian U16 Champ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>

      {/* Lightbox Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-6 right-6 text-white text-3xl p-2 hover:opacity-70 transition z-10"
            aria-label="Close"
          >
            ✕
          </button>
          <div className="max-w-4xl w-full max-h-[90vh] flex items-center justify-center relative">
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
            />
          </div>
        </div>
      )}
    </section>
  );
}
