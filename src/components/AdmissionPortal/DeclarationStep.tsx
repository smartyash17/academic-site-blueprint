
import React, { useRef, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FormData } from "./types";

interface DeclarationStepProps {
  data: FormData;
  onDataChange: (data: Partial<FormData>) => void;
}

const DeclarationStep: React.FC<DeclarationStepProps> = ({
  data,
  onDataChange,
}) => {
  const studentCanvasRef = useRef<HTMLCanvasElement>(null);
  const parentCanvasRef = useRef<HTMLCanvasElement>(null);
  const studentIsDrawing = useRef(false);
  const parentIsDrawing = useRef(false);

  const updateDeclaration = (field: string, value: any) => {
    onDataChange({
      declaration: {
        ...data.declaration,
        [field]: value,
      },
    });
  };

  const setupCanvas = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>, isStudent: boolean) => {
    const canvas = e.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      if (isStudent) {
        studentIsDrawing.current = true;
      } else {
        parentIsDrawing.current = true;
      }
      
      ctx.beginPath();
      ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>, isStudent: boolean) => {
    const isDrawing = isStudent ? studentIsDrawing.current : parentIsDrawing.current;
    if (!isDrawing) return;

    const canvas = e.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      ctx.stroke();
    }
  };

  const stopDrawing = (isStudent: boolean) => {
    if (isStudent) {
      studentIsDrawing.current = false;
    } else {
      parentIsDrawing.current = false;
    }
  };

  const clearSignature = (isStudent: boolean) => {
    const canvas = isStudent ? studentCanvasRef.current : parentCanvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        updateDeclaration(isStudent ? 'studentSignature' : 'parentSignature', '');
      }
    }
  };

  const saveSignature = (isStudent: boolean) => {
    const canvas = isStudent ? studentCanvasRef.current : parentCanvasRef.current;
    if (canvas) {
      const dataURL = canvas.toDataURL();
      updateDeclaration(isStudent ? 'studentSignature' : 'parentSignature', dataURL);
    }
  };

  useEffect(() => {
    if (studentCanvasRef.current) {
      setupCanvas(studentCanvasRef.current);
    }
    if (parentCanvasRef.current) {
      setupCanvas(parentCanvasRef.current);
    }
  }, []);

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-college-primary mb-4">
        Declaration & Signatures
      </h3>

      {/* Student Signature */}
      <div className="border rounded-lg p-4">
        <h4 className="text-lg font-medium text-college-primary mb-3">Student Signature</h4>
        <div className="space-y-3">
          <Label>Please sign in the box below:</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-2">
            <canvas
              ref={studentCanvasRef}
              width={400}
              height={150}
              className="w-full h-32 border rounded cursor-crosshair bg-white"
              onMouseDown={(e) => startDrawing(e, true)}
              onMouseMove={(e) => draw(e, true)}
              onMouseUp={() => stopDrawing(true)}
              onMouseLeave={() => stopDrawing(true)}
            />
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => clearSignature(true)}
            >
              Clear
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={() => saveSignature(true)}
            >
              Save Signature
            </Button>
          </div>
        </div>
      </div>

      {/* Parent Signature */}
      <div className="border rounded-lg p-4">
        <h4 className="text-lg font-medium text-college-primary mb-3">Parent/Guardian Signature</h4>
        <div className="space-y-3">
          <Label>Please sign in the box below:</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-2">
            <canvas
              ref={parentCanvasRef}
              width={400}
              height={150}
              className="w-full h-32 border rounded cursor-crosshair bg-white"
              onMouseDown={(e) => startDrawing(e, false)}
              onMouseMove={(e) => draw(e, false)}
              onMouseUp={() => stopDrawing(false)}
              onMouseLeave={() => stopDrawing(false)}
            />
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => clearSignature(false)}
            >
              Clear
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={() => saveSignature(false)}
            >
              Save Signature
            </Button>
          </div>
        </div>
      </div>

      {/* Declaration Text */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <h4 className="text-lg font-medium text-college-primary mb-3">Declaration</h4>
        <div className="space-y-4">
          <div className="text-sm text-gray-700 leading-relaxed">
            <p className="mb-3">
              I hereby declare that the information provided in this application form is true, complete, 
              and accurate to the best of my knowledge. I understand that any false information or 
              documents submitted may result in the rejection of my application or cancellation of admission.
            </p>
            <p className="mb-3">
              I agree to abide by the rules and regulations of the institution and understand that 
              the institution reserves the right to verify the information provided and take appropriate 
              action if any discrepancy is found.
            </p>
            <p>
              I confirm that I have read and understood all the terms and conditions mentioned in the 
              admission prospectus and agree to comply with them.
            </p>
          </div>
          
          <div className="flex items-start space-x-3 pt-4 border-t">
            <Checkbox
              id="declarationAccepted"
              checked={data.declaration.declarationAccepted}
              onCheckedChange={(checked) => updateDeclaration("declarationAccepted", checked)}
              className="mt-1"
            />
            <Label htmlFor="declarationAccepted" className="text-sm font-medium cursor-pointer">
              I hereby declare that the above information is true and I accept all terms and conditions.
            </Label>
          </div>
        </div>
      </div>

      {/* Validation Messages */}
      {(!data.declaration.studentSignature || !data.declaration.parentSignature || !data.declaration.declarationAccepted) && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h5 className="font-medium text-yellow-800 mb-2">Please complete the following:</h5>
          <ul className="text-sm text-yellow-700 space-y-1">
            {!data.declaration.studentSignature && <li>• Student signature is required</li>}
            {!data.declaration.parentSignature && <li>• Parent/Guardian signature is required</li>}
            {!data.declaration.declarationAccepted && <li>• Please accept the declaration</li>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DeclarationStep;
