
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FormData } from "./types";

interface PersonalDetailsStepProps {
  data: FormData;
  onDataChange: (data: Partial<FormData>) => void;
}

const PersonalDetailsStep: React.FC<PersonalDetailsStepProps> = ({
  data,
  onDataChange,
}) => {
  const updatePersonalDetails = (field: string, value: any) => {
    onDataChange({
      personalDetails: {
        ...data.personalDetails,
        [field]: value,
      },
    });
  };

  const updateParentDetails = (parent: 'father' | 'mother', field: string, value: any) => {
    const parentKey = parent === 'father' ? 'fatherDetails' : 'motherDetails';
    onDataChange({
      personalDetails: {
        ...data.personalDetails,
        [parentKey]: {
          ...data.personalDetails[parentKey],
          [field]: value,
        },
      },
    });
  };

  const updateAddress = (type: 'permanent' | 'local', field: string, value: string) => {
    const addressKey = type === 'permanent' ? 'permanentAddress' : 'localAddress';
    onDataChange({
      personalDetails: {
        ...data.personalDetails,
        [addressKey]: {
          ...data.personalDetails[addressKey],
          [field]: value,
        },
      },
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-college-primary mb-4">
        Personal Details
      </h3>

      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={data.personalDetails.firstName}
            onChange={(e) => updatePersonalDetails("firstName", e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={data.personalDetails.lastName}
            onChange={(e) => updatePersonalDetails("lastName", e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={data.personalDetails.email}
            onChange={(e) => updatePersonalDetails("email", e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="gender">Gender *</Label>
          <select
            id="gender"
            className="w-full h-10 px-3 rounded-md border border-input bg-background"
            value={data.personalDetails.gender}
            onChange={(e) => updatePersonalDetails("gender", e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={data.personalDetails.dateOfBirth}
            onChange={(e) => updatePersonalDetails("dateOfBirth", e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="mobile1">Mobile 1 *</Label>
          <Input
            id="mobile1"
            value={data.personalDetails.mobile1}
            onChange={(e) => updatePersonalDetails("mobile1", e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="mobile2">Mobile 2</Label>
          <Input
            id="mobile2"
            value={data.personalDetails.mobile2}
            onChange={(e) => updatePersonalDetails("mobile2", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="aadharNo">Aadhar No *</Label>
          <Input
            id="aadharNo"
            value={data.personalDetails.aadharNo}
            onChange={(e) => updatePersonalDetails("aadharNo", e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="nationality">Nationality *</Label>
          <Input
            id="nationality"
            value={data.personalDetails.nationality}
            onChange={(e) => updatePersonalDetails("nationality", e.target.value)}
            required
          />
        </div>
      </div>

      {/* Father's Details */}
      <div className="border-t pt-4">
        <h4 className="text-lg font-medium text-college-primary mb-3">Father's Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="fatherName">Father's Name *</Label>
            <Input
              id="fatherName"
              value={data.personalDetails.fatherDetails.name}
              onChange={(e) => updateParentDetails("father", "name", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="fatherMobile">Father's Mobile</Label>
            <Input
              id="fatherMobile"
              value={data.personalDetails.fatherDetails.mobile}
              onChange={(e) => updateParentDetails("father", "mobile", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="fatherQualification">Father's Qualification</Label>
            <Input
              id="fatherQualification"
              value={data.personalDetails.fatherDetails.qualification}
              onChange={(e) => updateParentDetails("father", "qualification", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="fatherOccupation">Father's Occupation</Label>
            <Input
              id="fatherOccupation"
              value={data.personalDetails.fatherDetails.occupation}
              onChange={(e) => updateParentDetails("father", "occupation", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="fatherIncome">Father's Income</Label>
            <Input
              id="fatherIncome"
              value={data.personalDetails.fatherDetails.income}
              onChange={(e) => updateParentDetails("father", "income", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Mother's Details */}
      <div className="border-t pt-4">
        <h4 className="text-lg font-medium text-college-primary mb-3">Mother's Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="motherName">Mother's Name *</Label>
            <Input
              id="motherName"
              value={data.personalDetails.motherDetails.name}
              onChange={(e) => updateParentDetails("mother", "name", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="motherMobile">Mother's Mobile</Label>
            <Input
              id="motherMobile"
              value={data.personalDetails.motherDetails.mobile}
              onChange={(e) => updateParentDetails("mother", "mobile", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="motherQualification">Mother's Qualification</Label>
            <Input
              id="motherQualification"
              value={data.personalDetails.motherDetails.qualification}
              onChange={(e) => updateParentDetails("mother", "qualification", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="motherOccupation">Mother's Occupation</Label>
            <Input
              id="motherOccupation"
              value={data.personalDetails.motherDetails.occupation}
              onChange={(e) => updateParentDetails("mother", "occupation", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="motherIncome">Mother's Income</Label>
            <Input
              id="motherIncome"
              value={data.personalDetails.motherDetails.income}
              onChange={(e) => updateParentDetails("mother", "income", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Address Details */}
      <div className="border-t pt-4">
        <h4 className="text-lg font-medium text-college-primary mb-3">Address Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium mb-2">Permanent Address</h5>
            <div className="space-y-3">
              <div>
                <Label htmlFor="permanentAddress">Address *</Label>
                <Input
                  id="permanentAddress"
                  value={data.personalDetails.permanentAddress.address}
                  onChange={(e) => updateAddress("permanent", "address", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="permanentPincode">Pincode *</Label>
                <Input
                  id="permanentPincode"
                  value={data.personalDetails.permanentAddress.pincode}
                  onChange={(e) => updateAddress("permanent", "pincode", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-medium mb-2">Local Address</h5>
            <div className="space-y-3">
              <div>
                <Label htmlFor="localAddress">Address</Label>
                <Input
                  id="localAddress"
                  value={data.personalDetails.localAddress.address}
                  onChange={(e) => updateAddress("local", "address", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="localPincode">Pincode</Label>
                <Input
                  id="localPincode"
                  value={data.personalDetails.localAddress.pincode}
                  onChange={(e) => updateAddress("local", "pincode", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Options */}
      <div className="border-t pt-4">
        <h4 className="text-lg font-medium text-college-primary mb-3">Additional Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="hostelRequired"
              checked={data.personalDetails.hostelRequired}
              onCheckedChange={(checked) => updatePersonalDetails("hostelRequired", checked)}
            />
            <Label htmlFor="hostelRequired">Hostel Required</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="busRequired"
              checked={data.personalDetails.busRequired}
              onCheckedChange={(checked) => updatePersonalDetails("busRequired", checked)}
            />
            <Label htmlFor="busRequired">Bus Required</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="disabilityStatus"
              checked={data.personalDetails.disabilityStatus}
              onCheckedChange={(checked) => updatePersonalDetails("disabilityStatus", checked)}
            />
            <Label htmlFor="disabilityStatus">Disability Status</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="collegeTransfer"
              checked={data.personalDetails.collegeTransfer}
              onCheckedChange={(checked) => updatePersonalDetails("collegeTransfer", checked)}
            />
            <Label htmlFor="collegeTransfer">College Transfer</Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsStep;
