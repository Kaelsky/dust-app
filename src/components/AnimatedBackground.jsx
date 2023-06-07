import DustLogo from "../assets/onlydust-title.svg";

function AnimatedScrollLane({ reverse = false }) {
  const scrollAnimations = {
    false: "animate-scroll",
    true: "animate-scrollReverse",
  };

  return (
    <div className="marquee gap-12 relative flex overflow-hidden select-none">
      <ul
        className={`marquee-content flex shrink-0 justify-around gap-12 min-w-full ${scrollAnimations[reverse]}`}
      >
        <li>
          <img src={DustLogo} alt="onlydust" className="h-[40vh]" />
        </li>
        <li>
          <img src={DustLogo} alt="onlydust" className="h-[40vh]" />
        </li>
        <li>
          <img src={DustLogo} alt="onlydust" className="h-[40vh]" />
        </li>
        <li>
          <img src={DustLogo} alt="onlydust" className="h-[40vh]" />
        </li>
      </ul>

      <ul
        aria-hidden="true"
        className={`marquee-content flex shrink-0 justify-around gap-12 min-w-full ${scrollAnimations[reverse]}`}
      >
        <li>
          <img src={DustLogo} alt="onlydust" className="h-[40vh]" />
        </li>
        <li>
          <img src={DustLogo} alt="onlydust" className="h-[40vh]" />
        </li>
        <li>
          <img src={DustLogo} alt="onlydust" className="h-[40vh]" />
        </li>
        <li>
          <img src={DustLogo} alt="onlydust" className="h-[40vh]" />
        </li>
      </ul>
    </div>
  );
}

export function AnimatedBackground() {
  return (
    <div
      className={`opacity-[.08] bg-gradient-to-br from-darkblue from-10% to-white to-70% absolute w-[200vw] h-[200vh] select-none pointer-events-none  transition-all ease-in-out duration-300 z-[0]`}
    >
      <div className="rotate-[-30deg]">
        <AnimatedScrollLane />
        <AnimatedScrollLane reverse />
        <AnimatedScrollLane />
        <AnimatedScrollLane reverse />
        <AnimatedScrollLane />
      </div>
    </div>
  );
}
