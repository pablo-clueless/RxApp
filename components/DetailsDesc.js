import { View, Text } from 'react-native'
import React,{ useState } from 'react'

import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100))
  const [readMore, setReadMore] = useState(false)

  return (
    <React.Fragment>
      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <NFTTitle title={data.name} subtitle={data.creator} titleSize={SIZES.extraLarge} subtitleSize={SIZES.large} />
        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text style={{ fontSize: SIZES.font, fontFamily: FONTS.semiBold, color: COLORS.primary }}>
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text style={{ fontSize: SIZES.font, fontFamily: FONTS.regular, color: COLORS.secondary, lineHeight: SIZES.large }}>
            {text}{!readMore && '...'}
          </Text>
          <Text onPress={() => {
            if(!readMore) {
              setText(data.description)
              setReadMore(true)
            } else {
              setText(data.description.slice(0, 100))
              setReadMore(false)
            }
          }} style={{ fontSize: SIZES.small, fontFamily: FONTS.semiBold, color: COLORS.primary}}>
            {readMore ? 'show less': 'read more'}
          </Text>
        </View>
      </View>
    </React.Fragment>
  )
}

export default DetailsDesc