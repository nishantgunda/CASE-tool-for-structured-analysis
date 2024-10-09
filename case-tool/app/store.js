import {
    applyNodeChanges,
    applyEdgeChanges,
  } from '@xyflow/react';
  import { createWithEqualityFn } from 'zustand/traditional';
  
  const useStore = createWithEqualityFn((set, get) => ({
    nodes: [
      {
        id: 'root',
        type: 'mindmap',
        data: { label: 'React Flow Mind Map' },
        position: { x: 0, y: 0 },
      },
    ],
    edges: [],
    onNodesChange: (changes) => {
      set({
        nodes: applyNodeChanges(changes, get().nodes),
      });
    },
    onEdgesChange: (changes) => {
      set({
        edges: applyEdgeChanges(changes, get().edges),
      });
    },
  }));
  
  export default useStore;
  