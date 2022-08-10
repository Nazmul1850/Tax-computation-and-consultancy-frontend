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
  const { user,  showAlert, displayAlert, updateUser, isLoading, handleChange } =
    useAppContext()
  
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [birthdate, setBD] = useState(user?.birthdate)
  const [phone, setPhone] = useState(user?.phone)
  const [gender, setGender] = useState(user?.gender)
  const [address, setAddress] = useState(user?.address)
  const [circle, setCircle] = useState(user?.circle)
  const [zone, setZone] = useState(user?.zone)
  const [resident, setResident] = useState(user?.resident)
  const [citizen_type, setCitizenType] = useState(user?.citizen_type)
  const [tin, setTin] = useState(user?.tin)
  const [nid, setNid] = useState(user?.nid)

  const handleSubmit = (e) => {
    e.preventDefault()
    // const { gender, phone } = values
    if(!name || !email || !gender || !phone || !birthdate || !address || !circle || !zone || !citizen_type || !resident || !tin || !nid) {
      displayAlert()
      return;  
    }

    updateUser({ name, email, gender, phone, birthdate, address, circle, zone, resident, citizen_type,  tin, nid })
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
          />
          <FormRow
            type='email'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
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
          />
          <FormRow
            type='text'
            name='address'
            value={address}
            handleChange={(e) => setAddress(e.target.value)}
          />
          <FormRow
            type='date'
            name='birthdate'
            value={birthdate}
            handleChange={(e) => setBD(e.target.value)}
          />
          <FormRowSelect
            name='circle'
            value={circle}
            handleChange={(e) => setCircle(e.target.value)}
            list={values.circleOptions}
          />
          <FormRowSelect
            name='zone'
            value={zone}
            handleChange={(e) => setZone(e.target.value)}
            list={values.zoneOptions}
          />
          <FormRowSelect
            name='resident'
            value={resident}
            handleChange={(e) => setResident(e.target.value)}
            list={values.residentStat}
          />
          <FormRowSelect
            name='citizen'
            value={citizen_type}
            handleChange={(e) => setCitizenType(e.target.value)}
            list={values.citizenTypes}
          />
          <FormRow
            labelText='Tin'
            type='number'
            name='tin'
            value={tin}
            handleChange={(e) => setTin(e.target.value)}
          />
          <FormRow
            labelText='NID'
            type='number'
            name='nid'
            value={nid}
            handleChange={(e) => setNid(e.target.value)}
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