import { AdUnitName, Pricing, UnitPricing } from "@/features/create-edit-campaign/ad-network/types";

export const transformAdUnitPriceListResponse = (
  adUnitPricingWithoutTotal: Record<AdUnitName, Omit<Pricing, "total">>
) => {
  const responseWithTotal = Object.assign({}, adUnitPricingWithoutTotal) as UnitPricing;
  Object.keys(responseWithTotal).forEach((val: string) => {
    const key = val as AdUnitName;
    responseWithTotal[key] = {
      ...responseWithTotal[key],
      total: Object.values(responseWithTotal[key])
        .reduce((acc, currentValue) => +(acc + parseFloat(currentValue)).toFixed(4), 0)
        .toString(),
    };
  });
  return responseWithTotal;
};

export const transformCampaignAdUnitPricingResponse = (pricing: Omit<Pricing, "total">) => ({
  ...pricing,
  total: Object.values(pricing)
    .reduce((acc, currentValue) => +(acc + parseFloat(currentValue)).toFixed(4), 0)
    .toString(),
});
