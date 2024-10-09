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
  Controls, Panel, NodeOrigin
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';  
import { shallow } from 'zustand/shallow';
import useStore, { RFState } from './store';



const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
});

const nodeOrigin = [0.5, 0.5];



export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  const { nodes, edges, onNodesChange, onEdgesChange } = useStore(
    selector,
    shallow,
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
         nodeOrigin={nodeOrigin}
         fitView
      >

<Controls showInteractive={false} />
<Panel position="top">React Flow Mind Map</Panel>

</ReactFlow>
            </div>
        
    </div>
  );
}