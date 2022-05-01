import Bar from "../components/Bar";
import { Skills, languages, tools, database, networks } from "../data";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">Academy of Technology (2017-2021)</p>
            <p className="my-3">
              I am currently pursuing B.tech in Computer Science Engineering
              from Academy of Technology
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
            <p className="font-semibold">Tata Consultancy Services</p>
            <p className="my-3">I don't know why I am doing this job</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <motion.div className=" carousel">
        <motion.div drag="x" className=" inner-carousel">
          <div className="grid gap-9 md:grid-cols-2 item">
            <div className="itemd">
              <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
              <div className="my-2 card">
                {languages.map((language, i) => (
                  <Bar value={language} key={i} />
                ))}
              </div>
            </div>
            <div className="itemk">
              <h5 className="my-3 text-2xl font-bold">
                Plateforme & Softwares
              </h5>
              <div className="my-2">
                {tools.map((tool, i) => (
                  <Bar value={tool} key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-9 md:grid-cols-2 item ">
            {/*database */}
            <div className="itemh">
              <h5 className="my-3 text-2xl font-bold">Database skills</h5>
              <div className="my-2">
                {database.map((tool, i) => (
                  <Bar value={tool} key={i} />
                ))}
              </div>
            </div>
            {/*network */}
            <div className="itemh">
              <h5 className="my-3 text-2xl font-bold">Network skills</h5>
              <div className="my-2">
                {networks.map((tool, i) => (
                  <Bar value={tool} key={i} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume;
