import type { StarlightUserConfig } from '@astrojs/starlight/types';

type SidebarConfig = NonNullable<StarlightUserConfig['sidebar']>;

const guideItems = (prefix: string) => [
	{
		label: 'Digital Twins',
		items: [
			`${prefix}/digital-twins/entities`,
			`${prefix}/digital-twins/relations`,
			`${prefix}/digital-twins/attributes`,
			`${prefix}/digital-twins/time-series-data`,
		],
	},
	{
		label: 'Devices',
		items: [
			`${prefix}/devices`,
			`${prefix}/device-profiles`,
			`${prefix}/connectivity-guide`,
			`${prefix}/connectivity-status`,
			`${prefix}/claiming`,
			`${prefix}/provisioning`,
			`${prefix}/bulk-provisioning`,
			`${prefix}/ota-updates`,
			`${prefix}/command-and-control`,
		],
	},
	{
		label: 'Dashboards',
		items: [
			`${prefix}/dashboards`,
			`${prefix}/widgets`,
			`${prefix}/widget-library`,
			`${prefix}/aliases`,
			`${prefix}/layouts`,
			`${prefix}/actions`,
			`${prefix}/scada`,
			`${prefix}/units`,
		],
	},
	{
		label: 'Customers & Users',
		items: [
			`${prefix}/multi-tenancy`,
			`${prefix}/customers`,
			`${prefix}/users`,
			`${prefix}/roles`,
		],
	},
	{
		label: 'Alarms & Notifications',
		items: [
			`${prefix}/alarms`,
			`${prefix}/alarm-rules`,
			`${prefix}/notifications`,
		],
	},
	{
		label: 'Data Processing',
		items: [
			`${prefix}/calculated-fields`,
			`${prefix}/rule-engine`,
			`${prefix}/rule-nodes`,
		],
	},
	{
		label: 'Reporting',
		items: [
			`${prefix}/reporting`,
		],
	},
	{
		label: 'AI',
		items: [
			`${prefix}/ai-models`,
			`${prefix}/mcp-server`,
			`${prefix}/local-ai-ollama`,
			`${prefix}/n8n-node`,
		],
	},
	{
		label: 'Integrations',
		items: [
			`${prefix}/integrations`,
			`${prefix}/integrations-comparison`,
		],
	},
	{
		label: 'White-labeling',
		items: [
			`${prefix}/white-labeling-general`,
			`${prefix}/white-labeling-login`,
			`${prefix}/white-labeling-mail`,
			`${prefix}/white-labeling-translation`,
			`${prefix}/white-labeling-menu`,
		],
	},
	{
		label: 'Mobile App Center',
		items: [
			`${prefix}/mobile-app-center`,
		],
	},
	{
		label: 'Other Features',
		items: [
			`${prefix}/add-ons`,
			`${prefix}/edge-computing`,
			`${prefix}/trendz-analytics`,
		],
	},
	{
		label: 'Security',
		items: [
			`${prefix}/security`,
		],
	},
	{
		label: 'Contribution',
		items: [
			`${prefix}/contribution`,
			`${prefix}/scada-symbol-dev`,
		],
	},
	{
		label: 'Versions & Support',
		items: [
			`${prefix}/versions-and-support`,
		],
	},
];

export const opensourceSidebar: SidebarConfig = [
	{
		label: 'Getting Started',
		translations: { uk: 'Початок роботи' },
		items: [
			'docs',
			{
				label: 'Welcome to IoT!',
				translations: { uk: 'Новий проект' },
				items: [
					'docs/why-thingsboard',
					'docs/tutorial/getting-started'
				],
			},
			{
				label: 'Key concepts',
				translations: { uk: 'Новий проект' },
				items: [
					'docs/concepts/multi-tenancy',
					'docs/concepts/digital-twin-model',
					'docs/concepts/data-processing',
					'docs/concepts/alerts-and-notifications',
					'docs/concepts/data-visualization'
				],
			}
		],
	},
	{
		label: 'Guides',
		translations: { uk: 'Посібники' },
		items: guideItems('docs/user-guide'),
	},
	{
		label: 'Reference',
		translations: { uk: 'Довідник' },
		items: [
			'docs/reference/configuration-reference',
			'docs/reference/cli-reference',
			'docs/reference/api-reference',
			'docs/reference/error-reference',
		],
	},
];

/** Professional Edition documentation sidebar (pages at /docs/pe/) */
export const peSidebar: SidebarConfig = [
	{
		label: 'Getting Started',
		translations: { uk: 'Початок роботи' },
		items: [
			'docs/pe',
			{
				label: 'Welcome to IoT!',
				translations: { uk: 'Новий проект' },
				items: [
					'docs/pe/why-thingsboard',
					'docs/pe/tutorial/getting-started',
				],
			},
			{
				label: 'Key concepts',
				translations: { uk: 'Новий проект' },
				items: [
					'docs/pe/concepts/multi-tenancy',
					'docs/pe/concepts/digital-twin-model',
					'docs/pe/concepts/data-processing',
					'docs/pe/concepts/alerts-and-notifications',
					'docs/pe/concepts/data-visualization'
				],
			}
		],
	},
	{
		label: 'Guides',
		translations: { uk: 'Посібники' },
		items: guideItems('docs/pe/user-guide'),
	},
	{
		label: 'PE Features',
		translations: { uk: 'Функції PE' },
		autogenerate: { directory: 'docs/pe/guides' },
	},
];

/** Cloud (PaaS) documentation sidebar (pages at /docs/paas/) */
export const paasSidebar: SidebarConfig = [
	{
		label: 'Getting Started',
		translations: { uk: 'Початок роботи' },
		items: ['docs/paas/getting-started'],
	},
	{
		label: 'Cloud Features',
		translations: { uk: 'Функції Cloud' },
		autogenerate: { directory: 'docs/paas/guides' },
	},
];

/**
 * Combined sidebar configuration.
 * Route middleware in routeData.ts filters this to show only
 * the relevant version's sidebar items.
 */
export const sidebar: SidebarConfig = [...opensourceSidebar, ...peSidebar, ...paasSidebar];
