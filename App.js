import{ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, Alert,}from
'react-native';

function socialBotton(){
  const openSocialLink = (url) => {
    //umtuk buka linknya langsung
    linking.openURL(url).catch((err)=>
    console.error('Gagal Memebuka Link', err)
    );
  };
};

export default function App(){
return(
  <ScrollView style= {styles.halaman} contentContainerStyle={styles.isihalaman}>
    <View style = {styles.kartu}>
    <Image
  style={styles.foto}
  source={{
    uri: 'https://cdn.idntimes.com/content-images/post/20220827/bunga-krisan-a4f07eb6c97e5d25f9c4d4125e0f9017.jpg'
  }}
/>

<Text style={styles.nama}>Fani Nuraini</Text>

<Text style={styles.jurusan}>
Mahasiswa Manajemen Informatika
</Text>

<Text style={styles.email}>
faninuraini71@gmail.com
</Text>

<TouchableOpacity
  style={styles.tombol}
  onPress={() => openSocialLink('https://www.instagram.com/blush._31/?hl=en')}
>
  <Text style={styles.teksTombol}>Hubungi</Text>
</TouchableOpacity>
    </View>
  </ScrollView>
);
}

const styles= StyleSheet.create({
  halaman: {
    flex: 1,
    backgroundColor: '#006400',
  },
  isihalaman: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 47,
  },
  kartu: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
    elevation: 3,
    shadowColor: '#FFFF00',
    shadowOffset: {width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  foto: {
width: 100, // lebar foto
height: 100, // tinggi foto
borderRadius: 50, // foto berbentuk lingkaran
marginBottom: 16, // jarak bawah foto
},

nama: {
fontSize: 22,
fontWeight: 'bold',
color: '#F8BBD0',
},

jurusan: {
fontSize: 14,
color: '#F8BBD0',
marginTop: 4,
textAlign: 'center',
},

email: {
fontSize: 14,
color: '#F8BBD0',
marginTop: 8,
},

tombol: {
backgroundColor: '#F8BBD0',
padding: 12,
borderRadius: 8,
alignItems: 'center',
marginTop: 8,
width: '100%',
},

teksTombol: {
color: '#FFFFFF',
fontWeight: 'bold',
},

})