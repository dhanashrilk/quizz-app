import logoImg from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Quiz logo" />
      <h1>Quiz</h1>
    </header>
  );
}
