import { getSiteOverview } from "@/features/site-overview/api/dashboardService";
import { SiteOverview } from "@/features/site-overview/ui/SiteOverview";

export default async function Home() {
  const overview = await getSiteOverview();

  return <SiteOverview overview={overview} />;
}
