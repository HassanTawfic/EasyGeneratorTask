import logo from './assets/EasyGenerator_logo-v2.webp';
import { useAuth } from './Context/useAuth';

function App() {
  const { LogoutUser } = useAuth();
  return (
    <section className="bg-gray-800 min-h-screen flex flex-col gap-8 justify-center items-center px-4">
      <div className='bg-white rounded-[9rem] p-8'>
        <img src={logo} alt="EasyGenerator Logo" />
      </div>
      <h1 className='text-3xl font-bold text-white text-center'>Welcome to the App</h1>
      <a className='px-8 py-3 font-bold rounded text-white bg-green-900 hover:opacity-50' onClick={() => LogoutUser()}>Logout</a>
    </section>
  )
}

export default App
