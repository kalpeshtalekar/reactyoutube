import './ExpenceItem.css';

function ExpenceItem(){
    return(
<div>
    <div className='expence-item'>
        <div>March 22nd 1983</div>
        <div className='expence-item-description'>
           <h2>Car Insurence</h2>
           <div>$200</div>
        </div>
    </div>
</div>
    );
}

export default ExpenceItem;