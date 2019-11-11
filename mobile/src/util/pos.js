// export default function getPosition () {
//   return new Promise((resolve, reject) => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((pos)=>{
//         var latlng = {lat: pos.coords.latitude, lng: pos.coords.longitude};
//         var geocoder = new google.maps.Geocoder
//         geocoder.geocode({'location': latlng}, (r, s)=>{
//           if ((s === 'OK')&&r[0]) {
//             resolve(r[0].formatted_address)
//           } else {
//             reject('获取地址失败')
//           }
//         }, (err) => {
//           reject(err)
//         })
//       })
//     } else {
//       reject('获取地址失败')
//     }
//   })
// }

import axios from 'axios'

export default function getPosition () {
    return new Promise( (resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos)=>{
          let lat = pos.coords.latitude
          let lng = pos.coords.longitude
          let host = 'https://maps.googleapis.com/maps/api/geocode'
          let key = 'AIzaSyBSWEVNt2h8CrDWufKNy32k-t14tnW9D9I'
          let url = `${host}/json?language=ja&key=${key}&latlng=${lat},${lng}`
          const r = await axios.get(url)
          if (r && r.status === 200) {
            resolve({
              lat,
              lng,
              loc: r.data.results[0].formatted_address
            })
          }else{
            reject('获取地址失败')
          }

          // let lat = pos.coords.latitude
          // let lng = pos.coords.longitude
          // let params = { params: { lat: pos.coords.latitude, lng: pos.coords.longitude } }
          // let host = 'https://manqc.site/loc'
          // // let host = 'http://localhost:8080/loc'
          // alert(host)
          // const r = await axios.get(host,params)
          // if (r && r.status === 200) {
          //   console.log(r.data)
          //   resolve(r.data.data)
          // }else{
          //   reject('获取地址失败')
          // }
        })
      } else {
        // console.log('获取地址失败')
        reject('获取地址失败')
      }
    })
}

