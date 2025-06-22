import React from 'react'

const Player = ({videoUrl}) => {
  return (
    <div>
        <div className="aspect-video">
            <iframe
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
            ></iframe>
        </div>
    </div>
  )
}

export default Player