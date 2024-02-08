function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative w-full bottom-0 items-center mt-8 mb-2 bg-[#f4bb14] flex justify-center">
      <p className="text-2xl font-extrabold text-white">Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
