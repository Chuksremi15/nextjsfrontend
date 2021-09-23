const Support = () => (
  <p
    className="
        text-green-black font-medium lg:font-semibold 
        text-base px-6 py-4 bg-gray-100 
        w-60 md:w-80 mr-auto rounded-xl 
        rounded-bl-none
        "
  >
    helllo when you high like this, we could go to the west coast take it to the
    west coast
  </p>
);

const Customer = () => (
  <p
    className="
        bg-green-main font-medium lg:font-semibold 
        text-base px-6 py-4 text-white
        w-60 md:w-80 ml-auto rounded-xl rounded-br-none
        "
  >
    helllo when you high like this, we could go to the west coast take it to the
    west coast
  </p>
);

function MessageScreen({ messagesEndRef }) {
  return (
    <div className="space-y-4  h-[36rem] overflow-y-scroll scrollbar-hide ">
      {Array(12)
        .fill()
        .map((_, i) => (i % 2 === 0 ? <Support /> : <Customer />))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageScreen;
