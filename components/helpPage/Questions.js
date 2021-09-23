import onHelpPageData from "../../contents/onHelpPage";
import Question from "./Question";

function Questions() {
  return (
    <div
      className="
      w-full max-w-screen-md flex flex-col py-2 m-auto
      px-4 items-center mb-4 space-y-4
      "
    >
      {onHelpPageData.FAQ.map(({ que, ans }, i) => (
        <Question que={que} ans={ans} key={i} />
      ))}
    </div>
  );
}

export default Questions;
