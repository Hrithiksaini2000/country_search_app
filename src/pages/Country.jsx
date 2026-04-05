import { useEffect } from "react"
import { getCountryData } from "../api/postApi"
import { useTransition } from 'react';


export const Country = () => {

    // New Hook Which is introduced in react js
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData()
            console.log(res)
        })
    }, [])

    if (isPending) return <h1>Loading.....</h1>

    return (
        <>
            <h1>Country Page</h1>
        </>
    )
}