import Svg, {type SvgProps, Text, type TextProps} from 'react-native-svg'

import {usePalette} from '#/lib/hooks/usePalette'

const ratio = 20 / 70 // Adjusted for new text

export function Logotype({
  fill,
  ...rest
}: {fill?: TextProps['fill']} & SvgProps) {
  const pal = usePalette('default')
  // @ts-ignore it's fiiiiine
  const size = parseInt(String(rest.width || 32), 10)

  return (
    <Svg
      fill="none"
      viewBox="0 0 70 20"
      {...rest}
      width={size}
      height={Number(size) * ratio}>
      <Text
        fill={fill || pal.text.color}
        x="35"
        y="15"
        fontSize="16"
        fontWeight="bold"
        fontFamily="InterVariable, sans-serif"
        textAnchor="middle">
        ebube
      </Text>
    </Svg>
  )
}
