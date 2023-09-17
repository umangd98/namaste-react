import { useState, useEffect } from "react"

const useOnlineStatus = () => {
    //check if online 
    const [onlineStatus, setOnlineStatus] = useState(true)
    useEffect(() => {
      window.addEventListener("offline", () => {
        setOnlineStatus(false)
      })
      window.addEventListener("online", () => {
        setOnlineStatus(true)
      })

      console.log('use effect form online hook')
      }, [])
    
      console.log('render from online hook')

    //boolean value
    return onlineStatus;
}

export default useOnlineStatus;