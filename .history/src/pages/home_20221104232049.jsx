import React from 'react'

export default function home() {
  
  const messageRef = useRef();
  
    return (
    <div>
        <form>
            <label>Enter message here</label>
            <input type="text" ref={messageRef} />
            <button type="submit"></button>
        </form>
    </div>
  )
}