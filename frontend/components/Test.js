import s from "./Text.module.css";

const Text = () => {
  return (
    // <div className="container">
    //   <div className={s.contBtn}>
    //     <div className={s.btnBubble}>
    //       <span>Bubble</span>
    //     </div>
    //   </div>
    // </div>
    <div className="container">
      <div className={s.main}>
        <div className={s.child}>
          <span>Bubble</span>
        </div>
      </div>
    </div>
  );
};

export default Text;
