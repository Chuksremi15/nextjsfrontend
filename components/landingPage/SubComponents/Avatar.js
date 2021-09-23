function Avatar({ url, className }) {
  return (
    <img
      src={url}
      loading="lazy"
      className={`
      h-12 w-12 rounded-full cursor-pointer 
      transition duration-150 transform hover:scale-110 
      ${className}
      `}
      alt="profile pic"
    />
  );
}

export default Avatar;
