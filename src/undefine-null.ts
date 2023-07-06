function menyapa(waktu?: String | null) {
        if(waktu){
                console.log(`selamat ${waktu}`)
        }else{
                console.log("halo")
        }
}

menyapa("siang")
const waktu: string | undefined = undefined
menyapa(waktu)
menyapa(null)
