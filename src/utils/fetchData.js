export const fetchOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f14774fd4msh26b5478c185d488p100c14jsn796e032660c9',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchData = async(url,options) =>{
    
  const response = await fetch(url, options);  
  const data = response.json(); 

  return data;
}