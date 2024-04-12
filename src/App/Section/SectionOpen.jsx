import './Section.css'
// eslint-disable-next-line react/prop-types
const SectionOpen = ({isOpen, text}) => {
    if(isOpen === true){
        return(
            <div className='divOpen'>
                <p>{text}</p>
            </div>
        )
    }else {
        return null
    }
}

export default SectionOpen