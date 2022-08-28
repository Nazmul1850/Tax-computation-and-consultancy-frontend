import { BsRecycle } from 'react-icons/bs'
import { FcBusiness } from 'react-icons/fc'
import { AiFillMoneyCollect } from 'react-icons/ai'
import { ImProfile } from 'react-icons/im'
import {BsFillCalculatorFill} from 'react-icons/bs'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {GiFamilyHouse} from 'react-icons/gi'
import {GoFileSubmodule} from 'react-icons/go'



const links = [
    {
      id: 1,
      text: 'Calculator',
      path: '/',
      icon: <BsFillCalculatorFill />,
    },
    
    {
      id: 4,
      text: 'salary',
      path: 'salary',
      icon: <AiFillMoneyCollect />,
    },
    {
      id: 5,
      text: 'investment',
      path: 'investment',
      icon: <BsRecycle />,
    },
    {
      id: 6,
      text: 'business',
      path: 'business',
      icon: <FcBusiness />,
    },
    {
      id: 7,
      text: 'house',
      path: 'house',
      icon: <GiFamilyHouse />,
    },
    {
      id: 8,
      text: 'files',
      path: 'files',
      icon: <GoFileSubmodule />,
    },
    {
      id: 9,
      text: 'allhouse',
      path: 'allhouse',
      icon: <GiFamilyHouse />,
    },
    {
      id: 2,
      text: 'Consultation',
      path: 'consultation',
      icon: <BiMessageRoundedDots />,
    },
    {
      id: 3,
      text: 'profile',
      path: 'profile',
      icon: <ImProfile />,
    },
    
  ]
  
  export default links