import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'

import styles from './Card.styles.module.css'

export default function Card2() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(500px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <div className={styles.container} onClick={() => set(state => !state)}>
      <a.div
        className={`${styles.c} ${styles.back2}`}
        style={{ opacity: opacity.to(o => 1 - o), transform }}
      />
      <a.div
        className={`${styles.c} ${styles.front2}`}
        style={{
          opacity,
          transform,
          rotateY: '180deg'
        }}
      />
    </div>
  )
}