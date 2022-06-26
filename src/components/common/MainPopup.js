import Header from "../../header"

function MainPopup({onClose, data}){

      return(
        <div className={"hover"} onMouseLeave={onClose}>
            <Header data={data}/>
        </div>
        
        
    )
   
}

export default MainPopup