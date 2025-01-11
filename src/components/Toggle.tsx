import { useState } from "react";

function Toggle() {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex justify-between border-b border-gray-300 overflow-x-auto scrollbar-hide ">
      {[
        "Overview",
        "Fundamentals",
        "News Insights",
        "Sentiments",
        "Team",
        "Technical",
        "Tokenomics",
      ].map((tabName) => (
        <div
          key={tabName}
          onClick={() => handleTabClick(tabName)}
          className={`cursor-pointer px-8 py-2 text-sm sm:text-base flex items-center  font-semibold ${
            activeTab === tabName
              ? "border-b-2 border-[#0052FE] text-[#0052FE]"
              : "border-none text-gray-600"
          }`}
        >
          <span className="whitespace-nowrap">{tabName}</span>
        </div>
      ))}
    </div>
  );
};
  
  export default Toggle;