# Representation
1. Edge list
    - e.g {[0,1], [1,2], [1,3], [2,3]}
    - 0,1 connected; 1,2 connected
2. Ajacency List
    - {[1], [0,2,3], [1,3], [1,2]}  
    - node 0 connected to 1, node 1 connected to 0,2,3
3. Ajacency Matrix
    - {   
        [0,1,0,0],   
        [1,0,1,1],   
        [0,1,0,1],   
        [0,1,1,0]   
      }
    - 0,1 connnected ...
    
# Traverse
- DFS (depth first search)
    - use stack
- BFS (breadth first search)
    - use queue
    
    
### Eulerian Path & Eulerian Cycle
- Eulerian path: traverse every edge once, no need to end in the start point
- Eulerian cycle: traverse every edge only once and end up with the same node started with
- Not All have that 
- Hamiltonian path & Hamiltionian cycle
