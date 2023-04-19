import './HouseContainer.css'

const DataCard = ({type , value }) =>{
    return(
        <div className= 'card_body'>
           <p>
                {type} : {value} tk
            </p> 
        </div>
        

        
            
    );
}

export default DataCard;