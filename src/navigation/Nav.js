import './Nav.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai';


function Nav({handleInputChange, query}) {
  return (
   <nav>
    <div className="nav-container">
        <input
            type="text"
            className="searchInput"
            onChange={handleInputChange}
            value={query}
            placeholder="search..."
        />
    </div>

    <div className="profile-container">
        <a href=''>
            <AiOutlineHeart className='nav-icons' />
        </a>
        <a href=''>
            <AiOutlineShoppingCart className='nav-icons' />
        </a>
        <a href=''>
            <AiOutlineUserAdd className='nav-icons' />
        </a>
    </div>
   </nav>
  )
}

export default Nav;