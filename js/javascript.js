// Función para redireccionar según ubicación
function redireccionarSegunUbicacion(latitudUsuario, longitudUsuario, latitudUbicacionDeseada, longitudUbicacionDeseada, distanciaUmbral, paginaCercana, paginaPorDefecto) {
    // Calcula la distancia entre la ubicación del usuario y la ubicación deseada
    const distancia = calcularDistancia(latitudUsuario, longitudUsuario, latitudUbicacionDeseada, longitudUbicacionDeseada);

    if (distancia <= distanciaUmbral) {
        // El usuario está cerca de la ubicación deseada, redirige
        window.location.href = paginaCercana;
    } else {
        // El usuario no está cerca de la ubicación deseada, redirige a una página por defecto
        window.location.href = paginaPorDefecto;
    }
}

// Función para calcular la distancia entre dos coordenadas geográficas (fórmula de Haversine)
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const radioTierra = 6371; // Radio de la Tierra en kilómetros
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = radioTierra * c;
    return distancia;
}

// Ejemplo de uso
// Obtener la ubicación del usuario (simulado para propósitos de demostración)
const latitudUsuario = -32.92359689952504; // Latitud de Nueva York
const longitudUsuario = -68.8442934002742; // Longitud de Nueva York

// Ubicación deseada (por ejemplo, un restaurante)
const latitudUbicacionDeseada = -32.89084; // Latitud de Los Ángeles
const longitudUbicacionDeseada = -68.82717; // Longitud de Los Ángeles

// Distancia umbral (en kilómetros)
const distanciaUmbral = 500; // Por ejemplo, 500 km

// Páginas para redireccionar
const paginaCercana = '../pages/suc1.html';
const paginaPorDefecto = '../index.html';

// Llama a la función de redireccionamiento
redireccionarSegunUbicacion(latitudUsuario, longitudUsuario, latitudUbicacionDeseada, longitudUbicacionDeseada, distanciaUmbral, paginaCercana, paginaPorDefecto);
