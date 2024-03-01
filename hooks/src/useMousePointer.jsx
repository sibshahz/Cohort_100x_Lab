import { useEffect, useState } from 'react'

function useMousePointer() {
  const [pointerPos, setPointerPos] = useState(0);

  const handleMouseMove=(e)=>{
    setPointerPos({x:e.clientX,y:e.clientY})
  }
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

  }, [])
  
  return pointerPos;
}

export default useMousePointer;