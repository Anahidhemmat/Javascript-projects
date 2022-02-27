const key = "R0kHJGpfEsVALM8nGPwGxeN0no5fQsPA";

//get city information with API => function

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

getCity("Tbilisi")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
