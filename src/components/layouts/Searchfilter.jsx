export const Searchfilter = ({ search, Setsearch, filter, Setfilter }) => {

    const handleinputchange = (event) => {
        event.preventDefault()
        Setsearch(event.target.value)
    }

    const handleselectchange = (event) => {
        event.preventDefault()
        Setfilter(event.target.value)
    }
    
    return <>
        <div className="section-searchFilter container">
            <input type="text" placeholder="search" value={search} onChange={handleinputchange} />

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