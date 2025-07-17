import React from 'react'

const getDriveVideoUrl = (url) => {
  // Match Google Drive preview URL
  const match = url.match(/drive\.google\.com\/file\/d\/([\w-]+)\/preview/)
  if (match) {
    const fileId = match[1]
    // Construct direct video stream URL
    return `https://drive.google.com/uc?export=preview&id=${fileId}`
  }
  return null
}

const Player = ({ videoUrl }) => {
  const driveVideo = getDriveVideoUrl(videoUrl)
  return (
    <div>
      <div className="aspect-video">
        {!videoUrl ? (
          <video src={driveVideo} controls className="w-full h-full" />
        ) : (
          <iframe
            src={videoUrl}
            title="Video player"
            frameBorder="0"
            allow="autoplay; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        )}
      </div>
    </div>
  )
}

export default Player