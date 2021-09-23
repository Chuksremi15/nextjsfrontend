function Avatar({ className, src }) {
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      className={`
      flex-shrink-0 h-6 w-6 lg:h-8 lg:w-8 
      rounded-md lg:rounded-lg cursor-pointer 
      ${className}
      `}
    />
  );
}

export default Avatar;
