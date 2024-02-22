fetch('https://fakestoreapi.com/products').then((data)=>{
     //console.log(data);
     return data.json();//json file  will convert json object json file means all data in ""quotes
}).then((completedata)=>{
    //for single data --> console.log(completedata[2].title);
    // i want to show my data in browser
    //document.getElementById("root").innerHTML=completedata[2].title;
     let data1="";
     completedata.map((values)=>{
        data1+=` <div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image} alt ="img" class="images">
        <p > ${values.description} </p>
        <p class="category"> ${values.category}</p>
        <p class="price">${values.price}</p>
      </div> `;//$ used to dynamically 
     });
     document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
      consolele.log(err);
})
