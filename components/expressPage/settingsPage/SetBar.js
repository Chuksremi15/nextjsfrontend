import { useExpressSetTabState } from "../../../store";
import SetTab from "./SetTab";

function SetBar({ tabData }) {
  const { currentId, setCurrentId } = useExpressSetTabState();
  return (
    <div
      className="
        max-w-lg w-[95%] m-auto p-1 mb-4
        bg-gray-200 rounded-md flex items-center
        "
    >
      {tabData?.map(({ name, id }) => (
        <SetTab
          name={name}
          key={id}
          id={id}
          setCurrentId={setCurrentId}
          currentId={currentId}
          express
        />
      ))}
    </div>
  );
}

export default SetBar;
