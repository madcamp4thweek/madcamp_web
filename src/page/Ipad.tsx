import React, { useState, useCallback, CSSProperties, useEffect } from 'react'
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'

import styles from './Ipad.style.module.css'

const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = [
  ({ style }) => <animated.div style={{ ...style, background: 'white'}}><img className = {styles.image} src = './jpeg/KakaoTalk_Photo_2022-01-24-19-33-46-001.jpeg'></img></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'white'}}><img className = {styles.image} src = './jpeg/KakaoTalk_Photo_2022-01-24-19-33-47-002.jpeg'></img></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'white'}}><img className = {styles.image} src = './jpeg/KakaoTalk_Photo_2022-01-24-19-33-47-003.jpeg'></img></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'white'}}><img className = {styles.image} src = './jpeg/KakaoTalk_Photo_2022-01-24-19-33-47-004.jpeg'></img></animated.div>,
]

function Ipad() {
  const [index, set] = useState(0)  
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(0%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0%,0,0)' },
  })
  useEffect(() => {
    transRef.start()
  }, [index])
  return (
    <div className={`flex fill ${styles.container}`} onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })}
    </div>
  )
}

export default Ipad;