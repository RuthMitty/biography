import {Text, View, StyleSheet, Image} from 'react-native'


const GalleryComponent = () => {
    return(
        <View>
            <View styles={styles.contenedor}>
                <Image style={styles.image} source={require('../assets/images/groggy.png')}/>
                <Text style={styles.desc}>Rana 3D hecha en Blender</Text>
            </View>
            <View styles={styles.contenedor}>
                <Image style={styles.image} source={require('../assets/images/snowsnow.png')}/>
                <Text style={styles.desc}>Escena nevada hecha con add-ons en Blenderr</Text>
            </View>
            <View styles={styles.contenedor}>
                <Image style={styles.image} source={require('../assets/images/oct10.png')}/>
                <Text style={styles.desc}>Imagen creada pra el día de la salud mental</Text>
            </View>
        </View>
   );
}


const styles = StyleSheet.create({
    desc:{
        fontSize: 10,
        fontWeight: 'normal',
        color: '#dfe6e9',
        textAlign: 'center'
    },
    image:{
        width: 200,
        height: 200,
        alignSelf: 'center',
        flex:1
    },
    contenedor:{
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GalleryComponent;