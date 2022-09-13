import React, {useRef, useState} from 'react'
import {Button} from 'antd'
import './ButtonStartCall.scss'

const constraints = {
  'video': true,
  'audio': true
}

const ButtonStartCall = () => {
  const [loadingLocal, setLoadingLocal] = useState<boolean>(false)
  const [loadingRemote, setLoadingRemote] = useState<boolean>(false)
  const [disabledCall, setDisabledCall] = useState<boolean>(true)

  const $localVideo: React.MutableRefObject<null> = useRef(null)
  const $remoteVideo: React.MutableRefObject<null> = useRef(null)

  const enterLoadingLocal = () => {
    setLoadingLocal(true)

    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        // @ts-ignore
        $localVideo.current.srcObject = stream
        setDisabledCall(false)
      })
      .catch(error => {
        console.error('Error accessing media devices.', error)
      })
      .finally(() => {
        setLoadingLocal(false)
      })
  }

  const enterLoadingRemote = async () => {
    setLoadingRemote(true)

    const configuration = {
      iceServers: [
        {
          urls: ['stun:stun.l.google.com:19302']
        },
        {
          urls: ['stun:stun.l.google.com:19302'],
          username: 'username',
          credential: 'password'
        }
      ]
    }
    const peerConnection = new RTCPeerConnection(configuration);
  }

  return (
    <div className="ts_container">
      <div>
        <Button
          type="primary"
          size="large"
          icon={<span>GO</span>}
          loading={loadingLocal}
          onClick={enterLoadingLocal}
        />
        <Button
          type="primary"
          size="large"
          icon={<span>Call</span>}
          loading={loadingRemote}
          onClick={enterLoadingRemote}
          disabled={disabledCall}
        />
      </div>

      <video ref={$localVideo}
             playsInline
             autoPlay
      />
      <video ref={$remoteVideo}/>
    </div>
  )
}

export default ButtonStartCall
