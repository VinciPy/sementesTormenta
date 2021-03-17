import React, {Component, useEffect} from 'react'
import { Alert, Pressable, Keyboard, StyleSheet, Text, Image, ImageBackground, View, TextInput, ImageBackgroundBase, Modal, BackHandler, ScrollView } from 'react-native';
import { Input, Button, Avatar, Select, SelectItem, IndexPath, Layout, Popover,  Mo } from '@ui-kitten/components';
import Slider from '@react-native-community/slider';
import RNPickerSelect from 'react-native-picker-select';
import { WebView } from 'react-native-webview';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";



export default () =>  {
    const [cultivar, setCultivar] = React.useState('HO Jacutinga IPRO');
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalVisible1, setModalVisible1] = React.useState(false);
    const [area, setArea] = React.useState('Hectare');
    const [sementesMetroLinear, setSementesMetroLinear] = React.useState('20');
    const [espacamento, setEspacamento] = React.useState('45');
    const [sacaria, setSacaria] = React.useState('200000');
    const [areaPlantar, setAreaPlantar] = React.useState('18');
    const [sementesMetrosQuadrados, setSementesMetrosQuadrados] = React.useState('33.33');
    const [populacao, setPupulacao] = React.useState('333300.00');
    const [embalagemPorArea, setEmabalagemPorArea] = React.useState('1.67');
    const [volumeTotal, setVolumeTotal] = React.useState('30.06');
    const [correcao, setCorrecao] = React.useState('0');
    const [visible, setVisible] = React.useState(false);
    const [visible1, setVisible1] = React.useState(false);

    function abrir(){
      setModalVisible(true)
      setModalVisible1(true)
    }
    function addCommas(nStr) {
      nStr += '';
      var x = nStr.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
              x1 = x1.replace(rgx, '$1' + '.' + '$2');
      }
      return x1 + x2;
  }

  const _keyboardDidHide = () => {
    console.log(parseInt(sementesMetroLinear))
    console.log('opa')
    if (parseInt(sementesMetroLinear) < 31  && parseInt(sementesMetroLinear) > 4) {
      return
    
    } else {
      alert("Digite um numero entre 05 e 30")
      
    }

 
  };

  
  const _keyboardDidHide2 = () => {
    console.log(parseInt(sementesMetroLinear))
    console.log('opa')
    if (parseInt(espacamento) < 52  && parseInt(espacamento) > 44) {
      return
    
    } else {
      alert("Digite um numero entre 45 e 50")
      
    }

 
  };
	

const regex = /[a-z]/;

   const CalculosonMetro = (t) => {
    setSementesMetroLinear(t)
    area == 'Hectare' ? metros_ = 10000 : metros_ = 24200
    let metros_quadrados = t / (espacamento / 100)
   
    metros_quadrados = metros_quadrados.toFixed(2)
    let metros_lineares = area /( espacamento /100)
    let sementesPorHectare = metros_quadrados * metros_;
    sementesPorHectare = sementesPorHectare.toFixed(2)
    let embalagem_hectare = sementesPorHectare / sacaria
    if(correcao > 0) {
      embalagem_hectare =  parseFloat(embalagem_hectare * (parseInt(correcao) / 100)) + parseFloat(embalagem_hectare)
    }
    embalagem_hectare = embalagem_hectare.toFixed(2)
    let total = embalagem_hectare * areaPlantar
    total = total.toFixed(2)
    setSementesMetrosQuadrados(metros_quadrados.toString())
    setPupulacao(sementesPorHectare)
   
    setEmabalagemPorArea(embalagem_hectare)
    setVolumeTotal(total)
   }

   const CalculosonEspacamento = (t) => {
    setEspacamento(t)
    area == 'Hectare' ? metros_ = 10000 : metros_ = 24200
    console.log(t)
    let metros_quadrados = sementesMetroLinear /(parseInt(t) / 100)
    metros_quadrados = metros_quadrados.toFixed(2)
    let metros_lineares = area /(t /100)
    let sementesPorHectare = metros_quadrados * metros_;
    sementesPorHectare = sementesPorHectare.toFixed(2)
    let embalagem_hectare = sementesPorHectare / sacaria
    if(correcao > 0) {
      embalagem_hectare =  parseFloat(embalagem_hectare * (parseInt(correcao) / 100)) + parseFloat(embalagem_hectare)
    }
    embalagem_hectare = embalagem_hectare.toFixed(2)
    let total = embalagem_hectare * areaPlantar
    total = total.toFixed(2)
    setSementesMetrosQuadrados(metros_quadrados.toString())
    setPupulacao(sementesPorHectare)
    setEmabalagemPorArea(embalagem_hectare)
    setVolumeTotal(total)
   }

   const iconSprout = () => {
     return (
       <Image style={{ width: 13, height: 13}} width={100} height={10} source={require('../../assets/sprout.png')}></Image>
     )
   }
   const iconArea = () => {
    return (
      <Image style={{ width: 13, height: 13}} width={100} height={10} source={require('../../assets/area.png')}></Image>
    )
  }
  const iconSpacing = () => {
    return (
      <Image style={{ width: 13, height: 13}} width={100} height={10} source={require('../../assets/text-spacing.png')}></Image>
    )
  }
  
  const CalculosonSacaria = (t) => {
        setSacaria(t)
        area == 'Hectare' ? metros_ = 10000 : metros_ = 24200
        let metros_quadrados = sementesMetroLinear /(espacamento / 100)
        metros_quadrados = metros_quadrados.toFixed(2)
        let metros_lineares = area /(espacamento /100)
        let sementesPorHectare = metros_quadrados * metros_;
        sementesPorHectare = sementesPorHectare.toFixed(2)
        let embalagem_hectare = sementesPorHectare / t
        if(correcao > 0) {
          embalagem_hectare =  parseFloat(embalagem_hectare * (parseInt(correcao) / 100)) + parseFloat(embalagem_hectare)
        }
        embalagem_hectare = embalagem_hectare.toFixed(2)
        let total = embalagem_hectare * areaPlantar
        total = total.toFixed(2)
        setSementesMetrosQuadrados(metros_quadrados.toString())
        setPupulacao(sementesPorHectare)
        setEmabalagemPorArea(embalagem_hectare)
        setVolumeTotal(total)
       }

       const CalculosonArea = (t) => {
        setAreaPlantar(t)
        area == 'Hectare' ? metros_ = 10000 : metros_ = 24200
        let metros_quadrados = sementesMetroLinear /(espacamento / 100)
        metros_quadrados = metros_quadrados.toFixed(2)
        let metros_lineares = area /(espacamento /100)
        let sementesPorHectare = metros_quadrados * metros_;
        sementesPorHectare = sementesPorHectare.toFixed(2)
        let embalagem_hectare = sementesPorHectare / sacaria
        if(correcao > 0) {
          embalagem_hectare =  parseFloat(embalagem_hectare * (parseInt(correcao) / 100)) + parseFloat(embalagem_hectare)
        }
        embalagem_hectare = embalagem_hectare.toFixed(2)
        let total = embalagem_hectare * t
        total = total.toFixed(2)
        setSementesMetrosQuadrados(metros_quadrados.toString())
        setPupulacao(sementesPorHectare)
        setEmabalagemPorArea(embalagem_hectare)
        setVolumeTotal(total)
       }

       const CalculosCorrecao = (t) => {
        setCorrecao(t)
        area == 'Hectare' ? metros_ = 10000 : metros_ = 24200
        let metros_quadrados = sementesMetroLinear /(espacamento / 100)
        metros_quadrados = metros_quadrados.toFixed(2)
        let metros_lineares = area /(espacamento /100)
        let sementesPorHectare = metros_quadrados * metros_;
        sementesPorHectare = sementesPorHectare.toFixed(2)
        let embalagem_hectare = sementesPorHectare / sacaria
        if(correcao > 0) {
          embalagem_hectare =  parseFloat(embalagem_hectare * (parseInt(t) / 100)) + parseFloat(embalagem_hectare)
        }
        embalagem_hectare = embalagem_hectare.toFixed(2)
        let total = embalagem_hectare * areaPlantar
        total = total.toFixed(2)
        setSementesMetrosQuadrados(metros_quadrados.toString())
        setPupulacao(sementesPorHectare)
        setEmabalagemPorArea(embalagem_hectare)
        setVolumeTotal(total)
       }
       const Tipo = (t) => {
        setArea(t)
        t == 'Hectare' ? metros_ = 10000 : metros_ = 24200
        let metros_quadrados = sementesMetroLinear /(espacamento / 100)
        metros_quadrados = metros_quadrados.toFixed(2)
        let metros_lineares = area /(espacamento /100)
        let sementesPorHectare = metros_quadrados * metros_;
        sementesPorHectare = sementesPorHectare.toFixed(2)
        let embalagem_hectare = sementesPorHectare / sacaria
        if(correcao > 0) {
          embalagem_hectare =  parseFloat(embalagem_hectare * (parseInt(t) / 100)) + parseFloat(embalagem_hectare)
        }
        embalagem_hectare = embalagem_hectare.toFixed(2)
        let total = embalagem_hectare * areaPlantar
        total = total.toFixed(2)
        setSementesMetrosQuadrados(metros_quadrados.toString())
        setPupulacao(sementesPorHectare)
        setEmabalagemPorArea(embalagem_hectare)
        setVolumeTotal(total)
       }
        const renderToggleButton = () => (
            <Button style={{color: 'white'}}>
            </Button>
          );

          
    useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', () =>  BackHandler.exitApp())
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', () => true)
    }, [])
 

    
     

    return (
      <ScrollView>
    <ImageBackground style={styles.area} source={require('../../assets/background2.jpg')}>
        
        <Text style={styles.textH1}>Cálculo de Plantabilidade</Text>
        
        <View style={{marginVertical: responsiveHeight(1)}}>
        
        <Text style={{marginTop: responsiveHeight(10)}}>Selecione o Cultivar</Text>
        <RNPickerSelect 
            onValueChange={(value) => setCultivar(value)}
            useNativeAndroidPickerStyle={false}
            style={customPickerStyles.inputAndroid}
            value={cultivar}
            items={[
                { label: 'HO Jacutinga IPRO', value: "HO Jacutinga IPRO" },
                { label: 'HO Amambay IPRO', value: "HO Amambay IPRO" },
                { label: 'HO Pirapó IPRO', value: "HO Pirapó IPRO" },
                { label: 'HO Iguaçu IPRO', value: "HO Iguaçu IPRO" },
                { label: 'HO Tererê IPRO', value: "HO Tererê IPRO" },
                { label: 'HO Apauê RR', value: "HO Apauê RR" },
                { label: 'HO Jauru RR', value: "HO Jauru RR" }
            ]}
            style={{
                iconContainer: {
                  top: 20,
                  right: 10,
                },
                placeholder: {
                  fontSize: 12,
                  fontWeight: 'bold',

                },
                inputAndroid: {
                    backgroundColor: 'white',
                    width: 200,
                    textAlign: "center",
                    borderRadius: 5
                }
              }}
            ></RNPickerSelect>
            
        </View>
        <View style={{marginVertical: 10}}>
        <Text>Selecione um tipo de medida</Text>
            <RNPickerSelect style={customPickerStyles.inputAndroid}
            onValueChange={(value) => Tipo(value)}
            value={area}
            useNativeAndroidPickerStyle={false}
            items={[
                { label: 'Hectare', value: "Hectare" },
                { label: 'Alquere', value: "Alquere" },
            ]}
            style={{
                iconContainer: {
                  top: 20,
                  right: 10,
                },
                placeholder: {
                  fontSize: 12,
                  fontWeight: 'bold',

                },
                inputAndroid: {
                    backgroundColor: 'white',
                    width: 200,
                    textAlign: "center",
                    borderRadius: 5
                   
                }
              }}
        />
        </View>

       
            
         
           
           
        
        <View style={styles.inputGroup}>
            <View style={styles.rowInput}>
                <Text>Sementes /m/linear</Text>
                <Input style={styles.Input}  placeholder='' 
                value={sementesMetroLinear}
                disabled={false}
                accessoryRight={iconSprout}
                keyboardType='numeric'
                onBlur={() => _keyboardDidHide()}
                blurOnSubmit={true}
                onChangeText={t =>  CalculosonMetro(t)}
                /> 
            
             

                <Text style={{marginTop: 17}}>Espaçamento (cm)</Text>
                <Input style={styles.Input} placeholder='' 
                value={espacamento}
                disabled={false}
                accessoryRight={iconSpacing}
                keyboardType='numeric'
                onBlur={() => _keyboardDidHide2()}
                onChangeText={t => CalculosonEspacamento(t)} />
                
                   
               
                {sacaria != '' &&
                <Text style={{textAlignVertical: "center"}}>Saco {addCommas(sacaria)} sementes</Text>
                }
                 <Slider  style={{width: 150, height: 40}}
                minimumValue={200000}
                step={4800000}
                maximumValue={5000000}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={t => CalculosonSacaria(t)}  />
                <Text>Área a Plantar ({area})</Text>
                 <Input style={styles.Input}  placeholder=''
                value={areaPlantar}
                disabled={false}
                onBlur={() => _keyboardDidHide()}
                accessoryRight={iconArea}
                keyboardType='numeric'
                onChangeText={t => CalculosonArea(t)} />
  
            </View>
            <View style={styles.rowInput2}>
                <Text>Sementes /m²</Text>
                <Input style={styles.Input}  placeholder='' 
                value={sementesMetrosQuadrados.replace(".", ",")}
                disabled={true}
               />
                <Text>População Final (sem/{area})</Text>
                <Input style={styles.Input} placeholder='' 
                value={addCommas(populacao.replace(".", ","))}
                disabled={true}
                 />
                  <Text>Emb por {area}</Text>
                <Input style={styles.Input} placeholder='' 
                value={embalagemPorArea.replace(".", ",")}
                disabled={true}
                />
                 <Text>Volume Total (Emb)</Text>
                 <Input style={styles.Input} placeholder='' 
                value={volumeTotal.replace(".", ",")}
                disabled={true}
                />
            </View>
          
        </View>
        <Text>Correção</Text>
        <Text>{correcao}%</Text>
        <Slider  style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={15}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={t => CalculosCorrecao(parseInt(t))}  />
        <Button onPress={() => abrir()} style={styles.btn}>Calcular</Button>
       
        <View style={styles.centeredView}>
        <Modal
      animationType="fade"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible1);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <WebView source={{ uri: 'https://sementestormenta.com.br/' }} style={{width: 320}} />

         
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible1(!modalVisible1)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ fontSize:22, fontWeight:'300', marginBottom:35 }}>{cultivar}</Text>
            <Text style={styles.modalText}>Sementes por metro linear----> {sementesMetroLinear}</Text>
            <Text style={styles.modalText}>Espacamento (cm)----> {espacamento}</Text>
            <Text style={styles.modalText}>Sacaria ----> {addCommas(sacaria)}</Text>
            <Text style={styles.modalText}>Area a plantar(area) ---->{areaPlantar}</Text>
            <Text style={styles.modalText}>Sementes por metro quadrado ---->{sementesMetrosQuadrados.replace(".", ",")}</Text>
            <Text style={styles.modalText}>População ou sementes por {area}  ----> {addCommas(populacao.replace(".", ","))}</Text>
            <Text style={styles.modalText}>Embalage por {area}  ----> {embalagemPorArea.replace(".", ",")}</Text>
            <Text style={styles.modalText}>Volume Total ----> {volumeTotal.replace(".", ",")}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
   
    </View>
    </ImageBackground>
    </ScrollView>
)


    }

    

const styles = StyleSheet.create({ 
  
  area: {
        display: 'flex',
        flexDirection: "column",
        backgroundColor: "#ffff",
        justifyContent: "center",
        alignItems: "center",
        textAlignVertical: "center",
        fontFamily: "Roboto",
       
    },
    background : {
        flex: 1,
        resizeMode: "repeat", 
    },
    rowInput: {
        flex: 1,
        marginHorizontal: 15,
    },
    rowInput2: {
        flex: 1,
        marginHorizontal: 15,
        display: "flex",
        

    },
    textH1 : {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: responsiveHeight(6)
        
    },
    inputGroup: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 20
    },
    Input: {
        marginVertical: 10,
        width: responsiveWidth(35),
        height: responsiveHeight(5),
      
    },
    btn: {
        color: "#bfeaa2",
        backgroundColor: "#bfeaa2",
        borderColor: "#bfeaa2"
    },
    inputAndroid: {
      
        marginVertical: responsiveHeight(10),
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30
    },
    centeredView: {
     // justifyContent: "center",
     // alignItems: "center",
     // alignSelf: "center",
     marginTop: responsiveWidth(20),
     textAlign: "center"
    },
    modalView: {
      alignSelf: "center",
      textAlign: "center",
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
})
const customPickerStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 14,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: 'green',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 14,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });