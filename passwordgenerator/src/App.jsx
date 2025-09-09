import { useState ,useCallback,useEffect,useRef} from 'react'  //ye sare hook hai une import kiya
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [lenght ,setlenght] =useState(8)   //use of hook
  const [numberAllowed , setnumberAllowed] =useState(false)
  const [charAllowed ,setcharAllowed] =useState(false)
  const [password ,setpassword] = useState("")

  //useRef cook
  const passwordRef=useRef(null)
  const copypasswordtoclipboard=useCallback(()=>{
    passwordRef.current?.select()

    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str+="1234567890"
    }
    if(charAllowed){
      str+="@&"
    }
    for(let i=1;i<=lenght;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
    }

    setpassword(pass)

  } ,[lenght,numberAllowed,charAllowed,setpassword])

  useEffect(()=>{
    passwordGenerator()
  },[lenght,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto
      shadow-md rounded-lg px-4 my-10 text-orange-500 bg-gray-800'> 
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copypasswordtoclipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 '>
            <input 
              type="range"
              min={8}
              max={100}
              value={lenght}
                className='cursor-pointer'
                onChange={(e)=> {setlenght(e.target.value)}}
            />
            <label>Lenght : {lenght}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setnumberAllowed((prev)=>!prev);
              }}
            />
            <label htmlFor='numberInput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={()=>{
                setcharAllowed((prev)=> !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App