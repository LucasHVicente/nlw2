import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import HeartOutlineIcon  from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon  from '../../assets/images/icons/unfavorite.png'
import whatsappIcon  from '../../assets/images/icons/whatsapp.png'


function TeacherItem(){

    return (
        <View style={styles.container}>
            <View style={styles.profile} >
               <Image 
                    style={styles.avatar} 
                    source={{
                        uri: 'https://pbs.twimg.com/profile_images/1215280159588261888/pzneJg0D_400x400.jpg'
                    }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Vince</Text>
                    <Text style={styles.subject}>Quimica</Text>
                </View> 
            </View>
            <Text style={styles.bio} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

            <View style={styles.footer} >

                <Text style={styles.price} >
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}>30,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={HeartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;