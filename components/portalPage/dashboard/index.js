import Balance from "./Balance";

function Dashboard() {
  return (
    <div className="container grid gap-2">
      <h1
        className="
            text-lg text-green-black font-bold
             font-[Poppins]
            "
      >
        E-Wallet
      </h1>
      <div
        className="
       grid-flow-row-dense
        grid gap-2 md:gap-4
        grid-cols-3 p-2
        "
      >
        <Balance />
      </div>
    </div>
  );
}

export default Dashboard;
