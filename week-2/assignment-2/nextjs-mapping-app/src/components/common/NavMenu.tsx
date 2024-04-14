import { Search, Sliders } from 'lucide-react';
import { AppConfig } from '#lib/AppConfig';

const NavMenu = () => {
  const navIconSize = AppConfig.ui.topBarIconSize;

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center w-full max-w-4xl px-4 py-2 bg-white shadow-md rounded-lg">
        <Search size={navIconSize} className="text-gray-500" />
        <input
          className="flex-grow px-4 py-2 text-lg bg-transparent border-none focus:outline-none"
          type="search"
          placeholder="Search for manufacturing resources..."
          // Apply full width
        />
        <button className="p-2 text-gray-500 bg-gray-200 rounded-full">
          <Sliders size={navIconSize} />
        </button>
      </div>
    </div>
  );
};

export default NavMenu;
