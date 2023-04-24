import Layout from "@src/components/Layout/index";
import {
  Section,
  SectionContent,
  SectionWrapper,
} from "@src/const/styles/pages/index";
import { Color } from "@src/const/styles/variables";
import CookiePolicy from "@src/markdown/cookie-policy.md";

export default function CookiePolicyPage() {
  return (
    <Layout pageTitle="Documentation">
      <SectionWrapper backgroundColor={Color.pink}>
        <Section>
          <SectionContent maxWidth={90}>{CookiePolicy({})}</SectionContent>
        </Section>
      </SectionWrapper>
    </Layout>
  );
}
