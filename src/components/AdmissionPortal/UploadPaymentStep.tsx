
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload, FileText, CreditCard } from "lucide-react";
import { FormData } from "./types";

interface UploadPaymentStepProps {
  data: FormData;
  onDataChange: (data: Partial<FormData>) => void;
}

const UploadPaymentStep: React.FC<UploadPaymentStepProps> = ({
  data,
  onDataChange,
}) => {
  const updateUpload = (field: string, file: File | null) => {
    onDataChange({
      uploads: {
        ...data.uploads,
        [field]: file,
      },
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0] || null;
    updateUpload(field, file);
  };

  const handlePayment = () => {
    // Here you would integrate with Razorpay or Stripe
    console.log("Processing payment...");
    alert("Payment functionality would be integrated here with Razorpay/Stripe");
  };

  const sendConfirmationEmail = () => {
    // Here you would trigger email sending
    console.log("Sending confirmation email...");
    alert("Confirmation email would be sent here");
  };

  const uploadFields = [
    { key: "passportPhoto", label: "Passport Photo", required: true },
    { key: "aadharCard", label: "Aadhar Card", required: true },
    { key: "twelfthMarksheet", label: "12th Marksheet", required: true },
    { key: "graduationMarksheet", label: "Graduation Marksheet", required: false },
    { key: "studentSignature", label: "Student Signature", required: true },
    { key: "parentSignature", label: "Parent Signature", required: true },
  ];

  const requiredUploads = uploadFields.filter(field => field.required);
  const completedRequiredUploads = requiredUploads.filter(field => 
    data.uploads[field.key as keyof typeof data.uploads] !== null
  );

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-college-primary mb-4">
        Document Upload & Payment
      </h3>

      {/* Upload Section */}
      <div className="border rounded-lg p-4">
        <h4 className="text-lg font-medium text-college-primary mb-4">Required Documents</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {uploadFields.map((field) => (
            <div key={field.key} className="space-y-2">
              <Label htmlFor={field.key} className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </Label>
              <div className="relative">
                <Input
                  id={field.key}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, field.key)}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-college-primary file:text-white hover:file:bg-college-dark"
                />
                {data.uploads[field.key as keyof typeof data.uploads] && (
                  <div className="mt-1 text-sm text-green-600 flex items-center gap-1">
                    <Upload className="h-3 w-3" />
                    File uploaded successfully
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Upload Progress */}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Upload Progress</span>
            <span className="text-sm text-gray-600">
              {completedRequiredUploads.length} of {requiredUploads.length} required documents uploaded
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-college-primary h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${(completedRequiredUploads.length / requiredUploads.length) * 100}%` 
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="border rounded-lg p-4">
        <h4 className="text-lg font-medium text-college-primary mb-4 flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Payment Details
        </h4>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Application Fee:</span>
              <span className="font-medium">₹800</span>
            </div>
            <div className="flex justify-between">
              <span>Processing Fee:</span>
              <span className="font-medium">₹100</span>
            </div>
            <div className="flex justify-between">
              <span>Service Tax:</span>
              <span className="font-medium">₹100</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-lg font-bold text-college-primary">
              <span>Total Amount:</span>
              <span>₹1000</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={handlePayment}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
            disabled={completedRequiredUploads.length !== requiredUploads.length}
          >
            <CreditCard className="h-4 w-4" />
            Proceed to Payment (₹1000)
          </Button>
          
          <p className="text-xs text-gray-600 text-center">
            Secure payment powered by Razorpay/Stripe. Your payment information is encrypted and secure.
          </p>
        </div>
      </div>

      {/* Status Summary */}
      <div className="border rounded-lg p-4 bg-blue-50">
        <h4 className="text-lg font-medium text-college-primary mb-3">Application Status</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Personal Details:</span>
            <span className="text-green-600 font-medium">✓ Completed</span>
          </div>
          <div className="flex justify-between">
            <span>Academic Details:</span>
            <span className="text-green-600 font-medium">✓ Completed</span>
          </div>
          <div className="flex justify-between">
            <span>Declaration:</span>
            <span className="text-green-600 font-medium">✓ Completed</span>
          </div>
          <div className="flex justify-between">
            <span>Document Upload:</span>
            <span className={completedRequiredUploads.length === requiredUploads.length ? "text-green-600" : "text-yellow-600"}>
              {completedRequiredUploads.length === requiredUploads.length ? "✓ Completed" : "⚠ In Progress"}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Payment:</span>
            <span className="text-yellow-600 font-medium">⏳ Pending</span>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="border rounded-lg p-4 bg-yellow-50 border-yellow-200">
        <h5 className="font-medium text-yellow-800 mb-2">Important Notes:</h5>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• All documents must be uploaded before proceeding to payment</li>
          <li>• Accepted file formats: PDF, JPG, JPEG, PNG (Max size: 5MB per file)</li>
          <li>• Payment is non-refundable once processed</li>
          <li>• You will receive a confirmation email after successful submission</li>
          <li>• Keep your application reference number for future correspondence</li>
        </ul>
      </div>
    </div>
  );
};

export default UploadPaymentStep;
