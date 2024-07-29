import { StyleSheet,Dimensions } from "react-native";
export default StyleSheet.create({
    container:{backgroundColor:'white',margin:10,borderRadius:10},
    image:{height:Dimensions.get('window').height / 4,borderTopLeftRadius:5,borderTopRightRadius:5,},
    title:{fontWeight:'bold',fontSize:18},
    description:{marginTop:3},
    inner_container:{padding:5},
author:{fontStyle:'italic',textAlign:"right"},
banner_image:{height:Dimensions.get('window').height /5}
})