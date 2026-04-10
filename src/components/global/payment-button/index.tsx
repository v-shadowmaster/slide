'use client';

import { Button } from '@/components/ui/button';
import { useSubscription } from '@/hooks/use-subscription';
import { CreditCardIcon, Loader2 } from 'lucide-react';

export default function PaymentButton() {
  const { onSubscribe, isProcessing } = useSubscription();
  return (
    <Button
      disabled={isProcessing}
      onClick={onSubscribe}
      className="bg-gradient-to-r text-white rounded-full from-[#833AB4] via-[#E1306C] to-[#F77737] font-bold hover:opacity-90 transition-opacity"
    >
      {isProcessing ? <Loader2 className="animate-spin" /> : <CreditCardIcon />}
      Upgrade
    </Button>
  );
}
