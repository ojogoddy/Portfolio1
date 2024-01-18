import { useState } from 'react'
import close from "../assets/close.svg"

const PortfolioItem = ({img, title, details}:any) => {
    const [modal, setModal] = useState(false)
    const toggleModal =()=>{
        setModal(!modal)
    }
  return (
    <div className='portfolio__item'>
        <img src={img} className='portfolio__img' alt="" />
        <div className="portfolio__hover" onClick={toggleModal}>
            <h3 className="portfolio__title">{title}</h3>
        </div>
        {modal && (
            <div className="portfolio__modal">
            <div className="portfolio__modal-content">
                <img src={close} alt="" className="modal__close" onClick={toggleModal} />
            
            <h3 className="modal__title">{title}</h3>
            <ul className="modal__list grid">
                {details.map(({icon, title, desc}:any, index:any)=>{
                    return(
                        <li className="modal__item" key={index}>
                            <span className="item__">{icon}</span>
                            <div className="">
                                <span className="item_-title">{title}</span>
                                <span className="item__details">{desc}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <img src={img} alt="" className="modal__img" />
            </div>
        </div>
        )}
        
    </div>
  )
}

export default PortfolioItem