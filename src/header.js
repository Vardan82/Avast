import { product } from "./svg"
import { AiFillWindows } from 'react-icons/ai';
import { IoIosAppstore, IoIosCube } from 'react-icons/io';
import { SiIos } from 'react-icons/si';




function Header({ data, text }) {
    console.log(data);
    return (
        <>
            {
                data?.map((el, i) => {
                    return (
                        <div className="securitHover" key={i}>
                            <div className="headerProduct">
                                <div className="productLink">
                                    <div className="productImg"> {product} </div>
                                    <span className="productName"> {el.title}</span>
                                </div>
                                <div className="hoverIcons">
                                    <div> <AiFillWindows /> </div>
                                    <div> <IoIosAppstore /> </div>
                                    <div> <IoIosCube /> </div>
                                    <div> <SiIos /> </div>

                                </div>
                                <div className="hoverWord">
                                    {el.description}
                                </div>

                            </div>
                           
                        </div>

                    );
                })
            }
      

        </>
    )

}

export default Header