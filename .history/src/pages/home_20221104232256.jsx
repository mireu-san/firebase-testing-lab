import React, {useRef} from 'react'

export default function Home() {
  const messageRef = useRef();
  
  const handleSave = async(e) => {
    e.preventDefault();
    console.log(messageRef.current.value)
  }
  return (
    <div>
        <form onSubmit={handleSave}>
            <label>Enter message here</label>
            <input type="text" ref={messageRef} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
