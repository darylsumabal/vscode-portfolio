import React from "react";

type infoData = {
  id: number;
  title: string;
  socials?: Record<string, string>;
};

type Prop = {
  data: infoData[];
};

const Information: React.FC<Prop> = ({ data }) => {
  return (
    <div>
      {data.map((datas: infoData) => (
        <div key={datas.id} className="flex flex-col gap-4">
          <span className="text-lg md:text-xl font-medium">{datas.title}</span>

          {datas.socials && (
            <ol className="mx-6 text-xl list-decimal">
              <div className="flex flex-col gap-2 mx-4">
                <li className="contact__list">
                  <span className="text-secondary text-base md:text-xl">
                    .social{" "}
                  </span>
                  &#123;
                </li>
                {Object.entries(datas.socials).map(([key, value]) => (
                  <li key={key} className="contact__list  text-base md:text-xl">
                    <span className="text-white c ">{key}:</span>
                    <span className="text-secondary">{value}</span>
                  </li>
                ))}
                <li className="contact__list">&#125;</li>
              </div>
            </ol>
          )}
        </div>
      ))}
    </div>
  );
};

export default Information;
