import React, {useRef} from 'react'

export default function Home() {
  const messageRef = useRef();
    return (
    <div>
        <form>
            <label>Enter message here</label>
            <input type="text" ref={messageRef} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
