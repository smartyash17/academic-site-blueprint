
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { FormData, CoursePreference } from "./types";

interface AcademicDetailsStepProps {
  data: FormData;
  onDataChange: (data: Partial<FormData>) => void;
}

const AcademicDetailsStep: React.FC<AcademicDetailsStepProps> = ({
  data,
  onDataChange,
}) => {
  const updateTwelfthDetails = (field: string, value: any) => {
    onDataChange({
      academicDetails: {
        ...data.academicDetails,
        twelfthDetails: {
          ...data.academicDetails.twelfthDetails,
          [field]: value,
        },
      },
    });
  };

  const updateGraduationDetails = (field: string, value: any) => {
    onDataChange({
      academicDetails: {
        ...data.academicDetails,
        graduationDetails: {
          ...data.academicDetails.graduationDetails,
          [field]: value,
        },
      },
    });
  };

  const updatePostGraduationDetails = (field: string, value: any) => {
    onDataChange({
      academicDetails: {
        ...data.academicDetails,
        postGraduationDetails: {
          ...data.academicDetails.postGraduationDetails,
          [field]: value,
        },
      },
    });
  };

  const addCoursePreference = () => {
    const newPreference: CoursePreference = {
      program: "",
      branch: "",
      priority: data.academicDetails.coursePreferences.length + 1,
    };
    onDataChange({
      academicDetails: {
        ...data.academicDetails,
        coursePreferences: [...data.academicDetails.coursePreferences, newPreference],
      },
    });
  };

  const removeCoursePreference = (index: number) => {
    const updatedPreferences = data.academicDetails.coursePreferences.filter((_, i) => i !== index);
    onDataChange({
      academicDetails: {
        ...data.academicDetails,
        coursePreferences: updatedPreferences,
      },
    });
  };

  const updateCoursePreference = (index: number, field: string, value: string) => {
    const updatedPreferences = data.academicDetails.coursePreferences.map((pref, i) => 
      i === index ? { ...pref, [field]: value } : pref
    );
    onDataChange({
      academicDetails: {
        ...data.academicDetails,
        coursePreferences: updatedPreferences,
      },
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-college-primary mb-4">
        Academic Details & Course Preference
      </h3>

      {/* 12th Details */}
      <div className="border rounded-lg p-4">
        <h4 className="text-lg font-medium text-college-primary mb-3">12th Standard Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="board">Board *</Label>
            <Input
              id="board"
              value={data.academicDetails.twelfthDetails.board}
              onChange={(e) => updateTwelfthDetails("board", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="year">Year *</Label>
            <Input
              id="year"
              value={data.academicDetails.twelfthDetails.year}
              onChange={(e) => updateTwelfthDetails("year", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="marksObtained">Marks Obtained *</Label>
            <Input
              id="marksObtained"
              value={data.academicDetails.twelfthDetails.marksObtained}
              onChange={(e) => updateTwelfthDetails("marksObtained", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="marksOutOf">Marks Out Of *</Label>
            <Input
              id="marksOutOf"
              value={data.academicDetails.twelfthDetails.marksOutOf}
              onChange={(e) => updateTwelfthDetails("marksOutOf", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="cgpa">CGPA</Label>
            <Input
              id="cgpa"
              value={data.academicDetails.twelfthDetails.cgpa}
              onChange={(e) => updateTwelfthDetails("cgpa", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="medium">Medium *</Label>
            <select
              id="medium"
              className="w-full h-10 px-3 rounded-md border border-input bg-background"
              value={data.academicDetails.twelfthDetails.medium}
              onChange={(e) => updateTwelfthDetails("medium", e.target.value)}
              required
            >
              <option value="">Select Medium</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="regional">Regional Language</option>
            </select>
          </div>
          <div>
            <Label htmlFor="rollNo">Roll No *</Label>
            <Input
              id="rollNo"
              value={data.academicDetails.twelfthDetails.rollNo}
              onChange={(e) => updateTwelfthDetails("rollNo", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="schoolCode">School Code</Label>
            <Input
              id="schoolCode"
              value={data.academicDetails.twelfthDetails.schoolCode}
              onChange={(e) => updateTwelfthDetails("schoolCode", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="admitCardId">Admit Card ID</Label>
            <Input
              id="admitCardId"
              value={data.academicDetails.twelfthDetails.admitCardId}
              onChange={(e) => updateTwelfthDetails("admitCardId", e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="subjectMarks">Subject-wise Marks</Label>
          <textarea
            id="subjectMarks"
            className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
            value={data.academicDetails.twelfthDetails.subjectMarks}
            onChange={(e) => updateTwelfthDetails("subjectMarks", e.target.value)}
            placeholder="Enter subject-wise marks (e.g., Math: 95, Physics: 90, Chemistry: 88)"
          />
        </div>
      </div>

      {/* Graduation Details */}
      <div className="border rounded-lg p-4">
        <h4 className="text-lg font-medium text-college-primary mb-3">Graduation Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="graduationDegree">Degree</Label>
            <Input
              id="graduationDegree"
              value={data.academicDetails.graduationDetails.degree}
              onChange={(e) => updateGraduationDetails("degree", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="graduationYear">Year</Label>
            <Input
              id="graduationYear"
              value={data.academicDetails.graduationDetails.year}
              onChange={(e) => updateGraduationDetails("year", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="graduationUniversity">University</Label>
            <Input
              id="graduationUniversity"
              value={data.academicDetails.graduationDetails.university}
              onChange={(e) => updateGraduationDetails("university", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="graduationRollNo">Roll No</Label>
            <Input
              id="graduationRollNo"
              value={data.academicDetails.graduationDetails.rollNo}
              onChange={(e) => updateGraduationDetails("rollNo", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="graduationCgpa">CGPA</Label>
            <Input
              id="graduationCgpa"
              value={data.academicDetails.graduationDetails.cgpa}
              onChange={(e) => updateGraduationDetails("cgpa", e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2 mt-6">
            <Checkbox
              id="graduationResultAwaited"
              checked={data.academicDetails.graduationDetails.resultAwaited}
              onCheckedChange={(checked) => updateGraduationDetails("resultAwaited", checked)}
            />
            <Label htmlFor="graduationResultAwaited">Result Awaited</Label>
          </div>
        </div>
      </div>

      {/* Post-Graduation Details */}
      <div className="border rounded-lg p-4">
        <h4 className="text-lg font-medium text-college-primary mb-3">Post-Graduation Details (if applicable)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="postGraduationDegree">Degree</Label>
            <Input
              id="postGraduationDegree"
              value={data.academicDetails.postGraduationDetails.degree}
              onChange={(e) => updatePostGraduationDetails("degree", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="postGraduationYear">Year</Label>
            <Input
              id="postGraduationYear"
              value={data.academicDetails.postGraduationDetails.year}
              onChange={(e) => updatePostGraduationDetails("year", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="postGraduationUniversity">University</Label>
            <Input
              id="postGraduationUniversity"
              value={data.academicDetails.postGraduationDetails.university}
              onChange={(e) => updatePostGraduationDetails("university", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="postGraduationRollNo">Roll No</Label>
            <Input
              id="postGraduationRollNo"
              value={data.academicDetails.postGraduationDetails.rollNo}
              onChange={(e) => updatePostGraduationDetails("rollNo", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="postGraduationCgpa">CGPA</Label>
            <Input
              id="postGraduationCgpa"
              value={data.academicDetails.postGraduationDetails.cgpa}
              onChange={(e) => updatePostGraduationDetails("cgpa", e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2 mt-6">
            <Checkbox
              id="postGraduationResultAwaited"
              checked={data.academicDetails.postGraduationDetails.resultAwaited}
              onCheckedChange={(checked) => updatePostGraduationDetails("resultAwaited", checked)}
            />
            <Label htmlFor="postGraduationResultAwaited">Result Awaited</Label>
          </div>
        </div>
      </div>

      {/* Entrance Exam */}
      <div className="border rounded-lg p-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="entranceExam"
            checked={data.academicDetails.entranceExam}
            onCheckedChange={(checked) => onDataChange({
              academicDetails: {
                ...data.academicDetails,
                entranceExam: checked as boolean,
              },
            })}
          />
          <Label htmlFor="entranceExam" className="text-lg font-medium">
            Entrance Exam Taken
          </Label>
        </div>
      </div>

      {/* Course Preferences */}
      <div className="border rounded-lg p-4">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-lg font-medium text-college-primary">Course Preferences</h4>
          <Button onClick={addCoursePreference} size="sm" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Preference
          </Button>
        </div>
        
        {data.academicDetails.coursePreferences.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No course preferences added yet.</p>
        ) : (
          <div className="space-y-3">
            {data.academicDetails.coursePreferences.map((preference, index) => (
              <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <Label htmlFor={`priority-${index}`}>Priority {index + 1}</Label>
                    <select
                      id={`priority-${index}`}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background"
                      value={preference.program}
                      onChange={(e) => updateCoursePreference(index, "program", e.target.value)}
                    >
                      <option value="">Select Program</option>
                      <option value="bpharm">B.Pharm</option>
                      <option value="dpharm">D.Pharm</option>
                      <option value="bsc-nursing">B.Sc Nursing</option>
                      <option value="gnm">GNM</option>
                      <option value="paramedical">Paramedical</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor={`branch-${index}`}>Branch/Course</Label>
                    <Input
                      id={`branch-${index}`}
                      value={preference.branch}
                      onChange={(e) => updateCoursePreference(index, "branch", e.target.value)}
                      placeholder="Enter specific branch/course"
                    />
                  </div>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeCoursePreference(index)}
                  className="flex items-center gap-1"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicDetailsStep;
