import { aboutData } from "../constant/data";
import Information from "../components/info/Information";

const AboutPage = () => {
  return (
    <div className="py-4">
      <Information data={aboutData} />
    </div>
  );
};

export default AboutPage;
