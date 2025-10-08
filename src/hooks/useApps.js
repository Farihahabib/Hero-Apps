import axios, { Axios } from "axios"
import { useEffect } from "react"
import { useState } from "react"

const useApps = () =>{
    const [apps, setapps] = useState([])
   const [loading, setloading] = useState(true)
   const [Error, setError] = useState(null)
   useEffect(()=>{
    setloading(true)
 axios('../../appinfo.json').then(data=>
   setapps(data.data)
 )
 .catch(err => setError(err))
 .finally(()=> setloading(false))
   },[]
 )
 return { apps ,loading ,Error }
}

export default useApps