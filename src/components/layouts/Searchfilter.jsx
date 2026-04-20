export const Searchfilter = ({ search, Setsearch, filter, Setfilter, countries, setCountries }) => {

    const handleinputchange = (event) => {
        event.preventDefault()
        Setsearch(event.target.value)
    }

    const handleselectchange = (event) => {
        event.preventDefault()
        Setfilter(event.target.value)
    }

    const sortcountries=(value)=>{
        // Sort method by using localeCompare method  
        const sortcountry=[...countries].sort((a,b)=>{
            return value === "asc"
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common)
        })
        setCountries(sortcountry)
    }
    
    return <>
        <div className="section-searchFilter container">
            <input type="text" placeholder="search" value={search} onChange={handleinputchange} />
       <div>
            <button onClick={()=> sortcountries("asc")}>ASC</button>
        </div>

        <div>
            <button onClick={()=> sortcountries("desc")}>DESC</button>
        </div>
        <div>

            <select className="select-section" value={filter} onChange={handleselectchange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
        </div>
    </>
}