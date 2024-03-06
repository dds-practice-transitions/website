import type { MetaFunction } from "@remix-run/cloudflare";
import { UnderConstruction } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | DDS Practice Transitions" },
    {
      name: "description",
      content: "Your practice, our expertise, transparent results",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <UnderConstruction>
        <img
          src="/logo-stacked-color.png"
          alt="dds-practice-transitions-logo"
        />
        <h1
          style={{
            textAlign: "center",
          }}
        >
          <strong>We're Building!</strong>
        </h1>
        <p>
          We're in the process of building out our web presence. Check in
          periodically to see our progress! If you're really curious, sign up
          below to be the first to know when we go live!
        </p>
      </UnderConstruction>
    </div>
  );
}
