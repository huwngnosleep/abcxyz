import { Dimensions } from 'react-native'

width: Dimensions.get('window').width / 4
// trên ios thì window hay screen không có gì khác biệt
// còn trên androi thì lằng nhằng hơn một tí
// auto cứ nên lấy window

// dùng ternary operator để style
marginBottom: Dimensions.get('window').height > 600 ? 10 : 5 