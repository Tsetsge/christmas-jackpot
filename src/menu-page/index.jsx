import box3Image from "/box3.png";
import box2Image from "/box2.png";
import danceImage from "/dance.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { MdRemove } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const MenuPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="titleWrapper">
        <div className="titleRow">
          <h1 className="title">Шинэ</h1>
          <h1 className="title">жилийн</h1>
        </div>
        <div className="titleRow">
          <h1 className="title">мэнд</h1>
          <h1 className="title">хүргэе</h1>
        </div>
      </div>
      <div className="buttons">
        <button
          className="button"
          onClick={() => {
            navigate("/game1/config");
          }}
        >
          <img
            src={box2Image}
            alt="box"
            height={140}
            style={{
              margin: "-20px auto",
            }}
          />
          <h5>Эртэч шувуухай</h5>
          <p>Азтан эртэч шувуухай хэн бол</p>
        </button>

        <button
          className="button"
          onClick={() => {
            navigate("/game2/config");
          }}
        >
          <img
            src={danceImage}
            alt="box"
            height={100}
            style={{
              margin: "-20px auto",
              padding: "20px 0",
              objectFit: "contain",
            }}
          />
          <h5>Яг түүн шиг</h5>
          <p>Өрсөлдөөнт, хөгжөөнт тоглоом</p>
        </button>
        <button
          className="button"
          onClick={() => {
            navigate("/game3/config");
          }}
        >
          <img
            src={box3Image}
            alt="box"
            height={140}
            style={{
              margin: "0 auto",
              marginBottom: -40,
            }}
          />
          <h5>Азтан</h5>
          <p>Олон олон нууцлаг бэлгийн азтан</p>
        </button>
      </div>
      <MdRemove
        onClick={() => {
          localStorage.clear();
        }}
        color={"#eeeeee"}
        size={24}
        style={{
          cursor: "pointer",
          position: "absolute",
          bottom: 4,
          right: 16,
        }}
      />
    </>
  );
};

export default MenuPage;
