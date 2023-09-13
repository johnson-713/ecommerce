import Input from '../../components/Input';
import './Colors.css';

function Colors({handleChange}) {
  return (
    <div className='ml'>
      <h2 className='sidebar-title color-title'>Colors</h2>
      <div>
      <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' name='test3' />
          <span className='checkmark all'></span>All
      </label>

      <Input 
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test3"
          color="black"
      />
      <Input 
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test3"
          color="green"
      />
      <Input 
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test3"
          color="blue"
      />
      <Input 
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test3"
          color="red"
      />
      <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="white" name='test3' />
          <span className='checkmark' style={{background:"white", border:"1px solid black",}}></span>White
      </label> 
    </div>
    </div>
  )
}

export default Colors;
