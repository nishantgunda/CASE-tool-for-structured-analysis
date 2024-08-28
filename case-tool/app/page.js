'use client';
import { useState } from 'react';
import { Button } from 'flowbite-react';
import Sidebar from './components/sidebar.jsx';
import Navbar from "./components/Navbar";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <div className='flex'>
      <div className='mt-10'>
        <Navbar />
      </div>
      <div>
        <div className={`fixed top-20 left-0 h-full transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <Sidebar SidebarStatus={isSidebarOpen} />
        </div>
        <Button 
          onClick={toggleSidebar} 
          className="bg-amber-400 fixed top-25 left-5 z-10 p-2 rounded-full"
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Button>
      </div>
    </div>
  );
}