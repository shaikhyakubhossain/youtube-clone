import React from 'react'
import PropsTypes from 'prop-types'

const VideoPlayer = ({embedId}) => {

  return (
    <div>
        <iframe src={"https://www.youtube.com/embed/" + embedId} frameborder="0"></iframe>
    </div>
  )

}

    VideoPlayer.propsTypes = {
        embedId: PropsTypes.string.isRequired
    }

export default VideoPlayer;