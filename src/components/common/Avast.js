
function Avast({ data, text }) {
    console.log(data);
const onClose = ()=>{

}
    return (
        <>
        <div className={"hoverBlogAvastResarchLab"} onMouseLeave={onClose}>
           {
                data?.map((el, i) => {
                    return (
                        <div className="navBlogsHover" key={i}>
                          
                                <div className="blogsHover">
                                        <span className="avasttName"> {el.title}</span>
                                        
                                    
                                        <div className="avastWord">
                                            {el.description}
                                        </div>

                                </div>
                        </div>
                           
                      

                    );
                })
            }
           
        </div>
            

        </>
    )

}

export default Avast