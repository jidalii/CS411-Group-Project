import React from 'react';
import '../tailwind.css'

function Login() {
  return (
    <div className='flex h-screen justify-center items-center' >
      <div className='text-center'>
        <h1 className="text-6xl text-spotify-green mb-4">
          Welcome to Music to Ticket
        </h1>
        <button 
          className="bg-spotify-green text-white px-5 py-2.5 inline-block text-lg m-1 cursor-pointer rounded-full font-bold"
          onClick={() => window.location.href='http://localhost:8000/auth/spotify'}
        >
          Login with Spotify
        </button>
      </div>
    </div>
  );
}

export default Login