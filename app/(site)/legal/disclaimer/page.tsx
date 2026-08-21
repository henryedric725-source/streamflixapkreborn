import { LegalPage } from "@/components/LegalPage";
import { InternalLink } from "@/components/InternalLink";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import { SITE_CONTACT_EMAIL, SITE_NAME } from "@/lib/site";
import { REBORN, V2 } from "@/lib/variants";

const title = "Disclaimer";
const description =
  "What this site is and is not: no affiliation with any StreamFlix developer, no content hosted, no legal advice given, and no warranty on third-party software.";

export const metadata = pageMetadata({
  title,
  description,
  path: R.legalDisclaimer,
  noIndex: true,
});

export default function DisclaimerPage() {
  return (
    <LegalPage
      path={R.legalDisclaimer}
      title={title}
      description={description}
      crumbName="Disclaimer"
    >
      <h2>No affiliation</h2>
      <p>
        {SITE_NAME} is an independent documentation site. We are not affiliated
        with, authorised by, endorsed by, or connected to:
      </p>
      <ul>
        <li>
          The {REBORN.name} project or its contributors (
          <code>{REBORN.packageName}</code>)
        </li>
        <li>
          The developer of {V2.name} (<code>{V2.packageName}</code>)
        </li>
        <li>Google, Amazon, Apple, or any app store operator</li>
        <li>
          Any third-party streaming provider, index, or content source
        </li>
        <li>Netflix or any other streaming service referenced comparatively</li>
      </ul>
      <p>
        All product names, logos, and trademarks are the property of their
        respective owners and are used here descriptively, to identify the
        software being documented.
      </p>

      <h2>We host no content</h2>
      <p>
        This site does not host, store, index, stream, or distribute any film,
        television programme, or other copyrighted media. We publish editorial
        documentation about software.
      </p>
      <p>
        The applications documented here are described by their own developers
        as aggregators that do not host content, and that surface streams from
        third-party providers. We have no relationship with, and no control
        over, those providers or what they carry. See{" "}
        <InternalLink intent="legalCheck" currentPath={R.legalDisclaimer} />.
      </p>

      <h2>Third-party software</h2>
      <p>
        Applications documented here are developed and distributed by
        independent third parties. We do not develop, control, or warrant them.
        Specifically:
      </p>
      <ul>
        <li>
          We make no warranty that any application will function, remain
          available, or be free of defects.
        </li>
        <li>
          We cannot guarantee that a file obtained elsewhere is the
          developer&rsquo;s genuine build. Verification steps are on{" "}
          <InternalLink intent="safe" currentPath={R.legalDisclaimer} />.
        </li>
        <li>
          Installing software from outside an official store carries risk. That
          decision, and its consequences for your device, are yours.
        </li>
        <li>
          Applications may be withdrawn or taken down at any time. This has
          already happened once to the original StreamFlix.
        </li>
      </ul>

      <h2>No legal advice</h2>
      <p>
        Discussion of copyright, streaming law, and the DMCA on this site is
        general information about how these systems operate. It is not legal
        advice, it does not create any professional relationship, and it cannot
        account for the law where you live or your particular circumstances.
      </p>
      <p>
        Laws governing streaming differ substantially between jurisdictions. If
        the question matters to your situation, consult a qualified lawyer in
        your own.
      </p>

      <h2>Accuracy</h2>
      <p>
        We verify specifications against developers&rsquo; own distribution
        points and install every build we describe. Software changes
        frequently, so figures may be superseded between reviews. Content is
        provided without warranty of accuracy or completeness.
      </p>
      <p>
        Corrections are welcome at{" "}
        <a href={`mailto:${SITE_CONTACT_EMAIL}`}>{SITE_CONTACT_EMAIL}</a>.
      </p>

      <h2>Your responsibility</h2>
      <p>
        You are responsible for complying with the laws that apply to you, for
        verifying anything you install, and for what you choose to access
        through third-party software. We document how these applications work;
        we do not and cannot supervise how they are used.
      </p>

      <h2>Copyright holders</h2>
      <p>
        If you hold rights in material and believe this site infringes them, our
        DMCA policy sets out how to submit a notice and how we respond. We act
        on properly submitted notices.
      </p>
    </LegalPage>
  );
}
