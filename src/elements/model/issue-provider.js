"use strict";

Polymer({
	is: "issue-provider",
	properties: {
		_response: Object,
		detail: Object,
		params: {
			value: {
				"order": "issue",
				"series": "Watchmen",
				"volume": 1
			}
		},
		issues: {
			notify: true,
			computed: "_computeIssues(_response)"
		}
	},
	_computeIssues: response =>
		Array.from(response.comics.map(issue =>
				issue = {
					id: issue.id,
					issueNumber: issue.issue,
					title: `${issue.series} #${issue.issue}`,
					series: issue.series,
					year: issue.year,
					pagecount: issue.page_count,
					lastreadPage: Number(issue.lastread_page)
				}
		))
});