import { onOAuthInstagram } from '@/actions/integrations';
import { onUserInfo } from '@/actions/user';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  strategy: 'INSTAGRAM' | 'CRM';
};

export default function IntegrationCard({
  title,
  description,
  icon,
  strategy,
}: Props) {
  const onInstaOAuth = () => onOAuthInstagram(strategy);

  const { data } = useQuery({
    queryKey: ['user-profile'],
    queryFn: onUserInfo,
  });

  const integrated = data?.data?.integrations.find(
    (integration) => integration.name === strategy
  );
  return (
    <div className="border border-border rounded-xl gap-x-5 p-5 flex items-center justify-between bg-card">
      <span className="text-foreground">{icon}</span>
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-medium text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm w-full md:w-10/12 xl:w-8/12 2xl:w-6/12">
          {description}
        </p>
      </div>
      <Button
        onClick={onInstaOAuth}
        disabled={integrated?.name === strategy}
        className="bg-ig-blue hover:bg-ig-blue-hover text-white rounded-full text-sm font-medium px-6 transition-opacity"
      >
        {/* {integrated ? "Connected" : "Connect"} */}
        Connect
      </Button>
    </div>
  );
}
