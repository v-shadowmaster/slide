import { Button } from '@/components/ui/button';

import { Loader2, Zap } from 'lucide-react';
import { useQueryAutomation } from '@/hooks/use-query';
import { useMutationData } from '@/hooks/use-mutation-data';
import { activateAutomation } from '@/actions/automations';

type Props = {
  id: string;
};

export function ActivateAutomationButton({ id }: Props) {
  const { data } = useQueryAutomation(id);
  const { mutate, isPending } = useMutationData(
    ['activate'],
    (data: { state: boolean }) => activateAutomation(id, data.state),
    'automation-info'
  );
  return (
    <Button
      disabled={isPending}
      className="lg:px-10 bg-ig-blue hover:bg-ig-blue-hover text-white rounded-full font-medium mx-4"
      onClick={() => mutate({ state: !data?.data?.active })}
    >
      {isPending ? <Loader2 className="animate-spin" /> : <Zap />}

      <p className="lg:inline hidden">
        {data?.data?.active ? 'Disable' : 'Activate'}
      </p>
    </Button>
  );
}
