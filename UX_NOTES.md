# Conversion design notes

## Objective

Increase visitor-to-qualified-lead conversion from the assumed 10% baseline toward 20%. The redesigned prototype supports that hypothesis; it does not establish an uplift.

## Changes and rationale

- Put the visitor’s uncertainty at the centre of the hero. Explain what a conversation helps them do before asking for contact details.
- Keep one primary booking path. Repeat the action after the explanation and FAQs without introducing competing destinations.
- Use three explicit steps: needs, time, details. Preserve answers when visitors go back or change their time.
- Offer “Help me decide” as a first-class route. Avoid forcing visitors to know which insurance product they need.
- Keep email optional; require only name and phone for the sample call flow. Keep language preference optional and qualify availability.
- Show duration, price, topic and IST consistently. Make sample availability and prototype-only submission clear.
- Show field labels at all times, explain errors inline and focus the first invalid field. Use unselected contact consent rather than implying permission.
- Replace unverified social-proof claims with concrete explanations. Avoid guaranteed coverage, financial outcomes or fabricated urgency.
- Use shared theme tokens, stable selection-card dimensions, visible focus states and motion that respects reduced-motion preferences.

## Copy principles

Explain the next action, not just “confirm.” Distinguish choosing a time from completing a booking. Acknowledge uncertainty without fear-based selling. Say what happens to contact details. Never imply a real appointment or email was created by this prototype.

## Evaluation plan for a connected production flow

Compare the existing page and redesign with randomly assigned traffic, using completed valid lead submissions divided by unique eligible visitors as the primary metric. Track CTA starts, topic selection, schedule continuation, form completion and errors to locate abandonment. Monitor qualified-lead rate, duplicate/spam rate and attended consultations so increased submissions do not hide lower lead quality. Segment mobile and desktop results. Determine sample size and test duration from observed traffic and baseline before interpreting results.

Analytics and backend scheduling are not connected in this prototype. Production contact consent, availability, language support and brand claims need to match the implemented service.
