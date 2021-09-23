import { usePortalSetTabState } from "../../../store";
import SetTab from "../../expressPage/settingsPage/SetTab";

function SetBar({ tabData }) {
  const { currentId, setCurrentId } = usePortalSetTabState();
  return (
    <div
      className="
        max-w-screen-lg w-[95%] m-auto p-1 mb-4 space-x-2
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
        />
      ))}
    </div>
  );
}

export default SetBar;
