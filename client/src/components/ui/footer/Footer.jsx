import { useNavigate } from 'react-router-dom'
import Icon from '../../shared/Icon'
import Auth from '../../../utils/auth'

export default function Footer () {
  const navigate = useNavigate()
  const isLoggedIn = Auth.loggedIn()

  const handleHomeClick = () => {
    if (isLoggedIn) {
      navigate('/products')
    } else {
      navigate('/')
    }
  }

  const handleAccountClick = () => {
    navigate('/account')
  }

  const handleLogoutClick = () => {
    Auth.logout()
  }

  const handleCartClick = () => {
    navigate('/products/cart')
  }

  return (
    <footer className='sticky bottom-0 flex flex-row flex-wrap justify-center  gap-5 p-3 bg-black text-2xl *:text-white *:cursor-pointer *:rounded-lg *:p-2 *:hover:bg-red-600 z-999'>
      <Icon className='fa-solid fa-house' onClick={handleHomeClick} />
      {isLoggedIn && (
        <>
          <Icon className='fa-regular fa-user' onClick={handleAccountClick} />
          <Icon className='fa-solid fa-arrow-right-from-bracket' onClick={handleLogoutClick} />
          <Icon className='fa-solid fa-cart-arrow-down' onClick={handleCartClick} />
        </>
      )}
    </footer>
  )
}
