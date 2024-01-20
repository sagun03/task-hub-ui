import useAuth from '../../hooks/useAuth';
import logo from '../../assets/task.png'
const Header = () => {
  const { user } = useAuth(); // Assuming you have an authentication context or hook

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500 p-1 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* <h1 className="text-white text-2xl font-bold"></h1> */}
        <img src={logo} className='w-48' />
        <nav className="text-xl font-semibold flex space-x-4">
          <ul className="flex space-x-4">
            <li className="text-white">Dashboard</li>
            <li className="text-white">Tasks</li>
            <li className="text-white">Profile</li>
          </ul>
          <div className="text-white">
            {user && (
              <>
                <span className="mr-2">Welcome, {user?.name}</span>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
