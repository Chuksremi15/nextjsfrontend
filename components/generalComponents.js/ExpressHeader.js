import Header from "./header";

function ExpressHeader() {
  //get the current express user from local storage and do sets global app state to logged in

  return (
    <div className="sticky top-0 z-50">
      <Header />
    </div>
  );
}

export default ExpressHeader;
