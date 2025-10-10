
import Button from '../../../../Button';
import Icon from '../../../../Icons/Icon';
import SearchInput from './search_bar_components/SearchInput';


export default function SearchBar() {

    return (
        <>
         <form className="form--search">
           <SearchInput />
            <Button
                className="button--search"
                type="submit"
                aria-label="Submit your search"
            >
            <Icon 
               className="fa fa-search nav--icon" 
            />
           </Button>
         </form>
           
        </>
    )
}