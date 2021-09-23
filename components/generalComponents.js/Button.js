function Button({ text, className, onClick, Icon, IconClass }) {
  return (
    <div
      onClick={() => onClick && onClick()}
      className={`
       md:px-6  px-4 py-2 font-normal
       rounded-lg font-[DM Sans] text-xs md:text-sm 
       lg:text-base lg:font-semibold  text-center
       cursor-pointer ${className} flex items-center 
       `}
    >
      {Icon && <Icon className={`h-6 mr-2 ${IconClass}`} />}
      <p className="">{text}</p>
    </div>
  );
}

export default Button;
