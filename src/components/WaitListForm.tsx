import React, { useState } from 'react';
//import { generateSafetyTip } from '../../services/geminiService';
import { SubmissionStatus } from '../types';

export interface WaitlistFormData {
    fullName: string;
    email: string;
    phone: string;
}


interface WaitlistFormProps {
    onSuccess?: () => void;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ onSuccess }) => {
    const [formData, setFormData] = useState<WaitlistFormData>({
        fullName: '',
        email: '',
        phone: ''
    });

    const [status, setStatus] = useState<SubmissionStatus>(SubmissionStatus.IDLE);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(SubmissionStatus.SUBMITTING);

        try {

            await new Promise(resolve => setTimeout(resolve, 1500));

            setStatus(SubmissionStatus.SUCCESS);
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error(error);
            setStatus(SubmissionStatus.ERROR);
        }
    };

    if (status === SubmissionStatus.SUCCESS) {
        return (
            <div className="text-center py-6 animate-[fadeIn_0.5s_ease-out]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Merci !</h3>
                <p className="text-gray-500 mb-6">
                    Vous êtes maintenant sur la liste d'attente. Nous vous contacterons bientôt.
                </p>
                =

                {/*
                <div className="bg-purple-50 p-4 rounded-xl border border-primary-250 text-left">
                    <p className="text-xs font-bold text-brand-primary uppercase tracking-wide mb-1">
                        Conseil du jour (IA)
                    </p>

                    <p className="text-brand-dark italic text-sm leading-relaxed">
                        "{safetyTip}"
                    </p>
  
                </div>
                    */}
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5" name='waitlist' data-netlify='true' netlify-honeypot='bot-field'>
            <input type='hidden' name='form-name' value='waitlist' />
            <p hidden><label>Don't fill:<input name='bot-field' /></label></p>
            <div className="text-sm text-base-650 mb-4">
                Soyez parmis les premiers a protèger vos proches avec Parapluie.
            </div>

            <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-base-650 mb-1">
                    Nom complet
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Walter Water"
                    className="block w-full rounded-lg border border-base-200 px-4 py-3 text-base-700 placeholder-base-400 focus:border-primary-150 focus:ring-primary-150 sm:text-sm outline-none transition-shadow focus:ring-1 focus:ring-opacity-50"
                    value={formData.fullName}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-base-700 mb-1">
                    Adresse courriel
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="walter@parapluie.app"
                    className="block w-full rounded-lg border border-base-300 px-4 py-3 text-base-700 placeholder-base-500 focus:border-primary-150 focus:ring-primary-150 sm:text-sm outline-none transition-shadow focus:ring-1 focus:ring-opacity-50"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-base-700 mb-1">
                    Numéro de téléphone
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="1-555-555-5555"
                    className="block w-full rounded-lg border border-base-300 px-4 py-3 text-base-700 placeholder-base-500 focus:border-primary-150 focus:ring-primary-150 sm:text-sm outline-none transition-shadow focus:ring-1 focus:ring-opacity-50"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
            </div>

            {status === SubmissionStatus.ERROR && (
                <div className="text-red-500 text-sm text-center">
                    Une erreur est survenue. Veuillez réessayer.
                </div>
            )}

            <button
                type="submit"
                disabled={status === SubmissionStatus.SUBMITTING}
                className="w-full rounded-lg bg-base-650 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-base-500 focus:outline-none focus:ring-1 focus:ring-primary-150 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all transform active:scale-[0.98]"
            >
                {status === SubmissionStatus.SUBMITTING ? (
                    <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envois en cours...
                    </span>
                ) : (
                    "Obtenir l'accès anticipé"
                )}
            </button>

            <p className="text-xs text-base-400 text-center mt-4">
                Vos données sont sécurisées et ne seront jamais partagées.
            </p>
        </form>
    );
};