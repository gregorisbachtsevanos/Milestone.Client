import { impactOnlyPublishers } from "@/features/create-edit-campaign/constants";

export const generateSafeFileNameWithExtension = (originalFileNameWithExtension?: string) => {
  if (!originalFileNameWithExtension) return "";
  const fileNameSplittedOnDots = originalFileNameWithExtension.split(".");
  const fileNameExtension = fileNameSplittedOnDots[fileNameSplittedOnDots.length - 1];
  return `${Date.now()}.${fileNameExtension}`;
};

export const isImpactOnlyPublisher = (publisher: string) =>
  Object.values(impactOnlyPublishers).includes(publisher);
