import { useEffect, useState } from "react"
import { getCountryData } from "../api/postApi"
import { useTransition } from 'react';
import { Loader } from "../components/ui/Loader";
import { Countrycard } from "../components/layouts/Countrycard";


export const Country = () => {

    // New Hook Which is introduced in react js
    const [isPending, startTransition] = useTransition()
    const [country, setCountries] = useState([])

    useEffect(() => {
        // The UseTransition Hook is used for async th data
        startTransition(async () => {
            const res = await getCountryData()
            console.log(res)
            setCountries(res.data)
        })
    }, [])

    if (isPending) return <Loader />

    return (
        <section className="country-section">
            <ul className="grid grid-four-cols">
            {/* Mapping The data in In Countrycard component Through Props */}
                {
                    country.map((curCountry, index) => {
                        return (
                            <Countrycard country={curCountry} key={index} />
                        )
                    })
                }
            </ul>
        </section>
    )
}