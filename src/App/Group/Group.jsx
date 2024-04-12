
import SectionOpen from "../Section/SectionOpen"
import React from "react"
import './Group.css'
const Group = () => {
    const [isOpen, setOpen] = React.useState(false)
    return(
        <>
            <span>
            <h3 className='sectionTitle'>lorem sadhjknjandjaodaoo</h3>
                <button onClick={() => setOpen(!isOpen)}><img src={`../../images/${isOpen ? 'icon-minus.svg' : 'icon-plus.svg'}`} alt="" /></button>
            </span>
            <SectionOpen isOpen={isOpen} setOpen={setOpen} text='lorema ai jdnlja diajn osdn asdi jksaodksma da doa nmdianda'/>
            <hr />
        </>
       
    )
}

export default Group