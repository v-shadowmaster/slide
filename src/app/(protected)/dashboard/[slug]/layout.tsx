import Sidebar from "@/components/global/sidebar";


type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

export default function Layout({ children, params }: Props) {
  const { slug } = params; // params is a plain object

  return (
    <div className="min-h-screen">
      <Sidebar slug={slug} />
      <main className="ml-72 p-6"> {/* ml-72 to leave space for the fixed sidebar */}
        {children}
      </main>
    </div>
  );
}
