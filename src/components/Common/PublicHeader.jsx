const PublicHeader = () => {
  return (
      <header className="fixed top-0 left-0 w-full bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Task Hub</h1>
        <nav className="flex space-x-4">
        <ul className="flex space-x-4">
          <li className="text-white">Home</li>
          <li className="text-white">About</li>
          <li className="text-white">Contact</li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default PublicHeader;
