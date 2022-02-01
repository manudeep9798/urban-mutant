import React from 'react'
import Header from '../../src/components/Header/Header'
import {AiFillFileAdd} from 'react-icons/ai'
import {AiFillCheckCircle} from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import Link from 'next/link'
const data= [
    {
      "id": 0,
      "name": "Adam Carter",
      "work": "Unilogic",
      "email": "adam.carter@unilogic.com",
      "dob": "1978",
      "address": "83 Warner Street",
      "city": "Boston",
      "optedin": true,
      "aboutTOExpire": true
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false,
      "aboutTOExpire": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false,
      "aboutTOExpire": true
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false,
      "aboutTOExpire": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false,
      "aboutTOExpire": true
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": true,
      "aboutTOExpire": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": true,
      "aboutTOExpire": true
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": true,
      "aboutTOExpire": false
    },,
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": true,
      "aboutTOExpire": true
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false,
      "aboutTOExpire": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false,
      "aboutTOExpire": true
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false,
      "aboutTOExpire": false

    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false,
      "aboutTOExpire": true
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false,
      "aboutTOExpire": false
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false,
      "aboutTOExpire": true
    }
  ]
  const getClassName=(option)=>{
    if(option){
      return "customerActiveCondition"
    }else{
      return"customerActive"
    }
  } 
const Index = () => {
    return (
        <div>
            <Header/>
            <div className="custPage">
                <div className=" headersec flex">
                    <label>Active Only</label>
                    <input type="checkBox"/>
                    <label>In-Active Only</label>
                    <input type="checkBox"/>
                    <label>About To Expire</label>
                    <input type="checkBox"/>
                </div>
                <Link href='/customer/create' passHref><div className="createCustBtn">
                    <h5>Add New Customer</h5>
                    <span><AiFillFileAdd/></span>
                    </div></Link>
                <div className="customerListing">
                    {
                        data.map(cust=>{
                            return(
                                <div key={cust.id} className="customer customerDataCard">
                                    {cust.optedin?<span className={getClassName(cust.aboutTOExpire)}><AiFillCheckCircle/></span>:
                                    <span  className="customerInActive"><AiFillInfoCircle/></span>}
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

export default Index
