import { useEffect, useState } from "react"
import { getCountryData } from "../api/postApi"
import { useTransition } from 'react';
import { Loader } from "../components/ui/Loader";


export const Country = () => {

    // New Hook Which is introduced in react js
    const [isPending, startTransition] = useTransition()
    const [country, setCountries] = useState([])

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData()
            console.log(res)
            setCountries(res.data)
        })
    }, [])

    if (isPending) return <Loader />

    return (
        <>
            <h1>Country Page</h1>
        </>
    )
}