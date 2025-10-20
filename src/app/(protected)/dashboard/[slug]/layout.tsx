import Sidebar from "@/components/global/sidebar";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>; // Only params is a Promise
};

export default async function Layout({ children, params }: Props) {
  const { slug } = await params; // await the params promise

  return (
    <div className="min-h-screen">
      <Sidebar slug={slug} />
      <main className="ml-72 p-6"> {/* ml-72 to leave space for the fixed sidebar */}
        {children}
      </main>
    </div>
  );
}