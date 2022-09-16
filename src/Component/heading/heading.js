import clsx from 'clsx'
import style from './heading.module.scss'

function Heading({ Heading, btnHeading }) {
    
    const HeadingClass = clsx('HeadingOnVideo', {
        [style.btnHeading]: btnHeading
    })

    return (
        <div className='heading_wrapper'>
            <h1 className={HeadingClass}>Video on TikTok</h1>
        </div>
    )   
}

export default Heading;