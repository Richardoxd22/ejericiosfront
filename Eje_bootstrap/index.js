//axios.get('https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=2').then(response=>console.log(response));
// axios ("https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=2")
// .then(response=> console.log(response))


const apiURL="https://bp-marvel-api.herokuapp.com/"
const paramsRequest={
    idAuthor:2
}
axios.get(apiURL + "marvel-characters",{
    params:{
        ...paramsRequest
    }
}).then(response=> {
    console.log(response.data);
    var peliculas = document.getElementById('peliculas');
    peliculas.innerHTML="";
    var html=``;    
    response.data.forEach(element => {
         html += `<card mb-3 text-white >
         <div class ="row ">
         <div class="col-md-2 mt-1">
         <img src="${element.image}" class="img-margen"  height="150px" width="250px">
         </div> 
         <div class ="col-md-5">
            <div class="card-elementos">
                <h3 class="card-title mb-4 text-center">${element.title}</h3>
                <p class="card-descripcion text-center text-white" id="descripcion${element._id}">${element.body}</p>
            </div>
         </div>
         <div class="col text-center">
            <div class="mt-5 mb-2">
                <button class="btn btn-warning ">✒️</button>
            </div>
            <div>
                <button class="btn btn-danger delete" id="delete${element._id}">☠️</button>
            </div>
         </div>
         </div> 
         `
    });
    peliculas.innerHTML=html;
    deletepeliculas();
})

var btn_guardar = document.getElementById('#btn_guardar');
btn_guardar.addEventListener('guardar',function(e){
    var name = document-getElementById("name").value;
    var description = document-getElementById("description").value;
    
    axios.post(apiURL + "marvel-characters",{
        params:{
            ...paramsRequest
        }

}).then(guardar =>{
    location.reload();
});
});


