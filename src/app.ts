type Tperson = {
    id : number ;
    name : string ;
    age : number ;
    status? : boolean
}
const person : Tperson = {
    id:1,
    name : "huong",
    age : 20
}
const persons : Tperson[]=[
    {id : 1, name:"huong" , age:20 , status:true},
    {id : 1, name:"huonghhh111111" , age:20 , status:false},
]
console.log(person.name);


type AppProps = {
    message : string
}
const DemoApp = (props : AppProps) => {
    console.assert(props)
}
DemoApp({message:"Hello"})