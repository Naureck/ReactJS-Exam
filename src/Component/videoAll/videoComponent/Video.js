import video1 from '../videos/video-tiktok-1.mp4'
import clsx from 'clsx'
import style from './Video.module.scss'

import { forwardRef, useRef, useImperativeHandle } from 'react'

function Video(prop, ref) {
    const videoClasses = clsx('videoScreen', {

    })

    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <div className='video_wrapper'>
            <video 
                className={videoClasses}
                ref={videoRef}
                src={video1}
                muted='on'
            />
        </div>
    )
}

export default forwardRef(Video);