import { useState } from 'react'
import {FormRow,Alert, FormRowSelect} from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const initialState = {
      genderOptions:['', 'Male','Female','Others'],
      circleOptions:['', '252','112','342'],
      zoneOptions:['', 'ZONE 12','ZONE 13','ZONE 14'],
      residentStat:['', 'yes','no'],
      citizenTypes:['','A','B','C','D'],
      phone:+880,
      address:'',
}

const Profile = () => {
  const [values, setValues] = useState(initialState);
  const { lawyer,  showAlert, displayAlert, updateLawyer, isLoading, handleChange } =
    useAppContext()
  
  const [name, setName] = useState(lawyer?.name)
  const [email, setEmail] = useState(lawyer?.email)
  const [birthdate, setBD] = useState(lawyer?.birthdate)
  const [phone, setPhone] = useState(lawyer?.phone)
  const [gender, setGender] = useState(lawyer?.gender)
  const [address, setAddress] = useState(lawyer?.address)
  const [circle, setCircle] = useState(lawyer?.circle)
  const [zone, setZone] = useState(lawyer?.zone)
  const [resident, setResident] = useState(lawyer?.resident)
  const [citizen_type, setCitizenType] = useState(lawyer?.citizen_type)
  const [tin, setTin] = useState(lawyer?.tin)
  const [nid, setNid] = useState(lawyer?.nid)

  const handleSubmit = (e) => {
    e.preventDefault()
    // const { gender, phone } = values
    if(!name || !email || !gender || !phone || !birthdate || !address  || !nid) {
      displayAlert()
      return;  
    }

    updateLawyer({ name, email, gender, phone, birthdate, address, nid })
  }

  const handleChangeState = (e) => {
    setValues({...values, [e.target.name]:e.target.value})
  }
  const handleSelectInput = (e) => {
    handleChange({ name: e.target.name, value: e.target.value })
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile </h3>
        {showAlert && <Alert />}

        {/* name */}
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
            isPro='false'
          />
          <FormRow
            type='email'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            isPro='false'
          />
          <FormRowSelect
            name='gender'
            value={gender}
            handleChange={(e) => setGender(e.target.value)}
            list={values.genderOptions}
          />
          <FormRow
            labelText='Phone'
            type='number'
            name='phone'
            value={phone}
            handleChange={(e) => setPhone(e.target.value)}
            isPro='false'
          />
          <FormRow
            type='text'
            name='address'
            value={address}
            handleChange={(e) => setAddress(e.target.value)}
            isPro='false'
          />
          <FormRow
            type='date'
            name='birthdate'
            value={birthdate}
            handleChange={(e) => setBD(e.target.value)}
            isPro='false'
          />
          <FormRow
            labelText='NID'
            type='number'
            name='nid'
            value={nid}
            handleChange={(e) => setNid(e.target.value)}
            isPro='false'
          />
          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile