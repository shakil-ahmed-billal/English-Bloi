

const Player = ({ videoFile }) => {

  console.log("Video Info:", videoFile)

  return (
    <div>
      <div className="aspect-video">
        <iframe
          src={videoFile?.link}
          title="Video player"
          frameBorder="0"
          allow="autoplay; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  )
}

export default Player