import { FaFacebookF, FaWordpress } from "react-icons/fa";
import { SiCanva, SiElementor, SiFacebook, SiGoogleads, SiGoogleanalytics, SiGoogletagmanager, SiGrammarly, SiMailchimp, SiOpenai, SiZapier } from "react-icons/si";


export const tools = [
  {
    name: "Google Analytics",
    icon: <SiGoogleanalytics />,
    color: "#F9AB00",
    category: "Analytics",
  },
  {
    name: "Google Tag Manager",
    icon: <SiGoogletagmanager />,
    color: "#246FDB",
    category: "Analytics",
  },
 
  {
    name: "Facebook Ads",
    icon: <FaFacebookF />,
    color: "#1877F2",
    category: "Advertising",
  },
  {
    name: "Google Ads",
    icon: <SiGoogleads />,
    color: "#1A73E8",
    category: "Advertising",
  },
  {
    name: "Mailchimp",
    icon: <SiMailchimp />,
    color: "#FFE01B",
    category: "Email Marketing",
  },
  {
    name: "Canva",
    icon: <SiCanva />,
    color: "#00C4CC",
    category: "Design",
  },
  {
    name: "WordPress",
    icon: <FaWordpress />,
    color: "#21759B",
    category: "Website",
  },
  {
    name: "Elementor",
    icon: <SiElementor />,
    color: "#92003B",
    category: "Website",
  },
  {
    name: "Zapier",
    icon: <SiZapier />,
    color: "#FF4A00",
    category: "Automation",
  },
  {
    name: "Meta Business Suite",
    icon: <SiFacebook />,
    color: "#0866FF",
    category: "Social Management",
  },
  {
    name: "ChatGPT",
    icon: <SiOpenai />,
    color: "#10A37F",
    category: "Content AI",
  },
  {
    name: "Grammarly",
    icon: <SiGrammarly />,
    color: "#15C39A",
    category: "Content Writing",
  },
];