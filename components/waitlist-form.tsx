'use client'

import React, { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { WaitlistEntry, WaitlistFormProps, FormErrors, SubmissionResponse } from '@/types';
import { X, Confetti, Envelope, ArrowRight, Umbrella, Heart  } from '@mynaui/icons-react';


export default function WaitlistForm({closeForm, onSubmit, onError, onSuccess, isFullFormVisible, setIsFullFormVisible }: WaitlistFormProps): React.JSX.Element {
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

    const submitToAPI = async (data: WaitlistEntry): Promise<SubmissionResponse> => {
        try {
            const response = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result: SubmissionResponse = await response.json();
            
            if (!response.ok) {
                throw new Error(result.error || `HTTP error: ${response.status}`);
            }

            return result;
        } catch (error) {
            console.error('API submission error:', error);
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

                const result = await submitToAPI(formData);

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
                <h3> All Set! <Confetti /> </h3>
                <p> Thank you so much for joining the waitlist. </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center z-50 backdrop-blur-md">
            
              <Button className='absolute left-140 top-20' onClick={() => closeForm()}> <X /> </Button>
              <div className="relative w-4/5 lg:w-1/3 h-auto flex flex-col rounded-xl bg-white/90 border border-neutral-200 py-8 lg:py-10 lg:px-20 px-8 shadow-xl backdrop-blur-md">

            <h3 className="text-xl w-full text-center font-bold text-primary-500 pt-12 pb-8"> JOIN PARAPLUIE WAITLIST </h3>

                <div className="w-full h-auto flex flex-col gap-2 py-4 text-start">
                    <label htmlFor="firstName" className='flex items-center justify-start gap-2 font-bold'> <Umbrella /> First Name </label>
                    <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange("firstName")}
                        className={errors.firstName ? 
                            'bg-red-100 mt-4 placeholder:text-red-400 rounded-md py-3 px-4 border border-red-400 mt-4' : 
                            'bg-neutral-200 placeholder:text-neutral rounded-md py-3 px-4 border border-transparent mt-4 focus:bg-neutral-200'}
                        placeholder="Enter your first name"
                        disabled={isSubmitting}
                    />
                    {errors.firstName && <span className="text-red-400 mt-2"> {errors.firstName}</span>}
                </div>
                <div className="w-full h-auto flex flex-col gap-2 py-4 text-start">
                    <label htmlFor="lastName" className='flex items-center justify-start gap-2 font-bold'> <Heart /> Last Name </label>
                    <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange("lastName")}
                        className={errors.lastName ?           
                            'bg-red-100 mt-4 placeholder:text-red-400 rounded-md py-3 px-4 border border-red-400 mt-4' : 
                            'bg-neutral-200 placeholder:text-neutral-400 rounded-md py-3 px-4 border border-transparent mt-4 focus:bg-neutral-200'}
                        placeholder="Enter your last name"
                        disabled={isSubmitting}
                    />
                    {errors.lastName && <span className="text-red-400 mt-2"> {errors.lastName} </span>}
                </div>
                <div className="w-full h-auto flex flex-col gap-2 py-4 text-start">
                    <label htmlFor="email" className='flex items-center justify-start gap-2 font-bold'> <Envelope /> Email </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange("email")}
                        className={errors.email ? 
                            'bg-red-100 mt-4 placeholder:text-red-400 rounded-md py-3 px-4 border border-red-400 mt-4' : 
                            'bg-neutral-200 placeholder:text-neutral-400 rounded-md py-3 px-4 border border-transparent mt-4 bg-neutral-200'}
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
                <div className="w-full pt-8 pb-14 flex items-center justify-center">
                 <Button className="flex items-center justify-center gap-6 text-primary font-bold text-md  w-full py-7 bg-white border-2 border-primary border-b-6 
                        hover:bg-primary-100 hover:border-b-4 hover:border-2 hover:border-primary-100 pointer;cursor" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'JOINING...' : 'JOIN'}  <ArrowRight size={20}/>
                </Button>
                </div>
            </div>
        </form>
    );
}