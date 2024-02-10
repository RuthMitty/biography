import {Text, View, StyleSheet} from 'react-native'


const TextComponent = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Ruth Sarahí Martínez Sánchez</Text>
            <Text style={styles.text}>Ingeniera de software</Text>
            <Text style={styles.text}>Fecha de nacimiento: 14/01/23</Text>
            <Text style={styles.title}>Un poco sobre mí:</Text>
            <Text style={styles.text}>Actualmente vivo en Querétaro y estudio en la Facultad de Informática de la UAQ</Text>
            <Text style={styles.text}>Mis metas más importantes son mantener un buen promedio para titularme por promedio, siempre tengo en cuenta este meta ya que en un futuro quiero apoyar económicamente a mis papás.</Text>
            <Text style={styles.title}>Galería</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 14,
        fontWeight: 'normal',
        color: '#dfe6e9',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'#dfe6e9',
        padding: '20px'
    }
})

export default TextComponent;