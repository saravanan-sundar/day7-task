let xhr= new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response)
    console.log(data);
    console.log(xhr.status);
  //  for (let i=0; i < data.length; i++ ){
    //    console.log(`Name: ${data[i].name.common}
      //  region: ${data[i].region}
        //sub region: ${data[i].subregion}
        //population: ${data[1].population}
        //`)
      //console.log("flag", data[i].flags.png);
    //}

    //for each
    data.forEach ((value ) => {
        console.log(`
        Name:${value.name.common}
        Flag:${value.flags.png}
        capital:${value.capital}
                  
        `);
    })
//filter
    const newarray=data.filter((value)=>value.population<200000);
    console.log(newarray);
    const newarray1=data.filter((value)=>value.region==="Asia");
    console.log(newarray1);

    //reduce
    const overallpopulation=data.reduce((acc,value)=>{
        return acc+value.population

    },0)
    console.log(overallpopulation);
   

    const countryarr=data.map((value)=>{
        return value.currencies;
    });
    console.log(countryarr);
     
    for(key in countryarr){
       console.log(`
        key:${key}
        value:${countryarr[key]}
        
        `)
    }
    console.log(countryarr);

    
    
       
};


