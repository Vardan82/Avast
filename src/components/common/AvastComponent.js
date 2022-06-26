import Avast from "./Avast"


function AvastComponent({onClose, data}){
    return(
        <div className={"hoverBlogAvastResarchLab"} onMouseLeave={onClose}>
                <Avast data={data}/>
        </div>
    )
}

export default AvastComponent