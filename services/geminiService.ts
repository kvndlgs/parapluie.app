import { GoogleGenAI } from "@google/genai";

// Initialize the client strictly according to guidelines
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

/**
 * Generates a short, encouraging safety tip for seniors regarding fraud prevention.
 * This adds a nice "AI touch" to the success message.
 */
export const generateSafetyTip = async (): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: "Générez un conseil de sécurité court (une phrase) et encourageant pour une personne âgée afin d'éviter les fraudes téléphoniques ou par internet. Le ton doit être bienveillant et rassurant, en Français.",
        });

        return response.text || "Restez vigilant et ne partagez jamais vos informations personnelles par téléphone.";
    } catch (error) {
        console.error("Failed to generate safety tip:", error);
        // Fallback message if API fails or key is missing
        return "Ensemble, nous sommes plus forts contre la fraude.";
    }
};