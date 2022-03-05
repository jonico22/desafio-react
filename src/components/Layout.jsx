import Header from "./Header"
import Step01 from './sections/Step01'
import Step02 from './sections/Step02'
import Step03 from './sections/Step03'
import React, {useState} from "react"
import { useFetch } from "../hooks/useFetch";

const listCars = [
    {
        "name" : "Nissan Frontier NP300 2015",
        "color" :  "plomo"
    },
    {
        "name" : "Mitsubishi Montero Sport 2014",
        "color" :  "rojo"
    },
    {
        "name" : "Toyota HILUX SR 2018",
        "color" :  "blanco"
    },
    {
        "name" : "Toyota Fortuner 2017",
        "color" :  "plomo"
    }
]

const Layout = ()=>{
    const [showStep01, setShowStep01] = useState(true)
    const [showStep02, setShowStep02] = useState(false)
    const [showStep03, setShowStep03] = useState(false)
    const [dataUser, setDataUser] = useState([])
    const [dataCar, setDataCar] = useState([])
 
    const {data} = useFetch('https://jsonplaceholder.typicode.com/users')

    const  random_item = (items) =>{
        return items[Math.floor(Math.random()*items.length)];
    }
    const getData = async (res)=>{
        setDataUser(random_item(data))
        let car = random_item(listCars)
        setDataCar(
            {
                "placa" : res.placa,
                "name" : car.name,
                "color" : car.color
            }
        )
        setShowStep02(true)
        setShowStep01(false)
    }

    const handleBack = ()=>{
        setShowStep01(true)
        setShowStep02(false)
    }

    const handleFinish = ()=>{
        setShowStep02(false)
        setShowStep03(true)
    }


    return (
        <>
        <div className="container">
            <Header />
            { showStep01 && <Step01 save={getData} />}
            { showStep02 && <Step02
             back={handleBack} 
             user={dataUser} 
             car={dataCar}
             next={handleFinish}
             />
             }
            { showStep03 && <Step03 user={dataUser}/>}
        </div>
        </>
    )
}

export default Layout