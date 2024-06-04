// Función para redirigir según la ubicación del usuario
function redirigirSegunUbicacion() {
    // Intenta obtener la ubicación del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitud = position.coords.latitude;
            const longitud = position.coords.longitude;

            // AQUÍ PUEDES AÑADIR CONDICIONES PARA DETERMINAR LA REDIRECCIÓN BASADA EN LA UBICACIÓN
            // Por ejemplo, redirigir si la latitud está dentro de un rango específico
            if (latitud > -20.9 && latitud < 40 && longitud > -50.3 && longitud < -90.5) {
                // Redirigir si la ubicación está dentro de un rango específico (Nueva York)
                window.location.href = '/pages/suc1.html';
            } else {
                // Redirigir a una página predeterminada si no se cumple ninguna condición
                window.location.href = '/pages/sin_resultado.html';
            }
        });
    } else {
        // El navegador no admite geolocalización, redirigir a una página predeterminada
        window.location.href = '/index.html';
    }
}

// Llama a la función de redirección cuando se cargue la página
window.onload = redirigirSegunUbicacion;

