export type ConsentState = {
  necessary: true;
  analytics: boolean;
  ads: boolean;
  updatedAt: string; // ISO
};

const KEY = "everlight_consent_v1";

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

export function setConsent(consent: Omit<ConsentState, "necessary" | "updatedAt">) {
  if (typeof window === "undefined") return;
  const payload: ConsentState = {
    necessary: true,
    analytics: consent.analytics,
    ads: consent.ads,
    updatedAt: new Date().toISOString()
  };
  localStorage.setItem(KEY, JSON.stringify(payload));
}

export function clearConsent() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}
