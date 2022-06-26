
import { BsChevronRight } from 'react-icons/bs';

const Accordion = ({ title, content, img }) => {
  return (
    <div className="accordion-item">
      <div className='acardion_text'>
         
          <span className="accordion-content_header"> <img className="accordion-content-flag" src={img}/>  {title}</span>
          <span className="accordion-content">   {content}  </span>
       </div>
      <li className='right_acardion'> <BsChevronRight /> </li>
    </div>
  );
};

export default Accordion;