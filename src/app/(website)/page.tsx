import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Page (){
    return (
         <div className="flex item-center justify-center flex-direction-col">
        <div>
          <div className="flex items-center flex-col text-center relative">
            <h1 className="mt-24 font-semibold text-center text-5xl mb-4 text-foreground">
              Simple, transparent pricing
            </h1>
            <p className="text-md text-muted-foreground mb-12 max-w-2xl">
              Choose the plan that's right for you and start your 14-day trial
              today.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mt-8">
              {/* Starter Plan */}
              <div className="flex flex-col p-8 border border-border bg-card rounded-xl">
                <h2 className="text-xl font-semibold mb-2 text-left text-foreground">Starter</h2>
                <div className="mt-4 flex items-baseline">
                  <span className="text-[40px] font-medium tracking-tight text-foreground">
                    $29
                  </span>
                  <span className="ml-1 text-2xl font-medium text-foreground">/mo</span>
                  <span className="ml-2 text-sm text-muted-foreground">
                    Excl. VAT
                  </span>
                </div>
                <p className="mt-4 text-muted-foreground text-left text-sm">
                  For freelancers and solo founders who need the essentials.
                </p>

                <div className="mt-8">
                  <h3 className="text-xs font-medium uppercase tracking-wide text-left text-muted-foreground font-mono">
                    INCLUDING
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">
                        Send up to 10 invoices per month
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">2 connected banks</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">Unlimited bank accounts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">Financial overview</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">Time Tracker</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">50 inbox items per month</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">Customer management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">Export CSV & reports</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">Assistant</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">10GB Vault Storage</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">2 users</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 border-t border-border pt-8">
                  <Link href="https://app.midday.ai">
                    <Button
                      variant="outline"
                      className="w-full h-12 border border-foreground rounded-lg"
                    >
                      Start 14 day trial
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="flex flex-col p-8 border-2 border-ig-blue bg-card rounded-xl relative">
                <div className="absolute top-0 right-0 mr-4 mt-4 rounded-full text-muted-foreground text-[9px] font-normal border border-border px-2 py-1 font-mono">
                  Limited offer
                </div>
                <h2 className="text-xl font-semibold text-left mb-2 text-foreground">Pro</h2>
                <div className="mt-1 flex items-baseline">
                  <span className="text-[40px] font-medium tracking-tight line-through text-muted-foreground">
                    $99
                  </span>

                  <span className="ml-1 text-[40px] font-medium tracking-tight text-foreground">
                    49
                  </span>

                  <span className="ml-1 text-xl font-medium text-foreground">/mo</span>
                  <span className="ml-2 text-xs text-muted-foreground">
                    Excl. VAT
                  </span>
                </div>
                <p className="mt-4 text-muted-foreground text-left text-sm">
                  For growing teams and businesses that need more flexibility.
                </p>

                <div className="mt-8">
                  <h3 className="text-xs font-medium uppercase tracking-wide text-left text-muted-foreground font-mono">
                    INCLUDING
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">
                        Send up to 50 invoices per month
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">10 connected banks</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">Unlimited bank accounts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">Financial overview</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">Time Tracker</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">500 inbox items per month</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">Customer management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">Export CSV & reports</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">Assistant</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">100GB Vault Storage</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ig-blue flex-shrink-0 mr-2" />
                      <span className="text-sm text-foreground">10 users</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 border-t border-border pt-8">
                  <Link href="https://app.midday.ai">
                    <Button className="w-full h-12 bg-ig-blue hover:bg-ig-blue-hover text-white rounded-lg font-medium">Start 14 day trial</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-4 flex w-full max-w-5xl items-center justify-between">
              <p className="mt-4 text-xs text-muted-foreground font-mono">
                14 day trial (No credit card required)
              </p>

              <p className="mt-4 text-xs text-muted-foreground font-mono hidden md:block">
                Need more? Feel free to{" "}
                <Link href="/support" className="underline">
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

       <br />
       <br />
       <br />


       <br /><br />
      </div>

    )
};
