import { useDispatch } from "react-redux";
import { agenttypes } from "./agentTypesSlice";
import { useEffect } from "react";

const data = [
  {
    id: 1,
    img: "https://cdn-icons-png.flaticon.com/512/8317/8317790.png",
    heading: "🧠 AI Task Agents",
    desc: "Automate multi-step goals with minimal input",
  },
  {
    id: 2,
    img: "https://cdn-icons-png.flaticon.com/512/2098/2098402.png",
    heading: "🧑‍💼 AI Assistants",
    desc: "Personalized help with tasks, emails, schedules",
  },
  {
    id: 3,
    img: "https://cdn-icons-png.flaticon.com/512/7560/7560719.png",
    heading: "💻 Code Agents",
    desc: "Write/debug code, manage entire software lifecycle",
  },
  {
    id: 4,
    img: "https://images.vexels.com/media/users/3/143402/isolated/svg/afbbf15d5e82a1c4fb5a55c4eacf3003.svg",
    heading: "📚 Education",
    desc: "Personalized tutors that adapt to learner's needs",
  },
  {
    id: 5,
    img: "https://images.vexels.com/media/users/3/143065/isolated/lists/c6cbc8cf5ca3856bca8d5f28c0471fca-bar-graph-cart.png",
    heading: "📊 Business AI",
    desc: "Automate reporting, analysis, CRM updates",
  },
  {
    id: 6,
    img: "https://static.vecteezy.com/system/resources/thumbnails/024/673/704/small_2x/drone-flying-on-farming-to-inspection-and-scanning-the-area-for-monitoring-smart-farming-and-researching-technology-concept-transparent-background-ai-generated-generative-ai-png.png",
    heading: "🤖 Robotics",
    desc: "Agents in real-world devices like delivery drones",
  },
];

const agentTypesAPI = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(agenttypes(data));
  }, [dispatch]);
};

export default agentTypesAPI;
