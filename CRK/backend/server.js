import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;


app.get('/api/products',(req,res)=>{
    const products =[
        {
            id:1,
            name:'Wooden Table',
            price:200,
            image:"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },{
            id:2,
            name:'Plastic Table',
            price:100,
            image:"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },{
            id:3,
            name:'Metal Table',
            price:150,
            image:"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },{
            id:4,
            name:'Glass Table',
            price:300,
            image:"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },{
            id:5,
            name:'Wooden Table',
            price:200,
            image:"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },{
            id:6,
            name:'Plastic Table',
            price:100,
            image:"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },{
            id:7,
            name:'Metal Table',
            price:150,
            image:"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },{
            id:8,
            name:'Glass Table',
            price:300,
            image:"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
    ]

    if(req.query.search){
        const filterProducts = products.filter(product=>
            product.name.includes(req.query.search))
            res.send(filterProducts)
            return;
    }

    setTimeout(()=>{
        res.send(products)
    },3000)

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


