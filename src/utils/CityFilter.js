

export const cityfilter = (countries) => {
    const CityThenCountry = countries.flatMap((country) =>
        country.cities.map((city) => {
            return (
                { city: city, country: country.country }
            )
        })
    );
    return CityThenCountry
};