export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "contacts",
    "label": "Contacts",
    "description": "Contacts actions optimized from donor dashboards and exposed as one AI Sales Outreach action group.",
    "href": "/contacts",
    "sourceProjects": [
      "ai-sales-outreach",
      "AICarDealershipSalesOptimizer",
      "AISalesTrainingSimulator",
      "AIChurnPredictionSystem",
      "AIReviewResponseManager"
    ],
    "examples": [
      "Open Contacts",
      "Review Sales Data",
      "Run Contacts AI check"
    ],
    "count": 5
  },
  {
    "id": "lead-scoring",
    "label": "Lead Scoring",
    "description": "Lead Scoring actions optimized from donor dashboards and exposed as one AI Sales Outreach action group.",
    "href": "/lead-scoring",
    "sourceProjects": [
      "AICarDealershipSalesOptimizer",
      "AISalesTrainingSimulator",
      "AIChurnPredictionSystem",
      "AIReviewResponseManager",
      "AISocialProofGenerator"
    ],
    "examples": [
      "Open Lead Scoring",
      "Review Sales Intelligence",
      "Run Lead Scoring AI check"
    ],
    "count": 5
  },
  {
    "id": "campaigns",
    "label": "Campaigns",
    "description": "Campaigns actions optimized from donor dashboards and exposed as one AI Sales Outreach action group.",
    "href": "/campaigns",
    "sourceProjects": [
      "AISalesTrainingSimulator",
      "AIChurnPredictionSystem",
      "AIReviewResponseManager",
      "AISocialProofGenerator",
      "AiMarketingCopyGenerator"
    ],
    "examples": [
      "Open Campaigns",
      "Review Outreach",
      "Run Campaigns AI check"
    ],
    "count": 5
  },
  {
    "id": "sequences",
    "label": "Sequences",
    "description": "Sequences actions optimized from donor dashboards and exposed as one AI Sales Outreach action group.",
    "href": "/sequences",
    "sourceProjects": [
      "AIChurnPredictionSystem",
      "AIReviewResponseManager",
      "AISocialProofGenerator",
      "AiMarketingCopyGenerator",
      "AIAdCopyCreativeGenerator"
    ],
    "examples": [
      "Open Sequences",
      "Review Outreach",
      "Run Sequences AI check"
    ],
    "count": 5
  },
  {
    "id": "cold-email",
    "label": "Cold Email",
    "description": "Cold Email actions optimized from donor dashboards and exposed as one AI Sales Outreach action group.",
    "href": "/cold-email",
    "sourceProjects": [
      "AIReviewResponseManager",
      "AISocialProofGenerator",
      "AiMarketingCopyGenerator",
      "AIAdCopyCreativeGenerator",
      "salesforce"
    ],
    "examples": [
      "Open Cold Email",
      "Review Outreach",
      "Run Cold Email AI check"
    ],
    "count": 5
  },
  {
    "id": "linkedin-personalization",
    "label": "LinkedIn Personalization",
    "description": "LinkedIn Personalization actions optimized from donor dashboards and exposed as one AI Sales Outreach action group.",
    "href": "/linkedin-personalization",
    "sourceProjects": [
      "AISocialProofGenerator",
      "AiMarketingCopyGenerator",
      "AIAdCopyCreativeGenerator",
      "salesforce",
      "ai-sales-outreach"
    ],
    "examples": [
      "Open LinkedIn Personalization",
      "Review Personalization",
      "Run LinkedIn Personalization AI check"
    ],
    "count": 5
  },
  {
    "id": "reply-analysis",
    "label": "Reply Analysis",
    "description": "Reply Analysis actions optimized from donor dashboards and exposed as one AI Sales Outreach action group.",
    "href": "/reply-analysis",
    "sourceProjects": [
      "AiMarketingCopyGenerator",
      "AIAdCopyCreativeGenerator",
      "salesforce",
      "ai-sales-outreach",
      "AICarDealershipSalesOptimizer"
    ],
    "examples": [
      "Open Reply Analysis",
      "Review Sales Intelligence",
      "Run Reply Analysis AI check"
    ],
    "count": 5
  },
  {
    "id": "meeting-booking",
    "label": "Meeting Booking",
    "description": "Meeting Booking actions optimized from donor dashboards and exposed as one AI Sales Outreach action group.",
    "href": "/meeting-booking",
    "sourceProjects": [
      "AIAdCopyCreativeGenerator",
      "salesforce",
      "ai-sales-outreach",
      "AICarDealershipSalesOptimizer",
      "AISalesTrainingSimulator"
    ],
    "examples": [
      "Open Meeting Booking",
      "Review Pipeline",
      "Run Meeting Booking AI check"
    ],
    "count": 5
  },
  {
    "id": "deliverability",
    "label": "Deliverability",
    "description": "Deliverability actions optimized from donor dashboards and exposed as one AI Sales Outreach action group.",
    "href": "/deliverability",
    "sourceProjects": [
      "salesforce",
      "ai-sales-outreach",
      "AICarDealershipSalesOptimizer",
      "AISalesTrainingSimulator",
      "AIChurnPredictionSystem"
    ],
    "examples": [
      "Open Deliverability",
      "Review Governance",
      "Run Deliverability AI check"
    ],
    "count": 5
  }
];
