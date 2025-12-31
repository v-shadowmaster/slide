import Navbar from "@/components/global/navbar";
import Sidebar from "@/components/global/sidebar";
import { PrefetchUserAutomations, PrefetchUserProfile } from "@/react-query/prefetch";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>; // Only params is a Promise
};

export default async function Layout({ children, params }: Props) {
  const { slug } = await params

  const query = new QueryClient()

  await PrefetchUserProfile(query)

  await PrefetchUserAutomations(query)

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="p-3 min-h-screen">
        <Sidebar slug={slug} />


        <main className="lg:ml-[274px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">

          <Navbar slug={slug} />
          {children}
        </main>
      </div>
    </HydrationBoundary>
  )
}