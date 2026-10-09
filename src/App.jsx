import { useEffect, useState } from "react"
import {
  indiaDate,
  nextDate,
  clockLabel,
  bookingLabel,
  availableSlots,
  firstBooking,
  downloadCalendar,
} from "./booking.js"

const options = [
  [
    "Health Insurance",
    "Understand cover for hospital bills and medical expenses.",
  ],
  [
    "Term Insurance",
    "Explore financial protection for the people who depend on you.",
  ],
  ["I need both", "Look at health and term cover together."],
  [
    "I’m not sure",
    "Start with your priorities. We’ll help you find a direction.",
  ],
]
const emptyDetails = {
  name: "",
  email: "",
  phone: "",
  language: "No preference",
  consent: false,
}
function Icon({ name, ...props }) {
  const paths = {
    sun: "M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
    moon: "M20 15.1A8.5 8.5 0 0 1 8.9 4 8.5 8.5 0 1 0 20 15.1Z",
    shield: "m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Zm-4 9 3 3 5-5",
    arrow: "M5 12h14m-5-5 5 5-5 5",
    arrowLeft: "M19 12H5m7 7-7-7 7-7",
    check: "m5 12 4 4L19 6",
    heart: "M20 5c-3-3-6-1-8 1-2-2-5-4-8-1-5 5 8 15 8 15S25 10 20 5Z",
    clock: "M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0",
  }
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name] || paths.shield} />
    </svg>
  )
}
function Header({ onBack, theme, onTheme }) {
  return (
    <header className="app-header">
      {onBack && (
        <button className="header-edit" onClick={onBack} type="button">
          <Icon name="arrowLeft" />
          Back
        </button>
      )}
      <img className="wordmark" src="/ditto-logo-hd.svg" alt="Ditto" />
      <button
        className="theme-toggle"
        type="button"
        onClick={onTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <Icon name={theme === "dark" ? "sun" : "moon"} />
        <span>{theme === "dark" ? "Light" : "Dark"}</span>
      </button>
    </header>
  )
}
function Progress({ step }) {
  return (
    <div className="step-progress">
      <div className="step-label">
        <span>{step < 4 ? `Step ${step} of 3` : "All done"}</span>
        <span>
          {
            ["", "Your needs", "Your time", "Your details", "Your summary"][
              step
            ]
          }
        </span>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Booking progress"
        aria-valuemin={0}
        aria-valuemax={3}
        aria-valuenow={Math.min(step, 3)}
      >
        <span style={{ width: `${(Math.min(step, 3) / 3) * 100}%` }} />
      </div>
    </div>
  )
}
function Button({ children, ...props }) {
  return (
    <button type="button" className="primary-button" {...props}>
      {children}
    </button>
  )
}
function Welcome({ onStart }) {
  return (
    <>
      <main className="welcome-main">
        <section className="hero">
          <div className="eyebrow">
            <span className="status-dot" /> A little clarity. A lot more
            confidence.
          </div>
          <h1 tabIndex={-1}>
            Insurance is personal.
            <br />
            <span>Let’s make it simple.</span>
          </h1>
          <p className="lead">
            Not sure which cover you need? Talk it through with a Ditto advisor.
            Understand your options, ask every question, and decide at your own
            pace.
          </p>
          <div className="badges">
            <span>
              <Icon name="clock" />
              30-minute call
            </span>
            <span>
              <Icon name="check" />
              Free advice
            </span>
            <span>
              <Icon name="shield" />
              No pressure to buy
            </span>
          </div>
          <div className="hero-cta">
            <Button onClick={onStart}>
              Find my insurance fit <Icon name="arrow" />
            </Button>
            <p className="microcopy">
              Choose a topic. Pick a time. You’re in control.
            </p>
          </div>
        </section>
        <section className="advice-panel" aria-label="What we can help with">
          <div className="panel-icon">
            <Icon name="heart" width="30" height="30" />
          </div>
          <p className="eyebrow">MORE UNDERSTANDING. LESS GUESSWORK.</p>
          <h2>A conversation before a commitment.</h2>
          <ul>
            <li>
              <Icon name="check" />
              <span>Make sense of health and term insurance</span>
            </li>
            <li>
              <Icon name="check" />
              <span>Understand costs, cover and exclusions</span>
            </li>
            <li>
              <Icon name="check" />
              <span>Leave with clearer next steps</span>
            </li>
          </ul>
          <div className="panel-footer">
            <Icon name="shield" />
            <span>You don’t need to choose a policy today.</span>
          </div>
        </section>
        <section className="how-it-works">
          <p className="eyebrow">YOUR NEXT STEP, MADE EASY</p>
          <h2>From “where do I start?” to a clear plan.</h2>
          <div className="process-grid">
            {[
              [
                "Tell us what’s on your mind",
                "Health, term, both—or help figuring it out.",
              ],
              [
                "Choose your time",
                "A 30-minute conversation that fits your day.",
              ],
              [
                "Talk it through",
                "Bring your questions. Take your time deciding.",
              ],
            ].map(([title, text], i) => (
              <div className="process-item" key={title}>
                <span className="number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="faq">
          <p className="eyebrow">BEFORE WE TALK</p>
          <h2>A few things you might be wondering.</h2>
          {[
            [
              "Do I need to buy a policy on the call?",
              "No. The conversation helps you understand your options. Whether and when you buy is your decision.",
            ],
            [
              "Can I discuss an existing policy?",
              "Yes. Bring your policy details and the questions you’d like to work through. You don’t need to upload documents to book.",
            ],
            [
              "What if I don’t know what cover I need?",
              "That’s a good place to start. Choose ‘Help me decide’ and discuss your priorities with an advisor.",
            ],
            [
              "What happens when I book here?",
              "This is an interactive prototype. You can try the booking flow and download a sample calendar event. No details are submitted, and no advisor call is scheduled.",
            ],
          ].map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </section>
      </main>
      <div className="welcome-actions">
        <div>
          <strong>A clearer choice starts with a conversation.</strong>
          <p>Free advice. Your pace. Your decision.</p>
        </div>
        <Button onClick={onStart}>
          Book my free call <Icon name="arrow" />
        </Button>
      </div>
      <footer className="site-footer">
        Interactive concept · Sample availability · No personal details are
        submitted
      </footer>
    </>
  )
}
function Choice({ onChoose }) {
  return (
    <main className="flow-main">
      <Progress step={1} />
      <section className="intro">
        <h1 tabIndex={-1}>What do you need help with?</h1>
        <p className="lead">
          There’s no wrong starting point. Choose a topic for your conversation.
        </p>
      </section>
      <div className="choice-list">
        {options.map(([title, description]) => (
          <button
            className="choice-card"
            key={title}
            onClick={() => onChoose(title)}
          >
            <span className="choice-icon">
              <Icon name={title === "Health Insurance" ? "heart" : "shield"} />
            </span>
            <strong>
              {title === "I’m not sure"
                ? "Help me decide"
                : title === "I need both"
                  ? "Health + term"
                  : title}
            </strong>
            <span>{description}</span>
            <Icon name="arrow" className="choice-arrow" />
          </button>
        ))}
      </div>
    </main>
  )
}
function Schedule({ choice, booking, onChange, custom, onCustom, onNext }) {
  const [error, setError] = useState("")
  const earliest = firstBooking()
  const tomorrow = { date: nextDate(indiaDate(), 1), minutes: 600 }
  const quickOptions = [earliest]
  if (earliest.date !== tomorrow.date || earliest.minutes !== tomorrow.minutes)
    quickOptions.push(tomorrow)
  const topic =
    choice === "I need both"
      ? "health and term insurance"
      : choice === "I’m not sure"
        ? "your insurance needs"
        : choice.toLowerCase()
  function confirm() {
    if (availableSlots(booking.date).includes(booking.minutes)) onNext()
    else {
      onCustom(true)
      setError("That time has passed. Choose another time to continue.")
    }
  }
  function changeDate(event) {
    const date = event.target.value
    if (date >= indiaDate() && date <= nextDate(indiaDate(), 30)) {
      onChange({ date, minutes: availableSlots(date)[0] ?? -1 })
      setError("")
    }
  }
  return (
    <>
      <main className="flow-main">
        <Progress step={2} />
        <section className="intro">
          <h1 tabIndex={-1}>Let’s find your moment.</h1>
          <p className="lead">
            A free 30-minute call about {topic}. All times are in India Standard
            Time (IST). These are sample slots for this prototype.
          </p>
        </section>
        <div className="schedule-list">
          {quickOptions.map((option, index) => {
            const selected =
              !custom &&
              booking.date === option.date &&
              booking.minutes === option.minutes
            return (
              <button
                key={bookingLabel(option)}
                aria-pressed={selected}
                className={`schedule-card ${selected ? "selected" : ""}`}
                onClick={() => {
                  onChange(option)
                  onCustom(false)
                  setError("")
                }}
              >
                <span>
                  <small>
                    {index === 0
                      ? "Earliest available"
                      : "A fresh start tomorrow"}
                  </small>
                  <strong>{bookingLabel(option)}</strong>
                </span>
                {selected && <Icon name="check" />}
              </button>
            )
          })}
          <button
            className={`schedule-card ${custom ? "selected" : ""}`}
            aria-pressed={custom}
            onClick={() => onCustom(true)}
          >
            <strong>See more dates & times</strong>
            <Icon name="arrow" />
          </button>
        </div>
        {custom && (
          <section className="time-picker" aria-label="Choose date and time">
            <label htmlFor="booking-date">Choose a date</label>
            <input
              id="booking-date"
              type="date"
              min={indiaDate()}
              max={nextDate(indiaDate(), 30)}
              value={booking.date}
              onInput={changeDate}
              onChange={changeDate}
            />
            <p>Available start times · IST</p>
            <div className="time-grid">
              {availableSlots(booking.date).map((minutes) => (
                <button
                  key={minutes}
                  aria-pressed={booking.minutes === minutes}
                  className={booking.minutes === minutes ? "active" : ""}
                  onClick={() => {
                    onChange({ ...booking, minutes })
                    setError("")
                  }}
                >
                  {clockLabel(minutes)}
                </button>
              ))}
            </div>
            {!availableSlots(booking.date).length && (
              <p role="status">No times left on this date. Try another day.</p>
            )}
          </section>
        )}
        <p className="schedule-note">
          Selected:{" "}
          {booking.minutes >= 0
            ? bookingLabel(booking)
            : "Choose an available time"}
        </p>
        {error && (
          <p className="field-error" role="alert">
            {error}
          </p>
        )}
      </main>
      <div className="sticky-actions">
        <Button onClick={confirm}>
          Continue with this time <Icon name="arrow" />
        </Button>
        <p className="microcopy">
          One step left: how your advisor can reach you.
        </p>
      </div>
    </>
  )
}
function Details({ details, onChange, booking, onEdit, onSubmit, choice }) {
  const [attempted, setAttempted] = useState(false)
  const errors = {
    name:
      details.name.trim().length < 2
        ? "Enter your name (at least 2 characters)."
        : "",
    email:
      !details.email.trim() || /^\S+@\S+\.\S+$/.test(details.email.trim())
        ? ""
        : "Enter a valid email address.",
    phone: /^(?:\+91)?[6-9]\d{9}$/.test(details.phone.replace(/[\s-]/g, ""))
      ? ""
      : "Enter a 10-digit Indian mobile number, optionally with +91.",
    consent: details.consent
      ? ""
      : "Please confirm that we can contact you about this consultation.",
  }
  return (
    <main className="flow-main details-main">
      <Progress step={3} />
      <h1 tabIndex={-1} className="details-title">
        Where can we reach you?
      </h1>
      <div className="summary-card">
        <div>
          <small>
            {choice === "I need both"
              ? "Health + term"
              : choice === "I’m not sure"
                ? "Help me decide"
                : choice}{" "}
            · 30 minutes · Free
          </small>
          <strong>{bookingLabel(booking)} IST</strong>
        </div>
        <button type="button" onClick={onEdit}>
          Change
        </button>
      </div>
      <form
        className="details-form"
        noValidate
        onSubmit={(event) => {
          event.preventDefault()
          setAttempted(true)
          if (!Object.values(errors).some(Boolean)) onSubmit()
          else
            requestAnimationFrame(() =>
              document.querySelector('[aria-invalid="true"]')?.focus(),
            )
        }}
      >
        <p className="lead">
          Just the essentials for your call. No policy documents needed.
        </p>
        {[
          { key: "name", label: "Name", type: "text", complete: "name" },
          { key: "phone", label: "Phone number", type: "tel", complete: "tel" },
          {
            key: "email",
            label: "Email (optional)",
            type: "email",
            complete: "email",
          },
        ].map((field) => (
          <div key={field.key}>
            <label className={attempted && errors[field.key] ? "invalid" : ""}>
              <span>
                {field.label}
                {field.key !== "email" && " *"}
              </span>
              <input
                required={field.key !== "email"}
                aria-label={field.label}
                aria-invalid={attempted && !!errors[field.key]}
                aria-describedby={
                  attempted && errors[field.key]
                    ? `${field.key}-error`
                    : undefined
                }
                type={field.type}
                autoComplete={field.complete}
                placeholder={
                  field.key === "name"
                    ? "Your name"
                    : field.key === "phone"
                      ? "e.g. 98765 43210"
                      : "you@example.com"
                }
                value={details[field.key]}
                onChange={(event) =>
                  onChange({ ...details, [field.key]: event.target.value })
                }
              />
            </label>
            {attempted && errors[field.key] && (
              <p id={`${field.key}-error`} className="field-error" role="alert">
                {errors[field.key]}
              </p>
            )}
          </div>
        ))}
        <div className="language-field">
          <label htmlFor="language">
            Preferred language <span>(optional)</span>
          </label>
          <select
            id="language"
            value={details.language}
            onChange={(event) =>
              onChange({ ...details, language: event.target.value })
            }
          >
            {[
              "No preference",
              "English",
              "Hindi",
              "Marathi",
              "Tamil",
              "Telugu",
              "Kannada",
              "Malayalam",
              "Bengali",
              "Gujarati",
            ].map((language) => (
              <option key={language}>{language}</option>
            ))}
          </select>
          <p className="field-hint">
            We’ll note your preference. Advisor availability may vary.
          </p>
        </div>
        <div className="privacy-note">
          <Icon name="shield" />
          <span>
            Your details are for this consultation, not a marketing sign-up. In
            this prototype, nothing is submitted.
          </span>
        </div>
        <label className="consent-label">
          <input
            type="checkbox"
            checked={details.consent}
            aria-invalid={attempted && !!errors.consent}
            aria-describedby={
              attempted && errors.consent ? "consent-error" : undefined
            }
            onChange={(event) =>
              onChange({ ...details, consent: event.target.checked })
            }
          />
          <span>I agree to be contacted about this consultation.</span>
        </label>
        {attempted && errors.consent && (
          <p id="consent-error" className="field-error" role="alert">
            {errors.consent}
          </p>
        )}
        <div className="form-action">
          <Button type="submit">
            Book my free call <Icon name="arrow" />
          </Button>
          <p className="microcopy">
            Try the booking flow. No call will be scheduled.
          </p>
        </div>
      </form>
    </main>
  )
}
function Confirmation({ choice, booking, details, onRestart, onEdit }) {
  const topic =
    choice === "I need both"
      ? "Health & Term Insurance"
      : choice === "I’m not sure"
        ? "Insurance advice"
        : choice
  return (
    <main className="flow-main confirmation-main">
      <Progress step={4} />
      <div className="success-check">
        <Icon name="check" width="36" height="36" />
      </div>
      <h1 tabIndex={-1}>You’re ready for a clearer conversation.</h1>
      <p className="lead">
        Thanks, {details.name.trim().split(/\s+/)[0]}. Here’s your sample
        consultation summary.
      </p>
      <div className="booking-card">
        <strong>{topic}</strong>
        <div>
          {bookingLabel(booking)} – {clockLabel(booking.minutes + 30)} IST
        </div>
        <p>
          A free 30-minute consultation to discuss your insurance needs with a
          Ditto advisor.
        </p>
        <div className="confirmation-contact">
          <span>Phone: {details.phone}</span>
          {details.email.trim() && <span>Email: {details.email}</span>}
          <span>Language: {details.language}</span>
        </div>
      </div>
      <div className="thank-you">
        <p>This is a prototype booking. No call or email has been scheduled.</p>
      </div>
      <div className="confirmation-actions">
        <button onClick={() => downloadCalendar(booking)}>
          Save sample to calendar
        </button>
        <button className="secondary-button" onClick={onEdit}>
          Change my time
        </button>
        <button className="text-button" onClick={onRestart}>
          Back to home
        </button>
      </div>
    </main>
  )
}
export default function App() {
  const [step, setStep] = useState(0)
  const [choice, setChoice] = useState("Health Insurance")
  const [booking, setBooking] = useState(firstBooking)
  const [custom, setCustom] = useState(false)
  const [details, setDetails] = useState(emptyDetails)
  const [theme, setTheme] = useState(() => {
    try {
      return (
        localStorage.getItem("ditto-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
      )
    } catch {
      return "light"
    }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem("ditto-theme", theme)
    } catch {}
  }, [theme])
  useEffect(() => {
    window.scrollTo(0, 0)
    document.querySelector("h1")?.focus()
  }, [step])
  function restart() {
    setStep(0)
    setChoice("Health Insurance")
    setBooking(firstBooking())
    setCustom(false)
    setDetails(emptyDetails)
  }
  return (
    <div className="app-shell">
      <div className="transition-stage" key={step}>
        <div className="screen">
          <Header
            theme={theme}
            onTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
            onBack={step > 0 ? () => setStep(step - 1) : undefined}
          />
          {step === 0 && <Welcome onStart={() => setStep(1)} />}
          {step === 1 && (
            <Choice
              onChoose={(value) => {
                setChoice(value)
                setStep(2)
              }}
            />
          )}
          {step === 2 && (
            <Schedule
              choice={choice}
              booking={booking}
              onChange={setBooking}
              custom={custom}
              onCustom={setCustom}
              onNext={() => setStep(3)}
            />
          )}
          {step === 3 && (
            <Details
              details={details}
              choice={choice}
              onChange={setDetails}
              booking={booking}
              onEdit={() => setStep(2)}
              onSubmit={() => setStep(4)}
            />
          )}
          {step === 4 && (
            <Confirmation
              choice={choice}
              booking={booking}
              details={details}
              onRestart={restart}
              onEdit={() => setStep(2)}
            />
          )}
        </div>
      </div>
    </div>
  )
}
