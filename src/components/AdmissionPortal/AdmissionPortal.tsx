
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Save } from "lucide-react";
import PersonalDetailsStep from "./PersonalDetailsStep";
import AcademicDetailsStep from "./AcademicDetailsStep";
import DeclarationStep from "./DeclarationStep";
import UploadPaymentStep from "./UploadPaymentStep";
import { FormData } from "./types";
import { useFormPersistence } from "@/hooks/useFormPersistence";
import { useAuth } from "@/components/AuthContext";
import { useNavigate } from "react-router-dom";

interface AdmissionPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEPS = [
  { title: "Personal Details", component: PersonalDetailsStep },
  { title: "Academic Details", component: AcademicDetailsStep },
  { title: "Declaration", component: DeclarationStep },
  { title: "Upload & Payment", component: UploadPaymentStep },
];

const initialFormData: FormData = {
  personalDetails: {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    mobile1: "",
    mobile2: "",
    aadharNo: "",
    maritalStatus: "",
    minorityStatus: "",
    jkImmigrant: false,
    nationality: "",
    category: "",
    caste: "",
    bloodGroup: "",
    domicile: "",
    localGuardian: "",
    chronicAilment: "",
    academicProbation: false,
    isSponsored: false,
    fatherDetails: {
      name: "",
      mobile: "",
      qualification: "",
      occupation: "",
      income: "",
      taxPayee: false,
    },
    motherDetails: {
      name: "",
      mobile: "",
      qualification: "",
      occupation: "",
      income: "",
      taxPayee: false,
    },
    permanentAddress: {
      address: "",
      pincode: "",
    },
    localAddress: {
      address: "",
      pincode: "",
    },
    hostelRequired: false,
    busRequired: false,
    disabilityStatus: false,
    collegeTransfer: false,
  },
  academicDetails: {
    twelfthDetails: {
      board: "",
      year: "",
      marksObtained: "",
      marksOutOf: "",
      cgpa: "",
      subjectMarks: "",
      medium: "",
      rollNo: "",
      schoolCode: "",
      admitCardId: "",
    },
    graduationDetails: {
      degree: "",
      year: "",
      university: "",
      rollNo: "",
      cgpa: "",
      resultAwaited: false,
    },
    postGraduationDetails: {
      degree: "",
      year: "",
      university: "",
      rollNo: "",
      cgpa: "",
      resultAwaited: false,
    },
    entranceExam: false,
    coursePreferences: [],
  },
  declaration: {
    studentSignature: "",
    parentSignature: "",
    declarationAccepted: false,
  },
  uploads: {
    passportPhoto: null,
    aadharCard: null,
    twelfthMarksheet: null,
    graduationMarksheet: null,
    studentSignature: null,
    parentSignature: null,
  },
};

const AdmissionPortal: React.FC<AdmissionPortalProps> = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const { formData, setFormData, saveFormData, submitApplication, loading } = useFormPersistence(initialFormData);

  React.useEffect(() => {
    if (isOpen && !user) {
      navigate("/auth");
      onClose();
    }
  }, [isOpen, user, navigate, onClose]);

  const progress = ((currentStep + 1) / STEPS.length) * 100;

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepData = (stepData: any) => {
    const updatedFormData = {
      ...formData,
      ...stepData,
    };
    setFormData(updatedFormData);
  };

  const handleSaveProgress = () => {
    saveFormData(formData);
  };

  const handleSubmitApplication = async () => {
    const success = await submitApplication(formData);
    if (success) {
      onClose();
    }
  };

  const CurrentStepComponent = STEPS[currentStep].component;

  if (!user) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-college-primary">
            Admission Portal
          </DialogTitle>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            {STEPS.map((step, index) => (
              <span
                key={index}
                className={`text-sm font-medium ${
                  index <= currentStep ? "text-college-primary" : "text-gray-400"
                }`}
              >
                {step.title}
              </span>
            ))}
          </div>
          <Progress value={progress} className="h-2" />
          <div className="text-center mt-2 text-sm text-gray-600">
            Step {currentStep + 1} of {STEPS.length}
          </div>
        </div>

        {/* Current Step Content */}
        <div className="mb-6">
          <CurrentStepComponent
            data={formData}
            onDataChange={handleStepData}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between border-t pt-4">
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <Button
              variant="outline"
              onClick={handleSaveProgress}
              disabled={loading}
              className="flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              {loading ? "Saving..." : "Save Progress"}
            </Button>
          </div>

          {currentStep < STEPS.length - 1 ? (
            <Button
              onClick={handleNext}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              className="bg-green-600 hover:bg-green-700"
              onClick={handleSubmitApplication}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdmissionPortal;
