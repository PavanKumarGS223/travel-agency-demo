export interface InquirySubmission {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  tourSlug?: string;
  tourTitle?: string;
  destination?: string;
  departureDate?: string;
  returnDate?: string;
  travelersCount: number;
  travelStyle: 'small-group' | 'bespoke-private' | 'flexible';
  specialRequests?: string;
  status: 'new' | 'contacted' | 'quoted' | 'confirmed' | 'archived';
  notes?: string;
  createdAt?: string;
  source: 'trip-planner' | 'tour-detail' | 'contact-page';
}

const STORAGE_KEY = 'wayfarer_demo_inquiries';

export async function submitInquiry(payload: Omit<InquirySubmission, 'id' | 'status' | 'createdAt'>): Promise<{
  success: boolean;
  inquiryId?: string;
  error?: string;
  message?: string;
}> {
  // Defensive validation
  if (!payload.fullName || payload.fullName.trim().length < 2) {
    return { success: false, error: 'Please provide your full name.' };
  }
  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim())) {
    return { success: false, error: 'Please provide a valid email address.' };
  }
  if (!payload.phone || payload.phone.trim().length < 6) {
    return { success: false, error: 'Please provide a valid contact telephone number.' };
  }

  try {
    // Generate unique ID
    const inquiryId = `inq-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const record: InquirySubmission = {
      ...payload,
      id: inquiryId,
      status: 'new',
      notes: '',
      createdAt: new Date().toISOString(),
    };

    // Store in browser local storage for Phase 1 preview and retrieval
    if (typeof window !== 'undefined') {
      const existingRaw = window.localStorage.getItem(STORAGE_KEY);
      const existingList: InquirySubmission[] = existingRaw ? JSON.parse(existingRaw) : [];
      existingList.unshift(record);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(existingList));
    }

    return {
      success: true,
      inquiryId,
      message: 'Your enquiry has been securely received by our expedition specialists.',
    };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'An error occurred while submitting your enquiry. Please retry.',
    };
  }
}

export function getStoredInquiries(): InquirySubmission[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function updateStoredInquiryStatus(id: string, status: InquirySubmission['status'], notes?: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const list = getStoredInquiries();
    const target = list.find((item) => item.id === id);
    if (!target) return false;
    target.status = status;
    if (notes !== undefined) target.notes = notes;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return true;
  } catch {
    return false;
  }
}
