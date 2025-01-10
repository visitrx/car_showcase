import { fetchCars } from "@utils";
import { CarProps, HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";

export default async function Home({ searchParams }: HomeProps) {

  console.log("search prams - ", searchParams);

  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || "",
  //   year: searchParams.year || 2020,
  //   fuel: searchParams.fuel || "",
  //   // limit: searchParams.limit || 10,
  //   model: searchParams.model || "",
  // });

  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  const cars: CarProps[] = [
    {
      city_mpg: 24,
      class: "SUV",
      combination_mpg: 27,
      cylinders: 4,
      displacement: 2.0,
      drive: "AWD",
      fuel_type: "Gasoline",
      highway_mpg: 30,
      make: "Toyota",
      model: "RAV4",
      transmission: "Automatic",
      year: 2021,
    },
    {
      city_mpg: 20,
      class: "Sedan",
      combination_mpg: 23,
      cylinders: 6,
      displacement: 3.0,
      drive: "RWD",
      fuel_type: "Gasoline",
      highway_mpg: 28,
      make: "BMW",
      model: "3 Series",
      transmission: "Automatic",
      year: 2020,
    },
    {
      city_mpg: 18,
      class: "Pickup Truck",
      combination_mpg: 20,
      cylinders: 8,
      displacement: 5.7,
      drive: "4WD",
      fuel_type: "Diesel",
      highway_mpg: 22,
      make: "Ford",
      model: "F-150",
      transmission: "Manual",
      year: 2019,
    },
    {
      city_mpg: 25,
      class: "Hatchback",
      combination_mpg: 29,
      cylinders: 4,
      displacement: 1.5,
      drive: "FWD",
      fuel_type: "Hybrid",
      highway_mpg: 34,
      make: "Honda",
      model: "Civic",
      transmission: "Automatic",
      year: 2022,
    },
    {
      city_mpg: 15,
      class: "Sports Car",
      combination_mpg: 18,
      cylinders: 8,
      displacement: 6.2,
      drive: "RWD",
      fuel_type: "Gasoline",
      highway_mpg: 21,
      make: "Chevrolet",
      model: "Corvette",
      transmission: "Manual",
      year: 2021,
    },
    {
      city_mpg: 50,
      class: "Compact",
      combination_mpg: 55,
      cylinders: 0,
      displacement: 0.0,
      drive: "FWD",
      fuel_type: "Electric",
      highway_mpg: 60,
      make: "Tesla",
      model: "Model 3",
      transmission: "Automatic",
      year: 2023,
    },
    {
      city_mpg: 28,
      class: "Crossover",
      combination_mpg: 31,
      cylinders: 4,
      displacement: 2.5,
      drive: "AWD",
      fuel_type: "Gasoline",
      highway_mpg: 34,
      make: "Mazda",
      model: "CX-5",
      transmission: "Automatic",
      year: 2021,
    },
    {
      city_mpg: 22,
      class: "Minivan",
      combination_mpg: 25,
      cylinders: 6,
      displacement: 3.5,
      drive: "FWD",
      fuel_type: "Gasoline",
      highway_mpg: 28,
      make: "Chrysler",
      model: "Pacifica",
      transmission: "Automatic",
      year: 2020,
    },
    {
      city_mpg: 16,
      class: "SUV",
      combination_mpg: 18,
      cylinders: 6,
      displacement: 4.0,
      drive: "AWD",
      fuel_type: "Gasoline",
      highway_mpg: 20,
      make: "Jeep",
      model: "Wrangler",
      transmission: "Manual",
      year: 2019,
    },
    {
      city_mpg: 31,
      class: "Sedan",
      combination_mpg: 34,
      cylinders: 4,
      displacement: 1.8,
      drive: "FWD",
      fuel_type: "Gasoline",
      highway_mpg: 37,
      make: "Toyota",
      model: "Corolla",
      transmission: "Automatic",
      year: 2022,
    },
  ];


  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        <div className='home__cars-wrapper'>

          {cars?.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}

        </div>

        {/* {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}*/}
      </div>
    </main>
  );
}
