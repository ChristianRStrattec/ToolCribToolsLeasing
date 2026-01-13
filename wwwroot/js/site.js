//// Función para descargar archivos
//function downloadFile(base64Data, fileName, contentType) {
//    try {
//        // Crear un blob desde el base64
//        const byteCharacters = atob(base64Data);
//        const byteNumbers = new Array(byteCharacters.length);
//        for (let i = 0; i < byteCharacters.length; i++) {
//            byteNumbers[i] = byteCharacters.charCodeAt(i);
//        }
//        const byteArray = new Uint8Array(byteNumbers);
//        const blob = new Blob([byteArray], { type: contentType });

//        // Crear enlace de descarga
//        const url = window.URL.createObjectURL(blob);
//        const link = document.createElement('a');
//        link.href = url;
//        link.download = fileName;
//        document.body.appendChild(link);

//        // Simular click y limpiar
//        link.click();
//        document.body.removeChild(link);
//        window.URL.revokeObjectURL(url);

//        console.log('Archivo descargado exitosamente:', fileName);
//        return true;
//    } catch (error) {
//        console.error('Error al descargar archivo:', error);
//        return false;
//    }
//}

//// Función alternativa más simple (compatible con todos los navegadores)
//function downloadFileFromStream(base64Data, fileName) {
//    const link = document.createElement('a');
//    link.href = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${base64Data}`;
//    link.download = fileName;
//    document.body.appendChild(link);
//    link.click();
//    document.body.removeChild(link);
//}

//// Función para mostrar mensajes (opcional)
//function showAlert(message) {
//    alert(message);
//}

//// Función para confirmar acciones
//function confirmAction(message) {
//    return confirm(message);
//}



//function downloadFile(base64Data, fileName, contentType) {
//    // Convertir base64 a blob
//    const byteCharacters = atob(base64Data);
//    const byteNumbers = new Array(byteCharacters.length);
//    for (let i = 0; i < byteCharacters.length; i++) {
//        byteNumbers[i] = byteCharacters.charCodeAt(i);
//    }
//    const byteArray = new Uint8Array(byteNumbers);
//    const blob = new Blob([byteArray], { type: contentType });

//    // Crear enlace de descarga
//    const url = window.URL.createObjectURL(blob);
//    const a = document.createElement('a');
//    a.href = url;
//    a.download = fileName;
//    document.body.appendChild(a);
//    a.click();

//    // Limpiar
//    window.URL.revokeObjectURL(url);
//    document.body.removeChild(a);
//}



<script>
    function downloadFile(base64Data, contentType, fileName) {
        const link = document.createElement('a');
    link.download = fileName;
    link.href = `data:${contentType};base64,${base64Data}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }
</script>