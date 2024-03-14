const products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

// print products
console.log(products);

// 1. print product name only
products.forEach(product =>{
    console.log(product.pName);
});

// 2.print all mobile details whose display is lcd

products.forEach(product => { 
    if (product.display === 'lcd') { 
        console.log(product); 
    } 
});

//3. print 5g mobile phone name

products.forEach(product => { 
    if (product.band === '5g') { 
        console.log(product.pName); 
    } 
});

//4. filter mobile based on price
 products.sort((p1,p2)=> p1.price-p2.price).forEach((p)=>console.log(p.price)) 

//5. print costly mobile 
 
let costly = products.reduce((p1,p2)=>p1.price>p2.price?p1:p2); 
console.log(costly); 
 
//6. print low cost mobile 
 
let low = products.reduce((p1,p2)=>p1.price<p2.price?p1:p2); 
console.log(low);   