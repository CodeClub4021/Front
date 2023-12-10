import React from "react";
import ShownStar from "./shownStar.jsx";
import HiddenStart from "./hiddenStart.jsx";

export default function Rate({ rateNumbeer }) {
  const ariaLabel = `Rating: ${rateNumbeer} out of 5 stars`;
  return (
    <div className="flex flex-col items-center gap-2">
      {/*rating*/}
      <span className="flex items-center gap-1 rounded text-sm  text-amber-400">
        <span
          className="flex gap-1 text-slate-500"
          role="img"
          aria-label={ariaLabel}
        >
          {[1, 2, 3, 4, 5].map((value) => {
            return value <= rateNumbeer ? <ShownStar /> : <HiddenStart />;
          })}
        </span>
      </span>
    </div>
  );
}
