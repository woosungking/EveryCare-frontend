import { Link, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate("/login");
  };
  return (
    <div>
      <h1>mainpage</h1>
      <Link to={"/login"}>로그인 페이지로 가기</Link>
      <button onClick={goToLoginPage}>로그인 페이지로 가기</button>
    </div>
  );
}

export default Main;
