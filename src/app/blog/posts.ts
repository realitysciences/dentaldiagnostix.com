export type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string; // HTML string
};

export const posts: Post[] = [
  {
    slug: "why-patients-stop-coming-to-the-dentist",
    title: "Why Patients Stop Coming to the Dentist (It Is Rarely About Fear)",
    date: "April 28, 2026",
    readTime: "5 min read",
    excerpt:
      "Avoidance gets coded as dental phobia. But when you actually listen to what lapsed patients say, the pattern is almost never fear. It is shame — and the two require completely different responses from the chair.",
    body: `
<p>Ask a lapsed patient why they stopped coming and they will usually say something vague: busy, moved, lost insurance, just never got around to it. Dig a little and something else surfaces. A dentist said something. A hygienist made a comment. They left an appointment feeling like they had been lectured, and they did not come back.</p>

<p>We call this dental anxiety. We build systems around it — nitrous, weighted blankets, headphones. The accommodations are well-intentioned and occasionally useful. But most of the patients who stop coming are not afraid of the drill. They are afraid of being judged by the person holding it.</p>

<h2>Shame and fear look identical from the outside</h2>

<p>A patient who is afraid of pain will often say so. They will ask questions about anesthesia, grip the armrests, flinch at sounds. A patient who is avoiding out of shame will present differently: vague on why they have not been in, minimizing about what they know is wrong, braced for you to say something about the state of their mouth before you have even picked up an instrument.</p>

<p>The behavioral signal is not anxiety. It is preemptive defensiveness. They are waiting for the moment you confirm what they already believe about themselves — that they are a bad patient, that they let it get this far, that you are going to say so.</p>

<p>If you miss that, you will say something clinically neutral and they will hear it as confirmation. They will not reschedule.</p>

<h2>The comment that ends the relationship</h2>

<p>It almost never sounds harsh. It sounds like honesty. "Oh, it has been a while since we have seen you." "There is quite a bit of buildup here." "This has been going on for some time, hasn't it?" These are observations. The patient hears an indictment.</p>

<p>Shame is not rational and it does not respond to reassurance offered after the fact. Once the comment lands, the relational damage is done. A follow-up "but we can get this taken care of" does not undo it. The patient is already deciding whether to come back.</p>

<h2>What the intake can tell you that the chart cannot</h2>

<p>By the time a lapsed patient is in your chair, you have about thirty seconds before they have decided whether this appointment is going to be different from the one that drove them away. The clinical information — what needs to be done, how far things have progressed — is available in the chart and in the exam. What is not available is the relational context.</p>

<p>Why did they stop? Was it a single comment from a previous dentist, or a pattern of feeling dismissed? Are they here because they want to be, or because something hurt badly enough that they had no choice? Do they expect to be judged, and are they already braced for it before they sit down?</p>

<p>That information changes every word of your opening. Walking in without it means you are navigating without a map.</p>

<h2>The practical implication</h2>

<p>Shame-avoidant patients need one thing in the first appointment: confirmation that you are not going to say what the last dentist said. They are not asking for false positivity. They know the clinical picture is not ideal. They just need the opening of the appointment to be about them as a person, not about the state of their gum tissue.</p>

<p>You can do that — if you know that is what the appointment requires before you walk in.</p>
    `.trim(),
  },
  {
    slug: "what-dentists-say-that-ends-treatment-plans",
    title: "The One Thing Dentists Say That Ends Treatment Plans Before They Start",
    date: "May 2, 2026",
    readTime: "4 min read",
    excerpt:
      "It does not sound unkind. It sounds like an honest clinical observation. But there is a class of comment that reliably ends the treatment relationship — and most dentists have said it this week.",
    body: `
<p>Treatment acceptance rates in dentistry have been a persistent problem for as long as treatment has been tracked. The solutions proposed are almost always financial: better financing options, clearer explanations of cost, value framing, payment plans. These help at the margin.</p>

<p>But the cases that genuinely frustrate dentists — the patient who declined a full treatment plan that was clinically obvious, the patient who accepted and then disappeared before the second appointment — these are not usually financial failures. They are relational ones.</p>

<h2>The comment</h2>

<p>It usually happens in the first few minutes of the appointment, during the exam or right after. The dentist, looking at a situation that has clearly been developing for some time, makes an observation about how long this has been going on. "This has been neglected for a while." "You can see how this progressed." "This should have been addressed sooner."</p>

<p>The intention is clinical honesty. The patient hears something different: you are responsible for this, you should have come sooner, you let this happen.</p>

<p>That message — even when delivered without any conscious judgment — activates shame. And shame does not produce motivation. It produces avoidance. The patient nods, seems to follow along through the treatment presentation, and does not book the follow-up appointment.</p>

<h2>Why this is hard to see in real time</h2>

<p>Dentists are trained to read mouths, not facial expressions. The patient sitting in the chair during a treatment presentation looks attentive. They may ask a few questions. They take the printed treatment plan. Nothing in the appointment signals a problem.</p>

<p>The signal is the gap: the patient who was presented a multi-step plan and never schedules step two. Or the patient who accepts immediately and cancels twice before quietly disappearing from the schedule.</p>

<p>By then the comment that caused the rupture is long forgotten. It gets attributed to something else — finances, scheduling, the patient "just not being ready." The relational cause is invisible.</p>

<h2>What the research says about shame and compliance</h2>

<p>In behavioral psychology, shame and guilt produce opposite behavioral outcomes. Guilt — the feeling of "I did something wrong" — is correlated with motivation to repair. Shame — the feeling of "I am wrong" — is correlated with withdrawal and avoidance.</p>

<p>A patient who feels guilty about the gap in their dental care might be motivated to address it. A patient who feels shamed about it will find reasons not to return. The distinction is subtle but consistent, and it shows up reliably in lapsed patient patterns.</p>

<h2>The alternative is not optimism</h2>

<p>Avoiding this pattern does not mean pretending things are fine or softening clinical reality. It means separating the clinical assessment from the personal verdict. "Here is what we are looking at" is different from "here is how we got here." Patients can hear the first. They have trouble coming back after the second.</p>

<p>The opening of an appointment with a shame-avoidant patient is the whole appointment. How you handle the first sixty seconds determines whether the treatment plan you present will ever actually happen.</p>

<p>Knowing which patients need that handling before they arrive is the difference between walking in and walking in prepared.</p>
    `.trim(),
  },
  {
    slug: "treatment-resistance-is-not-a-patient-problem",
    title: "Treatment Resistance Is Not a Patient Problem",
    date: "May 6, 2026",
    readTime: "6 min read",
    excerpt:
      "When patients decline treatment, we tend to blame their priorities, their finances, or their avoidance. But resistance almost always traces back somewhere specific — and it is almost never random.",
    body: `
<p>Treatment resistance is one of the most frustrating experiences in clinical dentistry. You have presented the case clearly. The patient understands the clinical picture. The financing is workable. And still, the treatment does not happen. They delay, they cancel, they simply stop coming in.</p>

<p>The dominant framing in dental practice management treats this as a communication problem: better case presentation, value-based language, visual aids, financing conversations earlier in the process. These are useful tools. But they address the surface of a problem whose roots are usually elsewhere.</p>

<h2>Where resistance actually comes from</h2>

<p>In the behavioral framework we use at DentalDiagnostix, treatment resistance almost always traces back to one of three sources: a prior relational rupture with a dentist, an unresolved financial shame that makes accepting treatment feel like admitting defeat, or a fundamental distrust of clinical authority that predates the dental relationship entirely.</p>

<p>None of these are addressed by clearer case presentation. In fact, in some cases, more thorough presentation of the treatment need activates the resistance rather than reducing it. The patient who feels shamed about their situation will hear an extensive treatment plan as evidence of how far things have gone — and will associate acceptance of that plan with accepting the judgment embedded in it.</p>

<h2>The prior dentist problem</h2>

<p>When we analyze intake responses from patients who show high resistance signals, the most common pattern is a specific negative experience with a previous dentist that was never resolved. Not necessarily dramatic — often just a comment that landed wrong, a feeling of being dismissed or rushed, an appointment that ended with the patient feeling worse about themselves than when they arrived.</p>

<p>That experience creates a template. The current dentist inherits it. The patient is not resisting you specifically — they are resisting what they expect you to confirm about them. And they will find that confirmation in ordinary clinical statements that you would not think twice about.</p>

<h2>What financial resistance looks like versus financial reality</h2>

<p>Cost is the stated reason for declining treatment more often than it is the real one. This is not a cynical observation — it is a consistent pattern. Patients who decline treatment due to genuine financial constraints behave differently than patients who decline due to relational or shame-based resistance.</p>

<p>Genuinely cost-limited patients will usually ask about phasing, ask about what is most urgent, ask about payment options. They are engaged with the problem of how to make this work. Patients who are resistance-driven will often decline before the cost conversation even gets specific. They will agree that it needs to happen "eventually" and then not reschedule.</p>

<p>Treating these two patients the same way — with financing options and payment plans — works for the first group and does nothing for the second.</p>

<h2>The information that changes the appointment</h2>

<p>A dentist who walks in knowing that a patient has a specific prior negative experience, a compliance risk profile, and a pattern of agreeing to treatment and then not following through — that dentist handles the appointment differently. Not by softening the clinical picture, but by addressing the relational layer first.</p>

<p>Resistance drops significantly when patients feel that the dentist is not going to repeat whatever experience drove them away before. That requires knowing what drove them away before.</p>

<p>You cannot get that from the chart. You cannot get it from the medical history form. You can get it from a behavioral intake that asks the right questions before the appointment — and delivers the answer to the chair before the patient arrives.</p>

<h2>The reframe</h2>

<p>Patients who resist treatment are not prioritizing incorrectly. They are protecting themselves from something that happened in a dental setting before, or something they expect to happen in this one. Understanding what that is — not in the abstract, but specifically, for this patient, before this appointment — is the beginning of treatment acceptance that actually sticks.</p>
    `.trim(),
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
