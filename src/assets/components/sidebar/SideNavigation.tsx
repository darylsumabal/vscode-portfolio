import React from "react";
import { sideBarNav } from "./sidebarData";
import { NavLink } from "react-router-dom";

type SvgIcons = {
  svgString: string;
};

const SvgIcon = ({ svgString }: SvgIcons) => {
  return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
};
const SideNavigation: React.FC = () => {
  return (
    <aside className="flex  flex-col justify-between items-center p-3 h-full">
      <div className="space-y-6">
        {sideBarNav.slice(0, 5).map((items) => (
          <div key={items.id}>
            <NavLink
              to={items.slug}
              className={({ isActive }) =>
                isActive ? "fill-secondary" : "fill-[#6A737D] hover:fill-white"
              }
            >
              <SvgIcon svgString={items.svg} />
              <span className="sr-only">{items.name}</span>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="space-y-6">
        {sideBarNav.slice(5, 7).map((items) => (
          <div key={items.id}>
            <NavLink
              to={items.slug}
              className={({ isActive }) =>
                isActive ? "fill-secondary" : "fill-[#6A737D]"
              }
            >
              <SvgIcon svgString={items.svg} />
              <span className="sr-only">{items.name}</span>
            </NavLink>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideNavigation;
