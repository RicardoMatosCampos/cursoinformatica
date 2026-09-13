// URL base cravada. Não adicione /login aqui.
const S3_BUCKET_URL = "https://s3.amazonaws.com/projetosrmc.com.br";

const ApiService = {
    delay: (ms) => new Promise(resolve => setTimeout(resolve, ms)),

    getCourseData: async (level) => {
        try {
            const fileName = level === 'advanced' ? 'advancedCourseData.json' : 'basicCourseData.json';
            const response = await fetch(`${S3_BUCKET_URL}/${fileName}`, {
                method: 'GET',
                // Previne uso de cache local para sempre pegar a versão mais recente
                cache: 'no-store' 
            });
            if (response.ok) {
                return await response.json();
            } else {
                console.warn(`Arquivo não encontrado no S3 (${response.status}). Usando fallback local.`);
                return null;
            }
        } catch (error) {
            console.error("Erro ao buscar dados do S3:", error);
            return null; // Fallback para data.js
        }
    }
};

window.ApiService = ApiService;