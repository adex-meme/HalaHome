import SecurityImg from "@/assets/images/security.png";
import SecurityActiveImg from "@/assets/images/security_active.png";

import OpenImg from '@/assets/images/open.png';
import OpenActiveImg from "@/assets/images/open_active.png";

import PrivacyImg from '@/assets/images/privacy.png';
import PrivacyActiveImg from "@/assets/images/privacy_active.png";

import AIImg from "@/assets/images/ai.png";
import AIActiveImg from "@/assets/images/ai_active.png";

import OpenAndFairImg from '@/assets/images/open_fair.png';
import OpenAndFairActiveImg from "@/assets/images/open_fair_active.png";

export enum FeatureType {
  Privacy,
  Data,
  Sustainable,
  AI,
  OpenAndFair,
}

export const FEATURE_ITEM_HASH = {
  [FeatureType.Privacy]: {
    title: "Security",
    content:
      "All interactions are accomplished solely through smart contracts, and operations require personal confirmation to ensure asset security.	",
    icon: SecurityImg,
    iconActive: SecurityActiveImg,
  },
  [FeatureType.Data]: {
    title: "Open",
    content:
      "The protocol is fully open-source and verifiable. All interactions are established on the blockchain network.",
    icon: OpenImg,
    iconActive: OpenActiveImg,
  },
  [FeatureType.Sustainable]: {
    title: "Privacy",
    content:
      "The anonymous construction of AI identities protects user's' privacy when they engage in various interactions.",
    icon: PrivacyImg,
    iconActive: PrivacyActiveImg,
  },
  [FeatureType.AI]: {
    title: "AI",
    content:
      "The intelligent engine helps users analyze the market, intelligently examines community history and public opinions, and provides more abundant opinions.",
    icon: AIImg,
    iconActive: AIActiveImg,
  },
  [FeatureType.OpenAndFair]: {
    title: "Community",
    content:
      "Hala builds a trusted and sustainable community based on AI technology.",
    icon: OpenAndFairImg,
    iconActive: OpenAndFairActiveImg,
  },
};
