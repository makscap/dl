import s from "./OurClientsWithText.module.css";
import OurClients from "../../SharedComponents/OurClients/OurClients";

const OurClientsWithText = () => {
  const btnAlert = () => {
    return alert("In developing ...");
  };

  return (
    <section className={s.section}>
      <div className="container">
        <h2 className={s.title}>
          Pridajte sa k tým, ktorí už s nami spolupracujú
        </h2>
      </div>

      <OurClients />
      <div className="container">
        <div className={s.btnBox}>
          <button className={s.btn} onClick={btnAlert}>
            KONTAKTOVAŤ
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurClientsWithText;
