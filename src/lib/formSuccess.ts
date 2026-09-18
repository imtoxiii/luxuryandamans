import type { NavigateFunction } from 'react-router-dom';
import toast from 'react-hot-toast';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export type FormSource =
  | 'enquiry_page'
  | 'contact_page'
  | 'offer_quick_enquiry'
  | 'offer_best_package'
  | 'lead_popup'
  | 'calculator'
  | 'newsletter'
  | 'discount_popup';

/** Minimal location snapshot so the thank-you page can render as a modal
 * over the page the user submitted from. */
export interface BackgroundLocation {
  pathname: string;
  search: string;
  hash: string;
}

export interface ThankYouLocationState {
  source: FormSource;
  name?: string;
  backgroundLocation?: BackgroundLocation;
  /** Set when closing the modal — tells transition/scroll hooks to stand down. */
  modalClose?: boolean;
}

/**
 * Push a GTM conversion event, flag the session so /thank-you knows a
 * submission just happened, then navigate to the distinct /thank-you URL.
 *
 * The URL genuinely becomes /thank-you (real history entry, so GTM history
 * triggers / GA4 pageviews / Ads URL-based conversions all fire), but the
 * form page stays mounted underneath and thank-you renders as a dismissible
 * modal popup. GTM can also trigger conversion tags directly on the
 * `form_submission` event.
 */
export function trackFormSubmission(source: FormSource, extra?: Record<string, unknown>) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'form_submission',
      form_source: source,
      ...(extra || {}),
    });
  } catch {
    /* noop */
  }
  try {
    sessionStorage.setItem(
      'la_last_form_submission',
      JSON.stringify({ source, at: Date.now() })
    );
  } catch {
    /* noop */
  }
}

export function redirectToThankYou(
  navigate: NavigateFunction,
  source: FormSource,
  state?: { name?: string }
) {
  trackFormSubmission(source, state?.name ? { form_name: state.name } : undefined);
  // The thank-you modal is the confirmation — dismiss inline toasts so they
  // don't stack up hidden behind it.
  try {
    toast.dismiss();
  } catch {
    /* noop */
  }
  const backgroundLocation: BackgroundLocation = {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
  };
  const locationState: ThankYouLocationState = {
    source,
    name: state?.name,
    backgroundLocation,
  };
  navigate('/thank-you', {
    replace: false,
    state: locationState,
  });
}
