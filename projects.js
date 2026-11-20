/* ==========================================================
   Portfolio project data + shared rendering helpers.
   Used by projects.html (featured) and all-projects.html (filters).

   TO ROTATE FEATURED PROJECTS: change the `featured` value.
   Featured projects are numbered 1-4 (display order). Set it to
   0 to drop a project from the featured row. Keep exactly four.
   ========================================================== */
(function () {
  var GH = 'https://github.com/Luciano-Casillas/';

  var INDUSTRIES = [
    { slug: 'healthcare-insurance', name: 'Healthcare Insurance', blurb: 'Claims, enrollment and denial analytics for health plans.' },
    { slug: 'pc-insurance',         name: 'P&amp;C Insurance',    blurb: 'Retention, lapse and cross-sell analytics for personal lines.' },
    { slug: 'customer-operations',  name: 'Customer Operations',  blurb: 'Telecom churn, survey, call center and client-reporting analytics.' },
    { slug: 'workforce-analytics',  name: 'Workforce Analytics',  blurb: 'Labor marketplace and HR shared-services analytics.' }
  ];

  var METRICS = [
    { slug: 'customer-experience', name: 'Customer Experience', tag: 'tag-cx',   blurb: 'VOC, satisfaction drivers, churn and retention.' },
    { slug: 'revenue-conversion',  name: 'Revenue Conversion',  tag: 'tag-revenue', blurb: 'Cross-sell, unconverted revenue and funnel leakage.' },
    { slug: 'risk-quality',        name: 'Risk &amp; Quality',  tag: 'tag-risk', blurb: 'Denials, rejections, errors, fill failures and SLA breaches.' }
  ];

  var PROJECTS = [
    {
      repo: 'claims-denial-prevention',
      title: 'Healthcare Claims Denial Prevention',
      industry: 'healthcare-insurance', metric: 'risk-quality', label: 'Denial Risk',
      featured: 1,
      summary: 'Root-cause analysis and recovery scenarios for healthcare insurance claim denials across 200K synthetic claims and 350 providers.',
      details: [
        'Claim denials are costly, and most of the loss is preventable when the causes are understood. This project works through 200,000 synthetic insurance claims across 350 providers to find where denials originate and what recovering them is worth.',
        'Prior-authorization delays account for $10.4M, or 35% of denied dollars. Coverage-limit denials are a previously unmeasured $4.07M category with a 59% appeal success rate (approved or partially approved). Network status does not drive denials: in-network and out-of-network rates are 3.95% and 3.87%.',
        'An XGBoost denial model is close to random (test AUC 0.51, 1.14&times; top-decile lift), so the value here is the root-cause analysis and recovery scenarios, not the score. Everything is packaged in an interactive Streamlit dashboard.'
      ],
      badges: ['200K claims, 350 providers', '$10.4M prior-auth denials (35%)', '59% coverage-limit appeal success', 'XGBoost AUC 0.51 (near-random)']
    },
    {
      repo: 'Multiproduct-Household-Propensity-Model',
      title: 'Multiproduct Household Cross-Sell Propensity &amp; Revenue Expansion',
      industry: 'pc-insurance', metric: 'revenue-conversion', label: 'Revenue Expansion',
      featured: 2,
      summary: 'Scores single-product insurance households by likelihood to buy a second policy and sizes the $280M+ unconverted opportunity.',
      details: [
        'Built to answer a question every insurance growth team is sitting on: which single-product customers are actually ready to buy a second policy?',
        'Using 150,000 synthetic household records, this project scores each household by conversion likelihood and identifies where the real revenue opportunity lives. The model correctly separates likely converters from unlikely ones 69% of the time, well above random. The top 20% of scored households account for 36% of all conversions, meaning a sales team can capture more than a third of total opportunity by contacting only one-fifth of the base.',
        'The analysis puts $280M+ in projected unconverted customer lifetime value across 110,908 households on the map. Households that started a property quote converted at 1.5&times; the baseline rate (38.3% vs. 26.1%).',
        'Findings are packaged in an interactive dashboard and financial simulator built for sales strategy and VP-level audiences.'
      ],
      badges: ['AUC 0.69', 'Top-2 decile: 36% of conversions', '$280M+ projected CLTV unconverted', '150K households']
    },
    {
      repo: 'Customer-Satisfaction-Driver-Analysis',
      title: 'NovaStar Telecom &mdash; VOC Survey Analysis',
      industry: 'customer-operations', metric: 'customer-experience', label: 'VOC Analytics',
      featured: 3,
      summary: 'Ranks 120K post-interaction survey responses by detractor risk and isolates the drivers behind dissatisfaction.',
      details: [
        'Most survey analyses stop at the score. This one asks what drives it. Built on 120,000 synthetic post-interaction survey responses, the project ranks responses by detractor risk and shows which parts of the experience matter most, giving outreach teams a clear picture of where to focus.',
        'Nearly 41% of surveyed customers fall into the Detractor category, giving the model a large and commercially meaningful population to work with. The top-risk decile contains 1.82 times the detractors of a random group (gradient boosting, AUC 0.81).',
        'Resolution ease, wait time, and first-contact resolution account for 69% of the model\'s importance. A revenue impact simulator translates the findings into dollar terms for CX and operations leadership: an $8.2M net-value recovery scenario at an assumed 20% save rate and $25 per contact.'
      ],
      badges: ['AUC 0.81', 'Top-decile lift 1.82&times;', '120K survey responses', '40.6% Detractor rate']
    },
    {
      repo: 'shiftpoint-marketplace-ops-analytics',
      title: 'ShiftPoint Marketplace Operations Analytics',
      industry: 'workforce-analytics', metric: 'risk-quality', label: 'Fill-Failure Risk',
      featured: 4,
      summary: 'Reconciles operational data for a 34K-shift flexible-labor marketplace and isolates a 34.9-point fill-failure gap driven by posting lead time.',
      details: [
        'A flexible-labor marketplace runs on operational systems that rarely agree with each other. This project reconciles that data into one view of shift demand and fulfillment across 33,908 shifts.',
        'Shifts posted under 12 hours ahead go unfilled 47.9% of the time, versus 13.0% when posted 48 or more hours ahead: a 34.9-point gap that gives operations a concrete lever to pull. A fill-risk model supports shift-level triage, and a randomized pilot to test an intervention is specified but has not been run.'
      ],
      badges: ['33,908 shifts', '47.9% vs. 13.0% unfilled (under 12h vs. 48h+)', '34.9-pt fill-failure gap', 'Pilot specified, not run']
    },
    {
      repo: 'Waypoint-Property-and-Casualty-Retention-Analysis',
      title: 'Waypoint P&amp;C &mdash; Property &amp; Casualty Retention Analysis',
      industry: 'pc-insurance', metric: 'customer-experience', label: 'Churn &amp; Retention',
      featured: 0,
      summary: 'Predicts policyholder lapse risk across 60K synthetic auto and renters policies and quantifies an 8.8-point renewal edge for the AQX channel.',
      details: [
        'Analyzes 60,081 synthetic auto and renters insurance policies to answer three questions every personal lines carrier faces: who is likely to lapse before renewal, which channel produces the highest-quality customers, and where the cross-sell funnel is leaking premium.',
        'AQX-assisted policyholders renew at 81.8% versus 73.0% for non-AQX, an 8.8-point advantage worth about $130 more 36-month CLTV per policy. This is a plain comparison with no control for selection. Billing distress is the strongest lapse driver: 36.4% of policies with missed payments lapse versus 23.8% without, a gap of about 13 points compared with 7 points for claims severity.',
        'On the cross-sell side, 26,033 auto-only policies (60% of auto-only) were never quoted a renters add-on. A gradient boosting lapse model (test AUC 0.61, a modest model), SQL analysis and an interactive dashboard round out the project.'
      ],
      badges: ['AUC 0.61', 'Top-decile lift 1.59&times;', '8.8-pt AQX renewal edge', '60K policies']
    },
    {
      repo: 'Telco-Churn-Retention-Playbook',
      title: 'Telecom Customer Churn &mdash; Cross-Industry Retention Playbook',
      industry: 'customer-operations', metric: 'customer-experience', label: 'Churn &amp; Retention',
      featured: 0,
      summary: 'Churn model on 225K synthetic subscribers with $32.45M in 24-month revenue at risk, extended to auto insurance non-renewal.',
      details: [
        'Churn is expensive, and the customers most likely to leave rarely announce it. This project builds a predictive model on 225,000 synthetic customer records to identify who is at risk before they cancel, with $32.45M in 24-month revenue (monthly charges times 24) on the line across the at-risk population.',
        'The model separates high-risk from low-risk customers with an AUC of 0.84, and the top-scoring 10% holds 1.84 times as many churners as a random 10%. Customers who churned with an unresolved billing or tech issue in their first 60 days make up 16.7% of all churn. Model outputs are explained at the feature level so stakeholders can see which behaviors drive attrition.',
        'The analytical framework is extended to auto insurance non-renewal, showing how the same retention logic applies across industries.'
      ],
      badges: ['AUC 0.84', 'Top-decile lift 1.84&times;', '$32.45M 24-month revenue at risk', '225K rows']
    },
    {
      repo: 'trellis-enrollment-analytics',
      title: 'Trellis Health Plan Enrollment Analytics',
      industry: 'healthcare-insurance', metric: 'risk-quality', label: 'Rejection Risk',
      featured: 0,
      summary: 'Analyzes 15K synthetic 834 EDI enrollment transactions for a multi-line health plan and flags a 2&times; rejection-rate gap between lines of business.',
      details: [
        'Synthetic 834 EDI enrollment analytics for a multi-line health plan, built with SQL, a dashboard and a rejection-risk model across Medicaid, Medicare and Marketplace lines.',
        'Across 15,000 transactions the overall rejection rate is 13.0%, but Duals (18.5%) and Marketplace (18.2%) reject at roughly twice the rate of Medicare (8.7%). A logistic regression model (test AUC 0.637, a modest model) delivers 1.65&times; decile-1 lift, and 3,567 members hold coverage in more than one line of business.'
      ],
      badges: ['15K transactions, 13.0% rejection', 'Duals 18.5% vs. Medicare 8.7%', 'AUC 0.637, 1.65&times; decile-1 lift', '3,567 multi-line members']
    },
    {
      repo: 'concord-clinical-reporting-tracker',
      title: 'Concord Clinical Reporting Tracker',
      industry: 'customer-operations', metric: 'risk-quality', label: 'Reporting QA',
      featured: 0,
      summary: 'QA checkpoint and escalation-priority mode for a synthetic pharma media reporting pipeline that catches errors before they reach a client.',
      details: [
        'QA checkpoint and escalation-priority mode for a synthetic pharma media reporting pipeline. It catches reporting errors before they reach a client.',
        'Across 351,225 rows, 1.62% are flagged for QA escalation. The highest-risk decile is flagged at 13.42%, 8.28&times; the overall rate. The checks also surface 2,450 rows sharing a duplicate business key and 4.00% missing telemetry.'
      ],
      badges: ['351K rows', '1.62% flagged for escalation', 'Decile-1 flagged at 13.42% (8.28&times; overall)', '2,450 duplicate-key rows']
    },
    {
      repo: 'Call-Center-Scheduling-Conversion-Analytics',
      title: 'Call Center Scheduling &amp; Conversion Analytics',
      industry: 'customer-operations', metric: 'revenue-conversion', label: 'Funnel Conversion',
      featured: 0,
      summary: 'Identifies about $110M in order value tied to scheduled-but-unconverted appointments across 120K leads and 45 clinics.',
      details: [
        'Identifies about $110M in potential order value on scheduled but unconverted leads, against $62.7M realized, across 120,000 call center leads and 45 clinics.',
        'Callback speed is the strongest scheduling lever: leads called back within 15 minutes schedule at 52.9%, versus 37.7% at 60+ minutes. Full analytics pipeline: synthetic data, SQL segmentation, logistic regression propensity model, Streamlit dashboard and Excel workbook.'
      ],
      badges: ['About $110M unconverted', '$62.7M realized', 'Callback within 15 min: 52.9% vs. 37.7%', '120K leads, 45 clinics']
    },
    {
      repo: 'verano-chrt-workforce-intelligence',
      title: 'Verano Workforce Intelligence',
      industry: 'workforce-analytics', metric: 'risk-quality', label: 'SLA &amp; Attrition Risk',
      featured: 0,
      summary: 'Workforce analytics for a fictional shared-services HR center: caseload and SLA breach analysis, forecasting and attrition risk scoring.',
      details: [
        'Portfolio analytics dashboard for a fictional shared-services HR center, built with Streamlit and statsmodels on 430K synthetically generated rows. It covers demand/capacity alignment, SLA breach prediction, FTE demand forecasting and attrition risk scoring.',
        'SLA breaches rise from 11.9% when advisors carry fewer than 15 open cases to 26.6% at 30 or more. Advisors paid below 0.90 of band midpoint (27% of the workforce) show 19.9% attrition versus 3.1% for the rest. An XGBoost model with about 7&times; cross-validated top-decile lift ranks advisors by attrition risk, with $4.6M in replacement cost across the 84 advisors who left within 90 days.'
      ],
      badges: ['430K rows', 'SLA breach 11.9% to 26.6% by caseload', '$4.6M replacement exposure', '~7&times; cross-validated lift']
    }
  ];

  function find(list, slug) {
    for (var i = 0; i < list.length; i++) { if (list[i].slug === slug) { return list[i]; } }
    return null;
  }

  function filterUrl(industry, metric) {
    var q = [];
    if (industry) { q.push('industry=' + industry); }
    if (metric) { q.push('metric=' + metric); }
    return 'all-projects.html' + (q.length ? '?' + q.join('&') : '');
  }

  /* mode 'full' = long copy (featured); 'compact' = summary only */
  function cardHTML(p, mode) {
    var ind = find(INDUSTRIES, p.industry);
    var met = find(METRICS, p.metric);
    var body = mode === 'full'
      ? p.details.map(function (t) { return '<p>' + t + '</p>'; }).join('')
      : '<p>' + p.summary + '</p>';
    var badges = p.badges.map(function (b) { return '<span class="badge">' + b + '</span>'; }).join('');
    return '<div class="project-card">' +
      '<div class="tag-row">' +
        '<a class="project-tag ' + met.tag + '" href="' + filterUrl(null, met.slug) + '">' + p.label + '</a>' +
        '<a class="industry-chip" href="' + filterUrl(ind.slug, null) + '">' + ind.name + '</a>' +
      '</div>' +
      '<h2>' + p.title + '</h2>' +
      body +
      '<hr class="metrics-divider">' +
      '<div class="project-metrics">' +
        '<div class="metrics-header"><span class="metrics-label">Results at a glance</span>' +
        '<span class="metrics-sublabel">' + met.name + ' &middot; ' + ind.name + '</span></div>' +
        '<div class="badges-row">' + badges + '</div>' +
      '</div>' +
      '<a href="' + GH + p.repo + '" class="btn-github" target="_blank" rel="noopener">View on GitHub</a>' +
    '</div>';
  }

  window.Portfolio = {
    INDUSTRIES: INDUSTRIES,
    METRICS: METRICS,
    PROJECTS: PROJECTS,
    find: find,
    filterUrl: filterUrl,
    cardHTML: cardHTML
  };
})();
