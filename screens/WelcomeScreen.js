import { Image, View } from 'react-native'

import { RectButton } from '../components'
import { COLORS, SHADOWS } from '../constants'

const WelcomeScreen = ({ navigation }) => {
  
  return (
    <View style={{ width:'100%', height: '100%', alignItems: 'center', backgroundColor: COLORS.secondary }}>
      <Image source={require('../assets/images/welcome.jpg')} resizeMode='cover' style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />
      <Image source={require('../assets/images/logo.png')} resizeMode='contain' style={{ width: 300, height: 100, position: 'absolute', top: '40%', backgroundColor: COLORS
    .white }} />
      <RectButton label='Continue' minWidth={300} position='absolute' bottom={50} handlePress={() => navigation.navigate('Home')} {...SHADOWS.light} />
    </View>
  )
}

export default WelcomeScreen