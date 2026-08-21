import { LegalPage } from "@/components/LegalPage";
import { InternalLink } from "@/components/InternalLink";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import { SITE_CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Terms of Use";
const description =
  "The terms governing use of this website: what we provide, what we do not, acceptable use, and limitation of liability.";

export const metadata = pageMetadata({
  title,
  description,
  path: R.legalTerms,
  noIndex: true,
});

export default function TermsPage() {
  return (
    <LegalPage
      path={R.legalTerms}
      title={title}
      description={description}
      crumbName="Terms of use"
    >
      <p>
        These terms govern your use of {SITE_URL} (the &ldquo;Site&rdquo;),
        operated by {SITE_NAME}. By using the Site you accept them. If you do
        not, please do not use the Site.
      </p>

      <h2>What the Site provides</h2>
      <p>
        The Site is independent editorial documentation about Android
        applications published under the StreamFlix name. It provides
        specifications, install instructions, troubleshooting guidance, and
        comparative analysis.
      </p>
      <p>
        The Site is not affiliated with, endorsed by, or connected to any
        StreamFlix developer, any app store, or any streaming service. Product
        names and trademarks referenced belong to their respective owners and
        are used descriptively.
      </p>

      <h2>What the Site does not provide</h2>
      <ul>
        <li>
          We do not host, store, index, or distribute any film, television
          programme, or other media content.
        </li>
        <li>
          We do not operate any streaming service, provider, or content index.
        </li>
        <li>
          We do not distribute modified, patched, or repackaged applications.
          See <InternalLink intent="mod" currentPath={R.legalTerms} />.
        </li>
        <li>
          We do not provide legal advice. Our discussion of legal questions on{" "}
          <InternalLink intent="legalCheck" currentPath={R.legalTerms} /> is
          general information about how these systems work.
        </li>
      </ul>

      <h2>Accuracy and currency</h2>
      <p>
        We take reasonable care to verify specifications against the
        developers&rsquo; own distribution points and to test what we describe.
        Software changes frequently, and third-party services change without
        notice. Information may become outdated between reviews.
      </p>
      <p>
        Content is provided on an &ldquo;as is&rdquo; basis without warranty of
        accuracy, completeness, or fitness for a particular purpose. If you find
        an error, please report it to{" "}
        <a href={`mailto:${SITE_CONTACT_EMAIL}`}>{SITE_CONTACT_EMAIL}</a>.
      </p>

      <h2>Your responsibilities</h2>
      <p>
        Installing software outside an official app store is your decision and
        your responsibility. In particular, you are responsible for:
      </p>
      <ul>
        <li>
          Verifying any file before installing it. Our recommended checks are on{" "}
          <InternalLink intent="safe" currentPath={R.legalTerms} />.
        </li>
        <li>
          Complying with the laws that apply where you live, including copyright
          law.
        </li>
        <li>
          Whatever content you choose to access through any third-party
          application or provider.
        </li>
        <li>
          Any consequences to your device arising from installing third-party
          software.
        </li>
      </ul>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          Reproduce substantial portions of the Site&rsquo;s content elsewhere
          without attribution and permission.
        </li>
        <li>
          Attempt to gain unauthorised access to the Site or its infrastructure.
        </li>
        <li>
          Use automated systems to place unreasonable load on the Site.
        </li>
        <li>
          Misrepresent the Site as affiliated with any application developer.
        </li>
      </ul>

      <h2>Outbound links</h2>
      <p>
        The Site links to external destinations for verification and
        attribution. We do not control those destinations and are not
        responsible for their content, availability, or practices. All outbound
        links carry a <code>nofollow</code> attribute.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {SITE_NAME} is not liable for
        any direct, indirect, incidental, or consequential loss arising from use
        of the Site or reliance on its content, including loss of data, device
        damage, or any consequence of installing third-party software.
      </p>
      <p>
        Nothing in these terms excludes liability that cannot lawfully be
        excluded.
      </p>

      <h2>Availability</h2>
      <p>
        We do not guarantee uninterrupted availability. The Site may be
        unavailable for maintenance or for reasons beyond our control, and
        content may be modified or removed at any time.
      </p>

      <h2>Changes</h2>
      <p>
        These terms may be revised. Changes take effect when published, and the
        last-updated date above will reflect them.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms:{" "}
        <a href={`mailto:${SITE_CONTACT_EMAIL}`}>{SITE_CONTACT_EMAIL}</a>. For
        copyright matters, use the DMCA policy.
      </p>
    </LegalPage>
  );
}
