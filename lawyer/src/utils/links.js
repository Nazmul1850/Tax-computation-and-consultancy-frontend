import { GiTalk } from 'react-icons/gi'
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
      text: 'Clients',
      path: '/',
      icon: <BsFillCalculatorFill />,
    },
    
    {
      id: 4,
      text: 'Client Info',
      path: 'clinfo',
      icon: <AiFillMoneyCollect />,
    },
    {
      id: 5,
      text: 'Consultation Info',
      path: 'coninfo',
      icon: <GiTalk />,
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
    {
      id: 4,
      text: 'File',
      path: 'File',
      icon: <GoFileSubmodule />,
    },
  ]
  
  export default links