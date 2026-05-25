export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  {
    "name": "ai-sales-outreach",
    "ownership": "ai-sales-outreach contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Sales Outreach.",
    "coverage": [
      "Contacts",
      "Lead Scoring",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AICarDealershipSalesOptimizer",
    "ownership": "AICarDealershipSalesOptimizer contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Sales Outreach.",
    "coverage": [
      "Lead Scoring",
      "Campaigns",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AISalesTrainingSimulator",
    "ownership": "AISalesTrainingSimulator contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Sales Outreach.",
    "coverage": [
      "Campaigns",
      "Sequences",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AIChurnPredictionSystem",
    "ownership": "AIChurnPredictionSystem contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Sales Outreach.",
    "coverage": [
      "Sequences",
      "Cold Email",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AIReviewResponseManager",
    "ownership": "AIReviewResponseManager contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Sales Outreach.",
    "coverage": [
      "Cold Email",
      "LinkedIn Personalization",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AISocialProofGenerator",
    "ownership": "AISocialProofGenerator contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Sales Outreach.",
    "coverage": [
      "LinkedIn Personalization",
      "Reply Analysis",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AiMarketingCopyGenerator",
    "ownership": "AiMarketingCopyGenerator contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Sales Outreach.",
    "coverage": [
      "Reply Analysis",
      "Meeting Booking",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AIAdCopyCreativeGenerator",
    "ownership": "AIAdCopyCreativeGenerator contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Sales Outreach.",
    "coverage": [
      "Meeting Booking",
      "Deliverability",
      "AI tools",
      "Source tables"
    ]
  }
];

export const dashboardMetrics: Metric[] = [
  { label: 'Source Projects', value: '9', note: 'Mapped donors' },
  { label: 'Feature Groups', value: '16', note: 'Unified navigation' },
  { label: 'AI Tools', value: '12', note: 'Suite copilots' },
  { label: 'Open Work', value: '51', note: 'Across workflows' },
];

export const healthMetrics: Metric[] = [
  { label: 'Connector Health', value: '96%', note: 'Pilot baseline' },
  { label: 'Audit Coverage', value: '100%', note: 'All workflows logged' },
  { label: 'Review Queue', value: '17', note: 'Needs owner action' },
  { label: 'Automation Runs', value: '393', note: 'Last 24 hours' },
];

export const dashboardModules = [
  "Contacts operating view",
  "Lead Scoring operating view",
  "Campaigns operating view",
  "Sequences operating view",
  "Cold Email operating view",
  "LinkedIn Personalization operating view",
  "Reply Analysis operating view",
  "Meeting Booking operating view"
];
export const workflowHighlights = [
  "Contacts workflow with records, AI assist, approvals, audit, and reporting",
  "Lead Scoring workflow with records, AI assist, approvals, audit, and reporting",
  "Campaigns workflow with records, AI assist, approvals, audit, and reporting",
  "Sequences workflow with records, AI assist, approvals, audit, and reporting",
  "Cold Email workflow with records, AI assist, approvals, audit, and reporting",
  "LinkedIn Personalization workflow with records, AI assist, approvals, audit, and reporting"
];
