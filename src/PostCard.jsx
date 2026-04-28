import React, { useState } from "react";

function PostCard(props) {
  const { id, userId, title, body } = props;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div 
      className={`
        /* KUNCI 2: h-full agar semua kartu tingginya rata, p-4 agar padding pas */
        flex flex-col h-full justify-between p-4 rounded-lg text-center font-body
        bg-white border border-transparent shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        transition-all duration-300 transform 
        hover:scale-105 hover:border-defaultBlack hover:bg-pink-100
      `}
    >
      <div className="flex flex-col flex-grow">
        <h2 className="text-[13px] font-bold text-defaultBlack mb-2 capitalize leading-snug font-poppins">
          {title}
        </h2>
        
        <p className="text-[11px] text-secondary leading-relaxed mb-4">
          {body}
        </p>
      </div>

      <button
        onClick={() => !isClicked && setIsClicked(true)}
        className={`
          mt-auto py-1.5 px-3 rounded text-[12px] font-semibold text-white transition-colors duration-300
          ${isClicked 
            ? "bg-special-red2 hover:bg-special-red" 
            : "bg-gray-01 hover:bg-gray-02"
          }
        `}
      >
        {isClicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;