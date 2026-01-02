import React from "react";

export interface WaitlistFormData {
  fullName: string;
  email: string;
  phone: string;
}

export enum SubmissionStatus {
  IDLE = "IDLE",
  SUBMITTING = "SUBMITTING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const SITE_URL = "https://parapluie.app/";
