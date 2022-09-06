const catalogo=[
    {id:1,marca:"nike",modelo:"ishod",precio:1400,img:"https://i.ibb.co/MZTzX3J/nike-ishod.png",descripcion:"skate",stock:4},
    {id:2,marca:"new balance",modelo:"550",precio:1500,img:"https://i.ibb.co/zhpVFLb/nb-550.png",descripcion:"skate",stock:2},
    {id:3,marca:"adidas",modelo:"messi2014",precio:3000,img:"https://i.ibb.co/f4wp8ZR/adidas-messi2014.png",descripcion:"skate",stock:1},
    {id:4,marca:"topper",modelo:"clasica",precio:5000,img:"https://i.ibb.co/8bJRnY5/toper.png",descripcion:"timelife",stock:5},
    {id:5,marca:"nike",modelo:"dunk",precio:1800,img:"https://i.ibb.co/s9sYj4Z/nike-dunk.png",descripcion:"skate",stock:10},
    {id:6,marca:"asics",modelo:"patriot",precio:1200,img:"https://i.ibb.co/drv4Cpd/asics.png",descripcion:"skate",stock:10},
    {id:7,marca:"adidas",modelo:"forum",precio:2000,img:"https://i.ibb.co/6gxZVm3/adidas-forum.png",descripcion:"skate",stock:10},
    {id:8,marca:"puma",modelo:"diegote",precio:3000,img:"https://i.ibb.co/VmzmPMT/puma.png",descripcion:"futbol",stock:10},
    {id:9,marca:"nike",modelo:"jordan",precio:3000,img:"https://i.ibb.co/98wmFBV/j3.jpg",descripcion:"futbol",stock:10},
    {id:10,marca:"nike",modelo:"airmax1",precio:3000,img:"https://i.ibb.co/FB7dKFY/travis.jpg",descripcion:"futbol",stock:10},
    {id:11,marca:"adidas",modelo:"yezzy",precio:3000,img:"https://i.ibb.co/4jMQQNg/yezzy.jpg",descripcion:"futbol",stock:10},
    {id:12,marca:"jordan",modelo:"5",precio:3000,img:"https://i.ibb.co/wC2fWbB/j5.jpg",descripcion:"futbol",stock:10}
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
