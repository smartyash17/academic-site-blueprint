
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthContext";
import { FormData } from "@/components/AdmissionPortal/types";
import { useToast } from "@/hooks/use-toast";

export const useFormPersistence = (initialData: FormData) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>(initialData);
  const [loading, setLoading] = useState(false);

  // Load saved form data on component mount
  useEffect(() => {
    if (user) {
      loadFormData();
    }
  }, [user]);

  const loadFormData = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from("admission_applications")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (error) {
        console.error("Error loading form data:", error);
        return;
      }

      if (data) {
        setFormData({
          personalDetails: data.personal_details || initialData.personalDetails,
          academicDetails: data.academic_details || initialData.academicDetails,
          declaration: data.declaration || initialData.declaration,
          uploads: data.uploads || initialData.uploads,
        });
      }
    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };

  const saveFormData = async (data: FormData) => {
    if (!user) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("admission_applications")
        .upsert({
          user_id: user.id,
          personal_details: data.personalDetails,
          academic_details: data.academicDetails,
          declaration: data.declaration,
          uploads: data.uploads,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: "user_id"
        });

      if (error) {
        console.error("Error saving form data:", error);
        toast({
          title: "Save failed",
          description: "Failed to save your progress. Please try again.",
          variant: "destructive",
        });
      } else {
        setFormData(data);
      }
    } catch (error) {
      console.error("Error saving form data:", error);
      toast({
        title: "Save failed",
        description: "Failed to save your progress. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const submitApplication = async (data: FormData) => {
    if (!user) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("admission_applications")
        .upsert({
          user_id: user.id,
          personal_details: data.personalDetails,
          academic_details: data.academicDetails,
          declaration: data.declaration,
          uploads: data.uploads,
          application_status: "submitted",
          submitted_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }, {
          onConflict: "user_id"
        });

      if (error) {
        console.error("Error submitting application:", error);
        toast({
          title: "Submission failed",
          description: "Failed to submit your application. Please try again.",
          variant: "destructive",
        });
        return false;
      } else {
        toast({
          title: "Application submitted!",
          description: "Your application has been submitted successfully.",
        });
        return true;
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Submission failed",
        description: "Failed to submit your application. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    saveFormData,
    submitApplication,
    loading,
  };
};
