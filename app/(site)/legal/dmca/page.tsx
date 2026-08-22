import { LegalPage } from "@/components/LegalPage";
import { InternalLink } from "@/components/InternalLink";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import { SITE_CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

const title = "DMCA and Copyright Policy";
const description =
  "How to submit a copyright notice, what we need in one, how we respond, and the counter-notice process. We host no media content.";

export const metadata = pageMetadata({
  title,
  description,
  path: R.legalDmca,
  noIndex: true,
});

export default function DmcaPage() {
  return (
    <LegalPage
      path={R.legalDmca}
      title={title}
      description={description}
      crumbName="DMCA and copyright"
    >
      <p>
        {SITE_NAME} respects copyright and responds to properly submitted
        notices. This page explains what this site publishes, what it does not,
        and how to raise a concern.
      </p>

      <h2>What this site publishes</h2>
      <p>
        Original editorial writing about Android applications: specifications,
        install instructions, troubleshooting guidance, and comparative
        analysis. Alongside that, we publish application screenshots used
        descriptively to illustrate the software being documented.
      </p>
      <p>
        <strong>We host no film, television, or other media content.</strong> We
        operate no streaming service, no content index, and no provider. There
        is no library here to take down, because none exists.
      </p>
      <p>
        The applications we document are described by their own developers as
        aggregators that host nothing and surface streams from third-party
        providers. We have no relationship with those providers and no ability
        to remove anything from them. Notices about material carried by a
        provider must go to that provider or its host: we cannot act on them,
        and forwarding one to us delays rather than advances the matter. See{" "}
        <InternalLink intent="legalCheck" currentPath={R.legalDmca} />.
      </p>

      <h2>Application packages</h2>
      <p>
        Where an application package is served from this site, it is the
        developer&rsquo;s own unmodified build, published to make available what
        we tested. We do not host modified, patched, or repackaged builds. See{" "}
        <InternalLink intent="mod" currentPath={R.legalDmca} />.
      </p>
      <p>
        If you are a rights holder in an application distributed here and want
        it removed, contact us using the process below and we will act.
      </p>

      <h2>Submitting a notice</h2>
      <p>
        Send notices to{" "}
        <a href={`mailto:${SITE_CONTACT_EMAIL}`}>{SITE_CONTACT_EMAIL}</a> with
        the subject line &ldquo;DMCA Notice&rdquo;. To let us act promptly,
        please include:
      </p>
      <ol>
        <li>
          A physical or electronic signature of the copyright owner, or a person
          authorised to act on their behalf.
        </li>
        <li>
          Identification of the copyrighted work you claim has been infringed.
        </li>
        <li>
          The specific URL or URLs on this site where the material appears, and
          enough detail for us to locate it. A notice naming only a domain
          cannot be acted on.
        </li>
        <li>Your name, address, telephone number, and email address.</li>
        <li>
          A statement that you have a good-faith belief the use is not
          authorised by the copyright owner, its agent, or the law.
        </li>
        <li>
          A statement that the information in the notice is accurate and, under
          penalty of perjury, that you are authorised to act on the
          owner&rsquo;s behalf.
        </li>
      </ol>

      <h2>How we respond</h2>
      <ul>
        <li>
          We aim to acknowledge complete notices within a few business days.
        </li>
        <li>
          Where a notice is valid and relates to material we control, we remove
          or disable access to it promptly.
        </li>
        <li>
          Where a notice relates to material we do not control: content carried
          by a third-party provider, for example. We will say so and, where we
          can, indicate where it should be directed.
        </li>
        <li>
          We keep a record of notices received and actions taken.
        </li>
      </ul>

      <h2>Counter-notice</h2>
      <p>
        If material of yours was removed and you believe that was a mistake or
        misidentification, you may submit a counter-notice to the same address
        including:
      </p>
      <ol>
        <li>Your signature.</li>
        <li>
          Identification of the removed material and where it appeared before
          removal.
        </li>
        <li>
          A statement under penalty of perjury that you have a good-faith belief
          it was removed as a result of mistake or misidentification.
        </li>
        <li>
          Your name, address, telephone number, and consent to the jurisdiction
          of an appropriate court.
        </li>
      </ol>

      <h2>Repeat infringers</h2>
      <p>
        We do not host user-generated content and have no accounts, so there is
        no user base to terminate. We nonetheless maintain a policy of ceasing
        to publish material that is the subject of repeated valid notices.
      </p>

      <h2>Bad-faith notices</h2>
      <p>
        Submitting a notice you know to be false may carry liability under
        applicable law, including for damages and costs. We review notices
        before acting rather than removing material automatically.
      </p>

      <h2>Contact</h2>
      <p>
        Copyright matters:{" "}
        <a href={`mailto:${SITE_CONTACT_EMAIL}`}>{SITE_CONTACT_EMAIL}</a>. For
        anything else, see our terms of use and disclaimer.
      </p>
    </LegalPage>
  );
}
