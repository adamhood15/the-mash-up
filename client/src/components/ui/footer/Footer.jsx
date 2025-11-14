import Icon from '../Icons/Icon'

export default function Footer () {
  return (
    <footer className='sticky bottom-0 flex flex-row flex-wrap justify-center  gap-5 p-3 bg-black text-2xl *:text-white *:cursor-pointer *:rounded-lg *:p-2 *:hover:bg-red-600'>
      <Icon className='fa-regular fa-user ' />
      <Icon className='fa-solid fa-arrow-right-from-bracket ' />
      <Icon className='fa-solid fa-cart-arrow-down ' />
    </footer>
  )
}
