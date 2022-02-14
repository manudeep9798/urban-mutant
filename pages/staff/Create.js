import React from 'react'
import Header from '../../src/components/Header/Header'

const Create = () => {
  return (
    <div>
        <Header/>
        <div className='createStaffPage'>
        <h1>Add Staff</h1>
                <div className="divider"></div>
                <form>
                    <div className="threeinput">
                        <div className="eachInput">
                            <label>First Name : </label><br></br>
                            <input type='text' placeholder='First Name'/>
                        </div>
                        <div className="eachInput">
                            <label>Middle Name : </label><br></br>
                            <input type='text' placeholder='Middle Name'/>
                        </div>
                        <div className="eachInput">
                            <label>Last Name : </label><br></br>
                            <input type='text' placeholder='Last Name'/><br></br>
                        </div>
                    </div>
                    <div className="threeinput">
                    <div className="eachInput">
                            <label>Phone Number : </label><br></br>
                            <input type='text' placeholder='Phone Number'/>
                    </div>
                    <div className="eachInput">
                            <label>Email Address : </label><br></br>
                            <input type='text' placeholder='Email Address'/>
                    </div>
                    <div className="eachInput">
                            <label>Emergency Contact : </label><br></br>
                            <input type='text' placeholder='Emergency Contact Number'/>
                    </div>
                    </div>

                    <div className="threeinput">
                    <div className="eachInput">
                            <label>Age : </label><br></br>
                            <input type='text' placeholder='Age'/>
                    </div>
                    <div className="eachInput">
                            <label>Height : </label><br></br>
                            <input type='text' placeholder='Height'/>
                    </div>
                    <div className="eachInput">
                            <label>Weight : </label><br></br>
                            <input type='text' placeholder='Weight'/>
                    </div>
                    </div>
                    <div className="threeinput">
                        <div className="eachInput">
                            <label>DOB : </label><br></br>
                            <input type='date' placeholder='DOB DD-MM-YYY'/>
                        </div>
                        <div className="eachInput">
                            <label>Role : </label><br></br>
                            <input type='text' placeholder='Role'/>
                        </div>
                        <div className="eachInput">
                            <label>Gender : </label><br></br>
                            <select name="Gender" id="gender">
                                <option value="hidden">Dont want to Disclose</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className="threeinput"> 
                    <div className="eachInput">
                    <label>Batch : </label>
                    <select name="batch" id="batch">
                        <option value="notSelected">Batch</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                    </select>  
                    </div>
                    <div className="eachInput">
                    <label>Blood Group : </label>
                    <select name="bloodGroup" id="bloodGroup">
                        <option value="notSelected">Blood Group</option>
                        <option value="positive">A</option>
                        <option value="negative">B</option>
                        <option value="negative">AB</option>
                        <option value="negative">O</option>
                    </select>
                    </div>
                    <div className="eachInput">
                    <label>+/- : </label>
                    <select name="rhesus" id="rhesus">
                        <option value="positive">Positive [+]</option>
                        <option value="negative">Negative [-]</option>
                    </select>
                    </div>
                    </div>
                    <div className="oneInput">
                        <div className="eachInput">
                            <label>Address : </label><br></br>
                            <input type='text' placeholder='Address'/><br></br>
                        </div>
                    </div>

                    <div className="twoInput">
                    <div className="eachInput">
                            <label>PIN Code : </label><br></br>
                            <input type='text' placeholder='PIN Code'/>
                        </div>
                        <div className="eachInput">
                            <label>CTC : </label><br></br>
                            <input type='text' placeholder='CTC'/>
                        </div>
                    </div>
                <input id='submitBtn' type='button' value='Submit'/>
                </form>
               
        </div>
    </div>
  )
}

export default Create