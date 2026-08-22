import { LegalPage } from "@/components/LegalPage";
import { InternalLink } from "@/components/InternalLink";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import { SITE_CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Privacy Policy";
const description =
  "How this site handles visits, server logs, cookies and downloads. We do not require accounts and we do not sell personal data.";

export const metadata = pageMetadata({
  title,
  description,
  path: R.legalPrivacy,
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      path={R.legalPrivacy}
      title={title}
      description={description}
      crumbName="Privacy policy"
    >
      <p>
        {SITE_NAME} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;)
        operates {SITE_URL} (the &ldquo;Site&rdquo;). This policy explains what
        the Site collects, why, and what choices you have. It covers this
        website only. It does not describe the behaviour of the StreamFlix apps
        themselves, which is documented separately on{" "}
        <InternalLink intent="safe" currentPath={R.legalPrivacy} />.
      </p>

      <h2>What we collect</h2>
      <p>
        The Site has no accounts, no sign-in, no newsletter, and no comment
        system. There is no mechanism by which you can give us your name, email
        address, or payment details through this website, so we do not hold
        them.
      </p>
      <p>What is collected happens automatically at the server level:</p>
      <ul>
        <li>
          <strong>Server logs.</strong> Standard web request data: IP address,
          user agent, requested URL, referring page, timestamp, and response
          status. This is how any web server operates and is used for security,
          abuse prevention, and diagnosing errors.
        </li>
        <li>
          <strong>Aggregate analytics.</strong> Where enabled, page-level
          traffic counts. We are interested in which pages are read, not in who
          reads them.
        </li>
        <li>
          <strong>Download counts.</strong> Where a package is served from this
          Site, the request appears in server logs like any other file request.
        </li>
      </ul>

      <h2>What we do not do</h2>
      <ul>
        <li>We do not sell, rent, or trade personal data.</li>
        <li>We do not build advertising profiles of visitors.</li>
        <li>We do not require or offer accounts.</li>
        <li>We do not track what you watch. We have no way to observe that.</li>
        <li>
          We do not receive any data from the StreamFlix apps. They do not
          communicate with this Site.
        </li>
      </ul>

      <h2>Cookies</h2>
      <p>
        The Site does not set advertising or cross-site tracking cookies. Any
        cookies present are strictly functional, for example, remembering a
        preference you set. Your browser can block or clear cookies at any time,
        and the Site remains fully usable if you do.
      </p>

      <h2>Third parties</h2>
      <p>
        The Site links to external destinations, including developer
        repositories, app stores, and mirror sites. Following an outbound link
        takes you to a service with its own privacy practices, over which we
        have no control and for which we accept no responsibility. All outbound
        links on this Site carry a <code>nofollow</code> attribute.
      </p>
      <p>
        Hosting infrastructure processes requests on our behalf and may retain
        logs under its own retention policy.
      </p>

      <h2>Data retention</h2>
      <p>
        Server logs are retained only as long as needed for security and
        diagnostics, then discarded. Because we hold no accounts, there is no
        stored profile to retain, export, or delete once logs age out.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, or
        delete personal data held about you. Since we hold no accounts and no
        contact records, in practice there is generally nothing to act on. If
        you believe we hold data about you, write to{" "}
        <a href={`mailto:${SITE_CONTACT_EMAIL}`}>{SITE_CONTACT_EMAIL}</a> and we
        will respond.
      </p>

      <h2>Children</h2>
      <p>
        The Site is not directed at children and we do not knowingly collect
        data from them. The apps documented here carry their own content
        ratings, set by their developers.
      </p>

      <h2>Changes</h2>
      <p>
        Material changes to this policy will be reflected in the last-updated
        date above. Continued use of the Site after a change constitutes
        acceptance of the revised policy.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy:{" "}
        <a href={`mailto:${SITE_CONTACT_EMAIL}`}>{SITE_CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
