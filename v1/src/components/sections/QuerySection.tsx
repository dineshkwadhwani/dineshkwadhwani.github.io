import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  GraduationCap,
  Target,
  MessageSquare,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const QuerySection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentAge: "",
    skillLevel: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const skillLevels = [
    { value: "beginner", label: "Beginner - Just Starting" },
    { value: "intermediate", label: "Intermediate - Some Experience" },
    { value: "advanced", label: "Advanced - Working Professional" },
  ];

  const interests = [
    { value: "programming-basics", label: "Programming Basics" },
    { value: "web-development", label: "Web Development" },
    { value: "data-structures", label: "Data Structures & Algorithms" },
    { value: "system-design", label: "System Design" },
    { value: "career-guidance", label: "Career Guidance" },
    { value: "interview-prep", label: "Interview Preparation" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !formData.name ||
      !formData.email ||
      !formData.skillLevel ||
      !formData.interest
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Query Submitted Successfully!",
      description:
        "Thank you for your interest. I'll get back to you within 24-48 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      studentAge: "",
      skillLevel: "",
      interest: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section className="section-container-alt relative pt-36 md:pt-40">
      <span className="section-number">05</span>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-muted-foreground mb-4 tracking-widest uppercase">
            Start Your Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-6">
            Mentorship <span className="text-gradient">Enquiry</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a student, parent, or working professional looking to
            level up, fill out this form and I'll personally reach out to discuss
            your goals.
          </p>
        </motion.div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 bg-card border border-border rounded-lg p-8 md:p-10"
          >
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-mono text-sm font-medium">
                  <User className="w-4 h-4 text-primary" />
                  Full Name *
                </label>
                <Input
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-mono text-sm font-medium">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address *
                </label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-mono text-sm font-medium">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="+91 XXXXXXXXXX"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-mono text-sm font-medium">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  Student Age (if applicable)
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 18"
                  value={formData.studentAge}
                  onChange={(e) =>
                    setFormData({ ...formData, studentAge: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Selection Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-mono text-sm font-medium">
                  <Target className="w-4 h-4 text-primary" />
                  Current Skill Level *
                </label>
                <Select
                  value={formData.skillLevel}
                  onValueChange={(value) =>
                    setFormData({ ...formData, skillLevel: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your skill level" />
                  </SelectTrigger>
                  <SelectContent>
                    {skillLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-mono text-sm font-medium">
                  <Target className="w-4 h-4 text-primary" />
                  Area of Interest *
                </label>
                <Select
                  value={formData.interest}
                  onValueChange={(value) =>
                    setFormData({ ...formData, interest: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your interest" />
                  </SelectTrigger>
                  <SelectContent>
                    {interests.map((interest) => (
                      <SelectItem
                        key={interest.value}
                        value={interest.value}
                      >
                        {interest.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 font-mono text-sm font-medium">
                <MessageSquare className="w-4 h-4 text-primary" />
                Additional Message
              </label>
              <Textarea
                placeholder="Tell me about your goals, challenges, or questions..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="min-h-[120px]"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full journey-button justify-center disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Enquiry
                </>
              )}
            </motion.button>
          </motion.form>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          * Required fields. I typically respond within 24-48 hours.
        </motion.p>
      </div>
    </section>
  );
};

export default QuerySection;
