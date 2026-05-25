export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "contacts-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Contacts workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Contacts request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Sales Outreach Suite"
    }
  ],
  "lead-scoring-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Lead Scoring workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Lead Scoring request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Sales Outreach Suite"
    }
  ],
  "campaigns-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Campaigns workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Campaigns request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Sales Outreach Suite"
    }
  ],
  "sequences-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Sequences workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Sequences request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Sales Outreach Suite"
    }
  ],
  "cold-email-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Cold Email workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Cold Email request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Sales Outreach Suite"
    }
  ],
  "linkedin-personalization-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve LinkedIn Personalization workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample LinkedIn Personalization request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Sales Outreach Suite"
    }
  ],
  "reply-analysis-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Reply Analysis workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Reply Analysis request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Sales Outreach Suite"
    }
  ],
  "meeting-booking-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Meeting Booking workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Meeting Booking request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Sales Outreach Suite"
    }
  ],
  "deliverability-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Deliverability workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Deliverability request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Sales Outreach Suite"
    }
  ],
  "pipeline-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Pipeline workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Pipeline request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Sales Outreach Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Sales Outreach Suite"
    }
  ]
};
