import s from "./OurWork.module.css";

const OurWork = ({ isTrue, setIsTrue }) => {
  return (
    <section className={s.section}>
      {isTrue && (
        <div className="container ">
          <h3 className={s.title}>Realizovali sme</h3>
          <div className="flex justify-start">
            <div className="w-[500px] h-[300px] bg-black mr-[20px]"></div>

            <div className="w-[500px] h-[300px] bg-black"></div>
          </div>
        </div>
      )}
      {!isTrue && (
        <div className={s.sectionSecond}>
          <div className="container ">
            <h3 className={s.title}>Realizovali sme</h3>
            <div className="flex justify-start">
              <div className="w-[500px] h-[300px] bg-black mr-[20px]"></div>

              <div className="w-[500px] h-[300px] bg-black"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurWork;
