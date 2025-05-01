import SecurityImg from "@/assets/images/security.png";
import SecurityActiveImg from "@/assets/images/security_active.png";

import OpenImg from "@/assets/images/open.png";
import OpenActiveImg from "@/assets/images/open_active.png";

import PrivacyImg from "@/assets/images/privacy.png";
import PrivacyActiveImg from "@/assets/images/privacy_active.png";

import AIImg from "@/assets/images/ai.png";
import AIActiveImg from "@/assets/images/ai_active.png";

import OpenAndFairImg from "@/assets/images/open_fair.png";
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
    title: "featList.privacy.title",
    content: "featList.privacy.content",
    icon: SecurityImg,
    iconActive: SecurityActiveImg,
  },
  [FeatureType.Data]: {
    title: "featList.data.title",
    content: "featList.data.content",
    icon: OpenImg,
    iconActive: OpenActiveImg,
  },
  [FeatureType.Sustainable]: {
    title: "featList.sustainable.title",
    content: "featList.sustainable.content",
    icon: PrivacyImg,
    iconActive: PrivacyActiveImg,
  },
  [FeatureType.AI]: {
    title: "featList.ai.title",
    content: "featList.ai.content",
    icon: AIImg,
    iconActive: AIActiveImg,
  },
  [FeatureType.OpenAndFair]: {
    title: "featList.openAndFair.title",
    content: "featList.openAndFair.content",
    icon: OpenAndFairImg,
    iconActive: OpenAndFairActiveImg,
  },
};
