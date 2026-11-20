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
    { slug: 'customer-operations',  name: 'Customer Operations',  blurb: 'Survey, call center and client-reporting analytics.' },
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
      summary: 'Root-cause analysis, predictive modeling and financial-recovery scenarios for healthcare insurance claim denials, built on 200K synthetic claims.',
      details: [
        'Claim denials are costly, and most of the loss is preventable when the causes are understood. This project works through 200,000 synthetic insurance claims to find where denials originate, which claims are most likely to be denied, and what recovering them is worth.',
        'An XGBoost model scores claims by denial risk, delivering a 1.18&times; top-decile lift. Root-cause analysis and financial recovery scenarios turn the model output into decisions a revenue integrity team can act on.',
        'Everything is packaged in an interactive Streamlit dashboard.'
      ],
      badges: ['200K synthetic claims', 'XGBoost model', 'Top-decile lift 1.18&times;', 'Recovery scenarios']
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
        'The analysis puts $280M+ in unconverted customer lifetime value on the map, with quote abandonment and outreach frequency identified as the two clearest signals of purchase intent.',
        'Findings are packaged in a live dashboard and financial simulator built for sales strategy and VP-level audiences.'
      ],
      badges: ['AUC 0.69', 'Top-2 decile: 36% of conversions', '$280M+ CLTV opportunity', '150K households']
    },
    {
      repo: 'Customer-Satisfaction-Driver-Analysis',
      title: 'NovaStar Telecom &mdash; VOC Survey Analysis',
      industry: 'customer-operations', metric: 'customer-experience', label: 'VOC Analytics',
      featured: 3,
      summary: 'Identifies which dissatisfied customers are most likely to churn or escalate, using 120K post-interaction survey responses.',
      details: [
        'Most survey analyses stop at the score. This one asks what happens next. Built on 120,000 synthetic post-interaction survey responses, the project identifies which dissatisfied customers are most likely to churn or escalate, giving outreach teams a clear picture of who to prioritize before the relationship breaks down.',
        'Nearly 41% of surveyed customers fall into the Detractor category, giving the risk model a large and commercially meaningful population to work with. When the model ranks customers by risk, the top 10% convert at 1.82 times the rate of a randomly selected group. The same outreach budget goes significantly further when it is pointed in the right direction.',
        'Resolution ease, wait time, and first-contact resolution surface as the three factors customers care about most. A revenue impact simulator translates all of it into dollar terms for CX and operations leadership.'
      ],
      badges: ['AUC 0.81', 'Top-decile lift 1.82&times;', '120K survey responses', '40.6% Detractor rate']
    },
    {
      repo: 'shiftpoint-marketplace-ops-analytics',
      title: 'ShiftPoint Marketplace Operations Analytics',
      industry: 'workforce-analytics', metric: 'risk-quality', label: 'Fill-Failure Risk',
      featured: 4,
      summary: 'Reconciles 5 disconnected ops systems for a flexible-labor marketplace and isolates a 34.9-point fill-failure gap driven by posting lead time.',
      details: [
        'A flexible-labor marketplace runs on five systems that rarely agree with each other. This project reconciles all five into one view of shift demand and fulfillment.',
        'The reconciled data isolates a 34.9-point fill-failure gap driven by posting lead time, giving operations a concrete lever to pull. A leakage-safe risk model (AUC 0.709) then flags shifts at risk of going unfilled, so the team can triage at the shift level.'
      ],
      badges: ['5 systems reconciled', '34.9-pt fill-failure gap', 'AUC 0.709', 'Leakage-safe model']
    },
    {
      repo: 'Waypoint-Property-and-Casualty-Retention-Analysis',
      title: 'Waypoint P&amp;C &mdash; Property &amp; Casualty Retention Analysis',
      industry: 'pc-insurance', metric: 'customer-experience', label: 'Churn &amp; Retention',
      featured: 0,
      summary: 'Predicts policyholder lapse risk across 60K synthetic auto and renters policies and quantifies an 8.8pp channel retention premium.',
      details: [
        'Analyzes 60,081 synthetic auto and renters insurance policies to answer three questions every personal lines carrier faces: who is likely to lapse before renewal, which channel produces the highest-quality customers, and where the cross-sell funnel is leaking premium.',
        'AQX-assisted policyholders renew at 81.8% versus 73.0% for non-AQX &mdash; an 8.8pp structural quality advantage confirmed across all eight acquisition cohorts. Billing distress predicts lapse at 1.6&times; the rate of clean billing histories, surfacing 60 or more days before the renewal window when intervention can still change the outcome.',
        'A gradient boosting lapse model with SHAP attribution, 7 Snowflake-compatible SQL queries, and a financial impact simulator are packaged in a 7-tab interactive dashboard for retention strategy and VP-level audiences.'
      ],
      badges: ['AUC 0.61', 'Top-decile lift 1.59&times;', '$5.4M cross-sell opportunity', '60K policies']
    },
    {
      repo: 'Telco-Churn-Retention-Playbook',
      title: 'Telecom Customer Churn &mdash; Cross-Industry Retention Playbook',
      industry: 'pc-insurance', metric: 'customer-experience', label: 'Churn &amp; Retention',
      featured: 0,
      summary: 'Churn model on 225K synthetic customers with $32.45M CLTV at risk, extended to auto insurance non-renewal.',
      details: [
        'Churn is expensive, and the customers most likely to leave rarely announce it. This project builds a predictive model on 225,000 synthetic customer records to identify who is at risk before they cancel, with $32.45M in customer lifetime value (CLTV) on the line across the at-risk population.',
        'The model correctly separates high-risk from low-risk customers 84% of the time, and focusing outreach on the top-scoring 10% produces 1.84 times more retained customers per contact compared to an untargeted approach. Model outputs are explained at the feature level so business stakeholders can see exactly which customer behaviors are driving attrition, rather than simply taking the model\'s word for it.',
        'The analytical framework is extended to auto insurance non-renewal, showing how the same retention logic applies across industries.'
      ],
      badges: ['AUC 0.84', 'Top-decile lift 1.84&times;', '$32.45M CLTV at risk', '225K rows']
    },
    {
      repo: 'trellis-enrollment-analytics',
      title: 'Trellis Health Plan Enrollment Analytics',
      industry: 'healthcare-insurance', metric: 'risk-quality', label: 'Rejection Risk',
      featured: 0,
      summary: 'Synthetic 834 EDI enrollment analytics for a multi-line health plan: SQL, a dashboard and a rejection-risk model.',
      details: [
        'Synthetic 834 EDI enrollment analytics for a multi-line health plan, covering Medicaid, Medicare and Marketplace lines. Includes SQL analysis, a dashboard and a rejection-risk model.'
      ],
      badges: ['834 EDI enrollment', 'Medicaid / Medicare / Marketplace', 'SQL + dashboard', 'Rejection-risk model']
    },
    {
      repo: 'concord-clinical-reporting-tracker',
      title: 'Concord Clinical Reporting Tracker',
      industry: 'customer-operations', metric: 'risk-quality', label: 'Reporting QA',
      featured: 0,
      summary: 'QA checkpoint and escalation-priority mode for a synthetic pharma media reporting pipeline that catches errors before they reach a client.',
      details: [
        'QA checkpoint and escalation-priority mode for a synthetic pharma media reporting pipeline. It catches reporting errors before they reach a client, with an 8.27&times; decile-1 risk concentration.'
      ],
      badges: ['8.27&times; decile-1 risk concentration', 'QA checkpoint', 'Escalation priority']
    },
    {
      repo: 'Call-Center-Scheduling-Conversion-Analytics',
      title: 'Call Center Scheduling &amp; Conversion Analytics',
      industry: 'customer-operations', metric: 'revenue-conversion', label: 'Funnel Conversion',
      featured: 0,
      summary: 'Identifies $109.6M in revenue tied to scheduled-but-not-converted appointments in a multi-region call center funnel.',
      details: [
        'Identifies $109.6M in revenue tied to scheduled-but-not-converted appointments in a multi-region call center funnel. Full analytics pipeline: synthetic data, SQL segmentation, logistic regression propensity model, Streamlit dashboard and Excel workbook.'
      ],
      badges: ['$109.6M opportunity', 'Logistic regression', 'Streamlit + Excel']
    },
    {
      repo: 'verano-chrt-workforce-intelligence',
      title: 'Verano Workforce Intelligence',
      industry: 'workforce-analytics', metric: 'risk-quality', label: 'SLA &amp; Attrition Risk',
      featured: 0,
      summary: 'Workforce analytics dashboard for a fictional shared-services HR center: capacity alignment, SLA breach prediction, forecasting and attrition risk.',
      details: [
        'Portfolio analytics dashboard for a fictional shared-services HR center. Demonstrates end-to-end workforce analytics: demand/capacity alignment, SLA breach prediction, FTE demand forecasting, and attrition risk scoring, built with Streamlit and statsmodels on 430K synthetically generated rows.'
      ],
      badges: ['430K rows', 'SLA breach prediction', 'FTE demand forecast', 'Attrition risk']
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
