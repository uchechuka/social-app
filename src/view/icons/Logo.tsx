import React from 'react'
import {type TextProps} from 'react-native'
import {Image} from 'expo-image'

import {useKawaiiMode} from '#/state/preferences/kawaii'

type Props = {
  style?: TextProps['style']
  // width is the only prop we need now
  width?: number
}

export const Logo = React.forwardRef(function LogoImpl(props: Props, ref) {
  const {style} = props
  // @ts-ignore it's fiiiiine
  const size = parseInt(String(props.width || 32), 10)

  const isKawaii = useKawaiiMode()

  if (isKawaii) {
    return (
      <Image
        source={
          size > 100
            ? require('../../../assets/kawaii.png')
            : require('../../../assets/kawaii_smol.png')
        }
        accessibilityLabel="Bluesky"
        accessibilityHint=""
        accessibilityIgnoresInvertColors
        style={[{height: size, aspectRatio: 1.4}]}
      />
    )
  }

  return (
    <Image
      ref={ref}
      source="/images/logo.png"
      accessibilityLabel="App Logo"
      accessibilityHint=""
      accessibilityIgnoresInvertColors
      style={[{width: size, height: size}, style]}
    />
  )
})
