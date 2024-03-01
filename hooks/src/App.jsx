import { useEffect,useState } from 'react';
import './App.css'
import DataApp from './data-component'
import useIsOnline from './useOnlineHook'
import useMousePointer from './useMousePointer';
import useInterval from './useInterval';
import SearchBar from './debouncedHookComponent';
function App() {
  const [count, setCount] = useState(0);
  const isOnline = useIsOnline();
  const pointerPos = useMousePointer();
  useInterval(
    () => {
      setCount((c) => c + 1);
    },
    1000
  );
  return (
    <>
    {
    // display && <MyComponent />
    isOnline ? <div>Online</div> : <div>Offline</div>
    }
    {
      'Mouse poisition is  at: ' + pointerPos.x + ', '+pointerPos.y
    }
    <div>
    
      Count is: {count}
    
    </div>
    <DataApp />

    {/* Debouncing means deferring an expensive operation for some time */}
    <SearchBar />
    </>
  )
}

export default App

// function MyComponent(){
//   useEffect(()=>{
//     console.log("Component mounted");
//     return()=>{
//       console.log("Component unmounted");
//     }
//   },[])
//   return(
//     <>
//       <div>From inside my component</div>
//     </>
//   )
// }