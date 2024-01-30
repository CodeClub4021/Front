import React from "react"
import ShownStar from "./shownStar.jsx";
import HiddenStart from "./hiddenStart.jsx";

export default function Rate({rateNumbeer}) {
    const ariaLabel = `Rating: ${rateNumbeer} out of 5 stars`;
    return (
        <div className="flex flex-col items-center gap-2">
            {/*rating*/}
            <span className="flex items-center gap-1 rounded text-sm text-slate-500">
          <span
              className="flex gap-1 text-amber-400"
              role="img"
              aria-label={ariaLabel}
          >
            {[1, 2, 3, 4, 5].map((value, index) => {
                    return value <= rateNumbeer ? <div key={index}><ShownStar/></div> : <div key={index}><HiddenStart/></div>
            })}
          </span>
          <span>{rateNumbeer} out 5</span>
        </span>
        </div>
    )
}
