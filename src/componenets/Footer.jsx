function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="absolute w-full bottom-0 items-center  bg-[#f4bb14] flex justify-center">
      <p className="text-2xl font-extrabold text-white">Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
