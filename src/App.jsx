import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [vowelCount, setVowelCount] = useState(0)
  const [result, setResult] = useState('')

  const vowelChecker = () =>{
    let count = 0;
    const lowerText = text.toLowerCase();
    for (let i = 0; i < lowerText.length; i++) {
      if(isVowel(lowerText.charAt(i))){
        count ++;
      }
      
    }
    setVowelCount(count);
  }

  const isVowel = (char) =>{
    const vowels = ['a','e','i','o','u']
    return vowels.includes(char)
  }
  
  return (
    <>
      <div className='bg-teal-300 flex flex-col items-center p-[20px]'>
        <h1 className='text-[34px] m-[20px] font-bold'>Vowel Checker</h1>
        <div className='flex flex-col items-center'>
        <textarea className='w-[500px] h-[350px] my-[10px] mx-auto block p-[10px] rounded-[5px] border-[1px]-solid-[#dddddd] text-[24px] text-justify' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter your contents' rows="15" cols="45"/>
        <button className='px-[20px] py-[10px] bg-[#4CA049] text-white rounded-md cursor-pointer font-bold hover:bg-[#6dc36a] justify-center' onClick={vowelChecker}>Count Vowels</button>
          <p className='font-bold'> Total vowel count : {vowelCount}</p>
        </div>
      </div>
    </>
  )
}

export default App
