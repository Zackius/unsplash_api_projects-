import React, { useState, useEffect} from 'react'

const GetImage = () => {
    const [images, setImages] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch()
            const data = resp.json()
            setImages(data)
    }

}, [])
    use
  return (
      <div>
          Hello
    </div>
  )
}

export default GetImage