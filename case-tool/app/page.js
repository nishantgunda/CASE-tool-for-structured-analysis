'use client';

import { useState } from 'react';
import { Button } from 'flowbite-react';
import Sidebar from './components/sidebar.jsx';
import Navbar from "./components/Navbar";
export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <div>
      <Navbar/>
      {isSidebarOpen && (
        <Sidebar SidebarStatus={isSidebarOpen} />
      )}
      <Button onClick={toggleSidebar} className="bg-amber-400">
        {isSidebarOpen ? 'CLOSE SIDEBAR' : 'OPEN SIDEBAR'}
      </Button>
    </div>
  );
}
