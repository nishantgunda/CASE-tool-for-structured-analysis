'use client';
import { useState,useCallback } from 'react';
import { Button } from 'flowbite-react';
import Sidebar from './components/sidebar.jsx';
import Navbar from "./components/Navbar";
import { FaBars, FaTimes } from 'react-icons/fa';
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
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
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