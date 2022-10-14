export function GetYandexMapRouteUrl(latAndLon) {
    return `https://yandex.ru/maps/2/saint-petersburg/?ll=${latAndLon[1]}%2C${latAndLon[0]}&mode=routes&rtext=~${latAndLon[0]}%2C${latAndLon[1]}&rtt=auto&ruri=~&z=18`
}