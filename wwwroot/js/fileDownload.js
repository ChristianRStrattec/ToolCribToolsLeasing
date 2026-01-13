// Función para descargar archivos Excel desde base64
function downloadFile(fileName, base64Data) {
    try {
        // Convertir base64 a blob
        const byteCharacters = atob(base64Data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        // Crear enlace de descarga
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);

        // Simular click y limpiar
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        console.log('Archivo descargado exitosamente:', fileName);
        return true;
    } catch (error) {
        console.error('Error al descargar archivo:', error);
        return false;
    }
}
