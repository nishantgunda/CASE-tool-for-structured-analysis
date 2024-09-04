'use client';
import { useState,useCallback } from 'react';
import { Button } from 'flowbite-react';
import Sidebar from './components/sidebar.jsx';
import Navbar from "./components/Navbar";
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineArrowRight } from "react-icons/hi";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';  

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };
  const initialNodes = [
    { id: '1', position: { x: 300, y: 200 }, data: { label: '1' } },
    { id: '2', position: { x: 300, y: 300 }, data: { label: '2' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  return (
    <div className='flex'>
      <div className='mt-10'>
        <Navbar />
      </div>
      <div>
        <div className={`fixed top-10 left-0 h-full transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <Sidebar SidebarStatus={isSidebarOpen} />
        </div>
        <Button 
          onClick={toggleSidebar} 
          className={"bg-amber-400 hover:bg-amber-500 fixed z-10 p-2 rounded-full transition-all duration-300 ease-in-out"}
          style={{
            top: '50%',
            left: isSidebarOpen ? '14.8rem' : '-1.2rem',
          }}
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <HiOutlineArrowRight size={24} />}
        </Button>
      </div>
      
      <div style={{ width: '2000vw', height: '200vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />    </div>
        
    </div>
  );
}