import React, { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { WaitlistEntry, WaitlistFormProps, FormErrors, GoogleAppsScriptResponse } from '@/types';


const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbwLExMzR_iqFjh7D4F1ENsboYY2AIg00Pc0bZZoQ_vMuzgAUX4rw1aNSIh5XiIqlHw/exec';

export default function WaitlistForm({ onSubmit, onError, onSuccess }: WaitlistFormProps): React.JSX.Element {
    const [formData, setFormData] = useState<WaitlistEntry>({
        firstName: '',
        lastName: '',
        email: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const submitToGoogleSheets = async (data: WaitlistEntry): Promise<GoogleAppsScriptResponse> => {
        try {
            const response = await fetch(googleScriptUrl, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP error!: ${response.status}`);
                console.log(response.status);
            }

            const result: GoogleAppsScriptResponse = await response.json();
            return result;
        } catch (error) {
            console.log('Something went wrong', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error occurred'
            };
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setErrors({});
        (async () => {
            try {
                onSubmit?.(formData);

                const result = await submitToGoogleSheets(formData);

                if (result.success) {
                    setIsSubmitted(true);
                    setFormData({ firstName: '', lastName: '', email: '' });
                    onSuccess?.();
                } else {
                    setErrors({ general: result.error || 'Something went wrong. Please try again.' });
                    onError?.(result.error || 'Submission failed');
                }
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Unexpected error occurred.';
                setErrors({ general: errorMessage });
                onError?.(errorMessage);
            } finally {
                setIsSubmitting(false);
            }
        })();
    };

    const handleInputChange = (field: keyof WaitlistEntry) => (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }));

        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: undefined
            }));
        }
    };

    if (isSubmitted) {
        return (
            <div className='waitlist-success'>
                <h3> WOOHOO! </h3>
                <p> Thank you so much for joining the waitlist. </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center z-500">
            <div className="w-4/5 h-auto flex flex-col bg-white rounded-xl border border-neutral-200 py-12 px-8 shadow-xl">

            <h3 className="text-lg w-full mx-auto font-bold text-primary-500 py-4"> JOIN PARAPLUIE WAITLIST </h3>

                <div className="w-full h-auto p-2 flex flex-col gap-2 py-4 px-12 text-start">
                    <label htmlFor="firstName"> First Name * </label>
                    <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange("firstName")}
                        className={errors.firstName ? 
                            'bg-red-100 mt-4 placeholder:text-red-400 rounded-md py-2 px-4 border border-red-400 mt-4' : 
                            'bg-neutral-200 placeholder:text-neutral-400 rounded-md py-2 px-4 border border-transparent mt-4 focus:bg-neutral-200'}
                        placeholder="Enter your first name"
                        disabled={isSubmitting}
                    />
                    {errors.firstName && <span className="text-red-400 mt-2"> {errors.firstName}</span>}
                </div>
                <div className="w-full h-auto p-2 flex flex-col gap-2 py-4 px-12 text-start">
                    <label htmlFor="lastName"> Last Name * </label>
                    <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange("lastName")}
                        className={errors.lastName ?           
                            'bg-red-100 mt-4 placeholder:text-red-400 rounded-md py-2 px-4 border border-red-400 mt-4' : 
                            'bg-neutral-100 placeholder:text-neutral-400 rounded-md py-2 px-4 border border-transparent mt-4 focus:bg-neutral-200'}
                        placeholder="Enter your last name"
                        disabled={isSubmitting}
                    />
                    {errors.lastName && <span className="text-red-400 mt-2"> {errors.lastName} </span>}
                </div>
                <div className="w-full h-auto p-2 flex flex-col gap-2 py-4 px-12 text-start">
                    <label htmlFor="email"> Email * </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange("email")}
                        className={errors.email ? 
                            'bg-red-100 mt-4 placeholder:text-red-400 rounded-md py-2 px-4 border border-red-400 mt-4' : 
                            'bg-neutral-200 placeholder:text-neutral-400 rounded-md py-2 px-4 border border-transparent mt-4 bg-neutral-200'}
                        placeholder="Enter your email"
                        disabled={isSubmitting}
                    />
                    {errors.email && <span className="text-red-400 mt-2"> {errors.email} </span>}
                </div>
                {errors.general && (
                    <div className="w-ful my-6 l h-auto py-4 border border-red-400 px-12 bg-red-100 text-red-400 rounded-md">
                        {errors.general}
                    </div>
                )}
                <div className="w-full px-12 py-4 flex items-center justify-center">
                 <Button className="text-white w-full h-12" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'JOINING...' : 'JOIN'}
                </Button>
                </div>
            </div>
        </form>
    );
}