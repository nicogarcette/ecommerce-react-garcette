const catalogo=[
    {id:1,marca:"nike",modelo:"ishod",precio:1400,img:"https://i.ibb.co/MZTzX3J/nike-ishod.png",descripcion:"skate",stock:4},
    {id:2,marca:"new balance",modelo:"550",precio:1500,img:"https://i.ibb.co/zhpVFLb/nb-550.png",descripcion:"skate",stock:2},
    {id:3,marca:"adidas",modelo:"messi2014",precio:3000,img:"https://i.ibb.co/f4wp8ZR/adidas-messi2014.png",descripcion:"skate",stock:1},
    {id:4,marca:"topper",modelo:"clasica",precio:5000,img:"https://i.ibb.co/8bJRnY5/toper.png",descripcion:"timelife",stock:5},
];

export const promesa = new Promise((resolve,reject)=>{

    catalogo.length > 0 ?
    setTimeout(()=>{
        resolve(catalogo);
    },2000) :
    setTimeout(()=>{
        reject("error");
    },2000) ;

});

