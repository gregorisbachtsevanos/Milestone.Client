import { ReactNode } from "react";

export type Nullable<T> = { [K in keyof T]?: T[K] | null };

export type ErrorResponse = {
  title: string;
  code: number;
  domain: string;
  message: string;
};

export type HookFormError = {
  message: string;
};

export type PaginatedResponse<T> = {
  data: T[];
  pages: number;
};

export type PaginatedRequest = {
  offset: number;
  limit: number;
};

export type Link = {
  title: string;
  icon: ReactNode;
  to: string;
};

export type AdOpsUserProfile = {
  id: string;
  username: string;
};

export type Brand = {
  id: string;
  name: string;
  logoUri: string;
  country: {
    code: string;
    currency: {
      code: string;
      symbol: string;
    };
  };
};

export type PublisherType = {
  id: string;
  name: string;
};

export type Charity = {
  id: string;
  name: string;
  url: string;
};

export type CharityCategory = {
  id: string;
  name: string;
};

export type CountryInfo = {
  code: string;
  currency: {
    code: string;
    symbol: string;
  };
};

export enum CampaignStatus {
  Draft = "Draft",
  Active = "Active",
  Inactive = "Inactive",
}

export enum ProcessingStatus {
  Ingest = "Ingest",
  Complete = "Complete",
  Error = "Error",
}

export type VideoProcessingStatus = {
  status: ProcessingStatus;
};

export enum Publisher {
  PublicGood = "public-good",
  NewsCorp = "news-corp",
}

export enum AdFormatType {
  Rewarded = "rewarded",
  ImpactOnly = "impactOnly",
}

export enum AdFormatPathName {
  Reward = "reward",
  Impact_Only = "impact-only",
}
