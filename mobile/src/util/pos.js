export default function getPosition () {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos)=>{
        var latlng = {lat: pos.coords.latitude, lng: pos.coords.longitude};
        var geocoder = new google.maps.Geocoder
        geocoder.geocode({'location': latlng}, (r, s)=>{
          if ((s === 'OK')&&r[0]) {
            resolve(r[0].formatted_address)
          } else {
            reject('获取地址失败')
          }
        }, (err) => {
          reject(err)
        })
      })
    } else {
      reject('获取地址失败')
    }
  })
}
