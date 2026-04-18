import { useEffect, useState } from "react"
import { getCountryData } from "../api/postApi"
import { useTransition } from 'react';
import { Loader } from "../components/ui/Loader";
import { Countrycard } from "../components/layouts/Countrycard";
import { Searchfilter } from "../components/layouts/Searchfilter";


export const Country = () => {

    // New Hook Which is introduced in react js
    const [isPending, startTransition] = useTransition()
    const [countries, setCountries] = useState([])

    const [search, Setsearch] = useState()
    const [filter, Setfilter] = useState("all")

    useEffect(() => {
        // The UseTransition Hook is used for async th data
        startTransition(async () => {
            const res = await getCountryData()
            // console.log(res)
            setCountries(res.data)
        })
    }, [])

    if (isPending) return <Loader />

    // Search Country filter logic 
    const searchcountry = (country) => {
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase(country))
        } else {
            return country
        }
    }

    // Select Filter Logic 
    const filterRegion = (country) => {
        if (filter === "all") return country
        return country.region === filter
    }

    // Here is a main logic for search 
    const filtercountries = countries.filter((country) => searchcountry(country) && filterRegion(country))

    return (
        <section className="country-section">

            <Searchfilter search={search} Setsearch={Setsearch} filter={filter} Setfilter={Setfilter} countries={countries} setCountries={setCountries} />
            <ul className="grid grid-four-cols">
                {/* Mapping The data in In Countrycard component Through Props */}
                {
                    filtercountries.map((curCountry, index) => {
                        return (
                            <Countrycard country={curCountry} key={index} />
                        )
                    })
                }
            </ul>
        </section>
    )
}