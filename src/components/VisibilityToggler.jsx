import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";

const toggleStyle = {
  true: "after:translate-x-full after:border-white peer-checked:bg-primary",
  false: "",
};

export function VisibilityToggler({ isToggled, onToggle }) {
  return (
    <label className="inline-flex items-center my-[34px] cursor-pointer">
      <div className="inline-flex items-center">
        {isToggled ? (
          <EyeIcon className="h-4 w-4 mr-3" />
        ) : (
          <EyeSlashIcon className="h-4 w-4 mr-3" />
        )}
        <span className="mr-3 text-sm font-medium text-white">Show/hide</span>
      </div>
      <div className="relative">
        <input
          type="checkbox"
          value={isToggled}
          className="sr-only peer"
          onChange={onToggle}
          checked={isToggled}
        />
        <div
          className={`w-9 h-5 bg-white bg-opacity-10 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 ${toggleStyle[isToggled]} checked:bg-primary`}
        />
      </div>
    </label>
  );
}
