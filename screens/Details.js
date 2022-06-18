import { Image, FlatList, SafeAreaView, StatusBar, Text, View } from 'react-native'
import React from 'react'

import { COLORS, FONTS, SHADOWS, SIZES, assets } from '../constants'
import { CircleButton, DetailsBid, DetailsDesc, FocusedStatusBar, RectButton, SubInfo } from '../components'

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: '100%', height: 373, }}>
      <Image source={data.image} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
      <CircleButton imgUrl={assets.left} left={15} top={StatusBar.currentHeight + 10 } handlePress={() => navigation.goBack()} />
      <CircleButton imgUrl={assets.heart} right={15} top={StatusBar.currentHeight + 10 } />
    </View>
  )
}

const Details = ({ route, navigation }) => {
  const data = route.params.data

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar barStyle='dark-content' backgroundColor='transparent' translucent={true} />
      <View style={{ width: '100%', position: 'absolute', bottom: 0, paddingVertical: SIZES.font, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)', zIndex: 1 }}>
        <RectButton label='Place a Bid' minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList data={data.bids} renderItem={(item => <DetailsBid bid={item.item} />)} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3}} ListHeaderComponent={() => (
        <React.Fragment>
          <DetailsHeader data={data} navigation={navigation} />
          <SubInfo  />
          <View style={{ padding: SIZES.font }}>
            <DetailsDesc data={data} />
            {data.bids.length > 0 && (
              <Text style={{ fontSize: SIZES.font,fontFamily: FONTS.semiBold, color: COLORS.primary}}>
                Current Bids
              </Text>
            )}
          </View>
        </React.Fragment>
      )} />
    </SafeAreaView>
  )
}

export default Details