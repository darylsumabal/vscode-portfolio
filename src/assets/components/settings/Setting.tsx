import { useEffect, useState } from "react";
import { settingData } from "./settingData";
import Image from "../image/Image";

const Setting = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") ?? "synthwave"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 place-content-center place-items-center h-full ">
      {settingData.map((data) => (
        <div
          key={data.id}
          className="text-center flex flex-col items-center justify-center space-y-4"
        >
         
          <Image
            loading="lazy"
            path={`portfolio/${data.image}`}
            alt={data.image}
            width={96}
            height={96}
            lqip={{ active: true, quality: 10 }}
          />
          <div className="flex flex-col">
            <span>{data.name}</span>
            <button
              className="bg-primary text-white p-1 text-sm font-semibold ease-in-out duration-150 hover:scale-105 hover:bg-accent"
              onClick={() => handleThemeChange(data.theme)}
            >
              Set Color Theme
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Setting;
