let angka1 = document.getElementById('angka1')
let angka2 = document.getElementById('angka2')
let hasil = document.getElementById("hasil")

function pisang (type) {
  // switch (type) {
  //   case 'tambah':
  //     let result = parseInt(angka1.value) + parseInt(angka2.value)
  //     hasil.innerHTML = result
  //     break;
  
  //   default:
  //     break;
  // }

  if (angka1.value && angka2.value) {
    // if (type === 'tambah') {
    //   let result = parseInt(angka1.value) + parseInt(angka2.value)
    //   hasil.innerHTML = result
    // }

    type === 'tambah' 
      ? hasil.innerHTML = parseInt(angka1.value) + parseInt(angka2.value)
      : type === 'kurang'
        ? hasil.innerHTML = parseInt(angka1.value) - parseInt(angka2.value)
        :type === 'kali'
          ? hasil.innerHTML = parseInt(angka1.value) * parseInt(angka2.value)
          : hasil.innerHTML = parseInt(angka1.value) / parseInt(angka2.value)
  }else{
    hasil.innerHTML = "Hayoo!!! jangan di kosongin bos!!"
  }

}