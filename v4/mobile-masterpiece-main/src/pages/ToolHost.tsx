import { useParams } from "react-router-dom";

import LeadershipTool from "@/tools/leadership/LeadershipTool";
// later:
// import ResumeTool from "@/tools/resume/ResumeTool";

const ToolHost = () => {
  const { toolId } = useParams();

  const renderTool = () => {
    switch (toolId) {
      case "style":
        return <LeadershipTool />;

      // future tools
      // case "resume":
      //   return <ResumeTool />;

      default:
        return (
          <div className="text-center text-muted-foreground py-20">
            Tool not found.
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen hero-radial">
      <div className="container py-16">
        {renderTool()}
      </div>
    </div>
  );
};

export default ToolHost;
