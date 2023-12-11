export default function Navbar() {
  const links = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/",
    },
    {
      id: 3,
      title: "Fixtures",
      link: "/",
    },
    {
      id: 4,
      title: "Scores",
      link: "/",
    },
  ];
  return (
    <nav className="fixed bg-black h-16 w-full text-white items-center flex justify-between">
      <div className="px-4 animate-fade-up animate-once animate-duration-[750ms] animate-ease-in-out">
        <a href="/" className="font-semibold text-2xl uppercase">
          Footy Hero
        </a>
      </div>
      <ul className="flex justify-start px-4 animate-fade-down animate-once animate-duration-[750ms] animate-ease-in-out">
        {links.map(({ id, title, link }) => (
          <li key={id} className="mx-4">
            <a href={link}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
