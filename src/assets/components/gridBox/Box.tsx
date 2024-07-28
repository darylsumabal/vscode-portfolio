import { useState } from "react";
import { dataBox, dataTitle } from "./boxData";

const Box = () => {
  const [hover, setHover] = useState<string | null>(null);

  const handleMouseHover = (id: string) => {
    setHover(id);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <div className="flex flex-col  gap-4 ">
      <div className="mt-4">
        {dataTitle.map((title) => (
          <span key={title.id} className="text-xl font-bold">
            {title.title}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-10  flex-1 ">
        {dataBox.map((items) => (
          <div
            key={items.id}
            className="bg-neutral rounded-3xl flex flex-col"
          >
            <div className="space-y-4">
              <img
                src={items.image}
                className="rounded-t-3xl object-cover w-full  h-44 2xl:h-80"
                alt=""
              />

              <div className="flex flex-col">
                <div className="space-y-2 px-4">
                  <h1 className="text-xl">{items.title}</h1>
                  <article className="text-sm text-white">{items.description}</article>
                </div>
                <div className="flex flex-wrap gap-4  p-4">
                  {items.stack.map((items) => (
                    <div
                      key={items.id}
                      className="rounded-full text-white text-xs px-2 py-1 border-2 cursor-pointer"
                      style={{
                        borderColor: items.color,
                        backgroundColor:
                          hover === items.id
                            ? items.color + "40"
                            : "transparent",
                      }}
                      onMouseEnter={() => handleMouseHover(items.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {items.language}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;
