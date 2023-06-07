const leftPositions = {
  0: "left-0",
  1: "left-[20%]",
  2: "left-[40%]",
};

const opacities = {
  true: undefined,
  false: "opacity-40 transition-all ease-in-out hover:translate-y-[2px]",
};

export function Tabs({ className, activeTab, setActiveTab }) {
  return (
    <div className={className}>
      <ul className="tabs flex">
        {Array.from({ length: 3 }).map((_tab, index) => (
          <li
            key={index}
            className={`${
              opacities[index === activeTab]
            } w-1/5 cursor-pointer py-1.5 
`}
            onClick={() => setActiveTab(index)}
          >
            <button> Tab {index + 1}</button>
          </li>
        ))}
      </ul>
      <div className="tab-indicator-wrapper">
        <div className={`tab-indicator ${leftPositions[activeTab]}`} />
      </div>
    </div>
  );
}
