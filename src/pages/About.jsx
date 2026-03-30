import countryfacts from "../api/countryData.json"

export const About = () => {
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Here are the Interesting facts
                <br />
                We are proud of
            </h2>

            <div className="gradient-cards">
                {
                    countryfacts.map((country) => {

                        const { id, countryName, capital, population, interestingFact } = country;

                        return (
                            <div className="card" key={id}>
                                <div className="container-card bg-blue-box">
                                    <p className="card-title">{countryName}</p>
                                    <p>
                                        <span className="card-descrption">Capital: </span>
                                        {capital}
                                    </p>
                                    <p>
                                        <span className="card-descrption">Population: </span>
                                        {population}
                                    </p>
                                    <p>
                                        <span className="card-descrption">Interesting Fact: </span>
                                        {interestingFact}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}