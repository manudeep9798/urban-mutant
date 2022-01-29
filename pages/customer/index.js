import React from 'react'
import Header from '../../src/components/Header/Header'
import {AiFillFileAdd} from 'react-icons/ai'
const data= [
    {
      "id": 0,
      "name": "Adam Carter",
      "work": "Unilogic",
      "email": "adam.carter@unilogic.com",
      "dob": "1978",
      "address": "83 Warner Street",
      "city": "Boston",
      "optedin": true
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },,
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    }
  ]
const index = () => {
    return (
        <div>
            <Header/>
            <div className="custPage">
                <div className=" headersec flex">
                    <div className="toggleSwitch flex">
                        <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                        </label>
                        <p>Active Only</p>
                    </div>
                    <div className="toggleSwitch flex">
                        <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                        </label>
                        <p>In-Active Only</p>
                    </div>
                    
                </div>
                <div className="createCustBtn">
                    <h5>Add New Customer</h5>
                    <span><AiFillFileAdd/></span>
                    </div>
                <div className="customerListing">
                    {
                        data.map(cust=>{
                            return(
                                <div className=" customerDataCard">
                                    <p><b>Name</b>: {cust.name}</p>
                                    <p><b>DOB</b>: {cust.dob}</p>
                                    <p><b>Email</b>: {cust.email}</p>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default index
