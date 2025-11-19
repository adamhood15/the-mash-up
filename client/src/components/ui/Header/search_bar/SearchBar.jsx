import Button from '../../../shared/Button'
import Icon from '../../../shared/Icon'
import SearchInput from './search_bar_components/SearchInput'

export default function SearchBar () {
  return (
    <>
      <form className='form--search flex flex-row'>
        <Button
          type='button'
          variant='default'
          className='button--search p-2 rounded-l-xs'
          aria-label='submit your search'
        >
          <Icon className="fas fa-search"/>
        </Button>
        <SearchInput />
      </form>
    </>
  )
}
