import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  Database,
  FileText,
  Files,
  LayoutDashboard,
  Mail,
  MessageSquareText,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const suiteSourceOwners = ["ai-sales-outreach","AICarDealershipSalesOptimizer","AISalesTrainingSimulator","AIChurnPredictionSystem","AIReviewResponseManager","AISocialProofGenerator","AiMarketingCopyGenerator","AIAdCopyCreativeGenerator","salesforce"];

const features = [
  {
    slug: "contacts",
    title: "Contacts",
    href: "/contacts",
    category: "Sales Data",
    icon: Bot,
    summary: "Contacts combines donor project behavior into the AI Sales Outreach operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Contacts queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Contacts", value: "18", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "lead-scoring",
    title: "Lead Scoring",
    href: "/lead-scoring",
    category: "Sales Intelligence",
    icon: Workflow,
    summary: "Lead Scoring combines donor project behavior into the AI Sales Outreach operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Lead Scoring queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Lead Scoring", value: "27", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "campaigns",
    title: "Campaigns",
    href: "/campaigns",
    category: "Outreach",
    icon: Users,
    summary: "Campaigns combines donor project behavior into the AI Sales Outreach operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Campaigns queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Campaigns", value: "36", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "sequences",
    title: "Sequences",
    href: "/sequences",
    category: "Outreach",
    icon: CalendarCheck,
    summary: "Sequences combines donor project behavior into the AI Sales Outreach operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Sequences queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Sequences", value: "45", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "cold-email",
    title: "Cold Email",
    href: "/cold-email",
    category: "Outreach",
    icon: Mail,
    summary: "Cold Email combines donor project behavior into the AI Sales Outreach operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Cold Email queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Cold Email", value: "54", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "linkedin-personalization",
    title: "LinkedIn Personalization",
    href: "/linkedin-personalization",
    category: "Personalization",
    icon: MessageSquareText,
    summary: "LinkedIn Personalization combines donor project behavior into the AI Sales Outreach operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["LinkedIn Personalization queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "LinkedIn Personalization", value: "63", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "reply-analysis",
    title: "Reply Analysis",
    href: "/reply-analysis",
    category: "Sales Intelligence",
    icon: BarChart3,
    summary: "Reply Analysis combines donor project behavior into the AI Sales Outreach operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Reply Analysis queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Reply Analysis", value: "72", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "meeting-booking",
    title: "Meeting Booking",
    href: "/meeting-booking",
    category: "Pipeline",
    icon: ClipboardList,
    summary: "Meeting Booking combines donor project behavior into the AI Sales Outreach operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Meeting Booking queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Meeting Booking", value: "81", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "deliverability",
    title: "Deliverability",
    href: "/deliverability",
    category: "Governance",
    icon: FileText,
    summary: "Deliverability combines donor project behavior into the AI Sales Outreach operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Deliverability queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Deliverability", value: "90", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "pipeline",
    title: "Pipeline",
    href: "/pipeline",
    category: "Revenue Operations",
    icon: PackageCheck,
    summary: "Pipeline combines donor project behavior into the AI Sales Outreach operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Pipeline queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Pipeline", value: "99", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "documents",
    title: "Documents",
    href: "/documents",
    category: "Core Platform",
    icon: Files,
    summary: "AI Sales Outreach documents, packets, evidence, uploads, and exports.",
    bullets: ["Documents","Uploads","Exports"],
    metrics: [
      { label: "Documents", value: "48", note: 'Tracked' },
      { label: 'Open', value: "7", note: 'Needs review' },
      { label: 'Updated', value: "21", note: 'This week' },
    ],
  },
  {
    slug: "notifications",
    title: "Notifications",
    href: "/notifications",
    category: "Core Platform",
    icon: Bell,
    summary: "AI Sales Outreach alerts, reminders, exceptions, and approvals.",
    bullets: ["Alerts","Reminders","Exceptions"],
    metrics: [
      { label: "Notifications", value: "65", note: 'Tracked' },
      { label: 'Open', value: "10", note: 'Needs review' },
      { label: 'Updated', value: "29", note: 'This week' },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    href: "/integrations",
    category: "Core Platform",
    icon: Plug,
    summary: "AI Sales Outreach source-system connector health and sync status.",
    bullets: ["Connectors","Sync","Warnings"],
    metrics: [
      { label: "Integrations", value: "82", note: 'Tracked' },
      { label: 'Open', value: "13", note: 'Needs review' },
      { label: 'Updated', value: "37", note: 'This week' },
    ],
  },
  {
    slug: "profiles",
    title: "Profiles",
    href: "/profiles",
    category: "Core Platform",
    icon: UserRound,
    summary: "AI Sales Outreach users, roles, teams, permissions, and ownership settings.",
    bullets: ["Users","Roles","Teams"],
    metrics: [
      { label: "Profiles", value: "99", note: 'Tracked' },
      { label: 'Open', value: "16", note: 'Needs review' },
      { label: 'Updated', value: "45", note: 'This week' },
    ],
  },
  {
    slug: "campaign-planner",
    title: "Campaign Planner",
    href: "/campaign-planner",
    category: "Sales Outreach Operations",
    icon: Workflow,
    summary: "Audience, offer, channels, sequences, goals, owner assignments, and launch readiness.",
    bullets: ["Operational workspace","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Campaign Planner", value: "38", note: 'Active items' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "lead-enrichment",
    title: "Lead Enrichment",
    href: "/lead-enrichment",
    category: "Sales Outreach Operations",
    icon: Workflow,
    summary: "Company data, contact roles, buying signals, qualification notes, and confidence scoring.",
    bullets: ["Operational workspace","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Lead Enrichment", value: "49", note: 'Active items' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "outreach-inbox",
    title: "Outreach Inbox",
    href: "/outreach-inbox",
    category: "Sales Outreach Operations",
    icon: Workflow,
    summary: "Replies, objections, intent signals, next-best action, routing, and follow-up timing.",
    bullets: ["Operational workspace","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Outreach Inbox", value: "60", note: 'Active items' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "reply-classification",
    title: "Reply Classification",
    href: "/reply-classification",
    category: "Sales Outreach Operations",
    icon: Workflow,
    summary: "Positive replies, objections, unsubscribes, referrals, timing asks, and escalation rules.",
    bullets: ["Operational workspace","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Reply Classification", value: "71", note: 'Active items' },
      { label: 'Exceptions', value: "7", note: 'Need review' },
      { label: 'Due Soon', value: "10", note: 'Next 14 days' },
    ],
  },
  {
    slug: "sequence-performance",
    title: "Sequence Performance",
    href: "/sequence-performance",
    category: "Sales Outreach Operations",
    icon: Workflow,
    summary: "Open rates, reply rates, meetings booked, variants, drop-off points, and optimization notes.",
    bullets: ["Operational workspace","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Sequence Performance", value: "82", note: 'Active items' },
      { label: 'Exceptions', value: "8", note: 'Need review' },
      { label: 'Due Soon', value: "11", note: 'Next 14 days' },
    ],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: "AI Sales Outreach assistant for triage, drafting, analysis, recommendations, and operational review.",
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: "Targeted AI Sales Outreach AI tools for scoring, generation, extraction, classification, exception review, and reporting.",
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  { name: "Sales Outreach Operations", features: ["Campaign Planner","Lead Enrichment","Outreach Inbox","Reply Classification","Sequence Performance"] },
  {
    "name": "Sales Data",
    "features": [
      "Contacts"
    ]
  },
  {
    "name": "Sales Intelligence",
    "features": [
      "Lead Scoring",
      "Reply Analysis"
    ]
  },
  {
    "name": "Outreach",
    "features": [
      "Campaigns",
      "Sequences",
      "Cold Email"
    ]
  },
  {
    "name": "Personalization",
    "features": [
      "LinkedIn Personalization"
    ]
  },
  {
    "name": "Pipeline",
    "features": [
      "Meeting Booking"
    ]
  },
  {
    "name": "Governance",
    "features": [
      "Deliverability"
    ]
  },
  {
    "name": "Revenue Operations",
    "features": [
      "Pipeline"
    ]
  },
  {
    "name": "Intelligence Layer",
    "features": [
      "AI Assistant",
      "AI Tools"
    ]
  },
  {
    "name": "Core Platform",
    "features": [
      "Documents",
      "Notifications",
      "Integrations",
      "Profiles"
    ]
  }
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: feature.title + ' is normalized from source applications into one merged suite workflow.',
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: suiteSourceOwners.length ? suiteSourceOwners : ["AI Sales Outreach"],
      operatingQueues: [feature.title + ' records', feature.title + ' approvals', feature.title + ' exceptions'],
      outputs: [feature.title + ' dashboard', feature.title + ' export', feature.title + ' audit trail'],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'AI Tools', href: '/features/ai-tools' }],
    },
  ]),
);
