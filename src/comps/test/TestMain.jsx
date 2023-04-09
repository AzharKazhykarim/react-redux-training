
import React, {useEffect, useState} from 'react'
import axios from 'axios'
export default function TestMain() {

    const [cageList,setCageList] = useState([]);
useEffect(() => {
   axios.get("http://localhost:8080/add-cage?size=`$`")
   .then(res=>{

   })
}, [cageList])

    return (
        <>

       </>
    )
}