import SideNavigation from "../components/sidebar/SideNavigation";
import SideBar from "../components/sidebar/SideBar";

const SideBarPage = () => {
  return (
    <div className="flex ">
      <div>
        <SideNavigation />
      </div>
      <div>
        <SideBar />
      </div>
    </div>
  );
};

export default SideBarPage;
