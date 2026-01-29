import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import QuerySection from "@/components/sections/QuerySection";

const Query = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.button
          onClick={() => navigate("/")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-mono"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </motion.button>

        <QuerySection />
      </div>
    </div>
  );
};

export default Query;
