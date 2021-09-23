import CallCenter from "../generalComponents.js/CallCenter";
import UserLog from "../generalComponents.js/UserLog";

function CallGrid() {
  return (
    <div
      className="
        container grid-flow-row-dense
        grid gap-2 md:gap-4 
        lg:gap-6 grid-cols-3 p-4
        "
    >
      <CallCenter
        title="Customer Support"
        desc="Need help with anything?"
        btn="Call Now"
        href="support"
      />
      <CallCenter
        title="Request a prescription"
        desc="Call an in-house pharmacist"
        btn="Call Now"
        href="prescriptions"
        className="order-last sm:order-first"
      />
      <CallCenter
        title="Get consultation"
        desc="Call an in-house doctor "
        btn="Call Now"
        href="prescriptions"
        className="inline"
      />
      <UserLog className="hidden" />
    </div>
  );
}

export default CallGrid;
