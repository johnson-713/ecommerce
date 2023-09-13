import Button from '../components/Button';
import './Recommended.css';

function Recommended({handleClick}) {
  return (
    <>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-btns'>
        <Button onClickHandler={handleClick} className='btns' title="All Product"/>
        <Button onClickHandler={handleClick} value="Nike" title="Nike"/>
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas"/>
        <Button onClickHandler={handleClick} value="Puma" title="Puma"/>
        <Button onClickHandler={handleClick} value="Vans" title="Vans"/>
      </div>
    </div>
    </>
  )
}

export default Recommended;
