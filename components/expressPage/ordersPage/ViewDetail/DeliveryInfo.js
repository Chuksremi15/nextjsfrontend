import Info from "./Info";

function DeliveryInfo() {
  return (
    <div className="grid gap-2 mb-4">
      <h1
        className="
            text-lg font-[DM Sans]
            font-bold text-green-black
            "
      >
        Delivery Info:
      </h1>
      <Info title="Order ID" desc="#2345hfjsd" />
      <Info title="Delivery Method: " desc="Standard Home Delivery" />
      <Info
        title="Shipping Address:"
        desc="St. Bernard Memorial Nchatancha, Nike."
      />
    </div>
  );
}

export default DeliveryInfo;
