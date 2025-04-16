import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Zap,
  DollarSign,
  Settings,
  AlertTriangle,
  TerminalSquare,
  ScrollText,
  MousePointerClick,
  TrendingUp,
  CalendarClock,
  Wallet,
  Key,
  Workflow,
} from "lucide-react";

export default function FlowletLandingPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Flowlet</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Flowlet is your AI-powered Web3 financial sidekick. Let your wallet
          think, act, and automate—so you don&apos;t have to.
        </p>
        <Button size="lg">Get Started</Button>
      </section>

      {/* Problem Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Web3 Is Powerful—But Clunky
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4 space-y-2">
              <TerminalSquare className="text-primary" />
              <h3 className="text-lg font-medium">Steep Learning Curve</h3>
              <p className="text-muted-foreground">
                Navigating the world of wallets, smart contracts, and tokens
                often requires technical expertise that many users don&apos;t
                have.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-2">
              <ScrollText className="text-primary" />
              <h3 className="text-lg font-medium">Complex Interfaces</h3>
              <p className="text-muted-foreground">
                Most Web3 platforms feel like developer tools, not user-first
                products. Confusing designs create hesitation and errors.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-2">
              <MousePointerClick className="text-primary" />
              <h3 className="text-lg font-medium">Web2 Disconnect</h3>
              <p className="text-muted-foreground">
                Web3 workflows don&apos;t align with the smooth, intuitive
                experiences users are used to from traditional apps.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-2">
              <AlertTriangle className="text-primary" />
              <h3 className="text-lg font-medium">Repetitive Manual Actions</h3>
              <p className="text-muted-foreground">
                Every action needs your signature. Again and again. It slows
                things down and turns automation into a dream.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solution Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Meet Flowlet: Your Web3 Co-Pilot
        </h2>
        <p className="text-muted-foreground mb-4 text-center">
          Flowlet combines AI, smart contract accounts, and a powerful rule
          engine to take Web3 from complicated to effortless.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 space-y-2">
              <Zap className="text-primary" />
              <p>
                Just talk to Flowlet in plain English to set up complex crypto
                transactions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-2">
              <Settings className="text-primary" />
              <p>
                Create simple rules once, and Flowlet will remember and act on
                them automatically.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-2">
              <CheckCircle className="text-primary" />
              <p>
                Focus on what matters. Flowlet monitors, executes, and manages
                your finances 24/7.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Smarter Wallet, Smarter Life
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4 space-y-2">
              <TrendingUp className="text-primary" />
              <h3 className="text-lg font-medium">Automated Trading</h3>
              <p className="text-muted-foreground">
                Set conditions like &quot;Sell my ETH at $4,000&quot; and let
                Flowlet handle the timing and execution.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-2">
              <CalendarClock className="text-primary" />
              <h3 className="text-lg font-medium">Recurring Payments</h3>
              <p className="text-muted-foreground">
                Schedule routine transactions like rent or subscriptions
                once—Flowlet takes care of the rest.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-2">
              <Wallet className="text-primary" />
              <h3 className="text-lg font-medium">Smart Balance Transfers</h3>
              <p className="text-muted-foreground">
                Keep your wallet organized by setting thresholds. Automatically
                move funds to cold storage or other accounts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-2">
              <DollarSign className="text-primary" />
              <h3 className="text-lg font-medium">Revenue Allocation</h3>
              <p className="text-muted-foreground">
                Automatically convert portions of your income—like NFT
                sales—into stablecoins or other tokens.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-2">
              <Key className="text-primary" />
              <h3 className="text-lg font-medium">Delegated Access</h3>
              <p className="text-muted-foreground">
                Grant specific permissions to teammates or assistants without
                compromising control or security.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-2">
              <Workflow className="text-primary" />
              <h3 className="text-lg font-medium">Multi-Step Automations</h3>
              <p className="text-muted-foreground">
                Chain actions like &quot;Sell, convert to stablecoin, and
                stake&quot; into seamless flows triggered automatically.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Under the Hood</h2>
        <ul className="grid grid-cols-2 gap-4 text-muted-foreground">
          <li>
            <strong>AI Layer:</strong> OpenAI / Claude with custom prompt
            routing
          </li>
          <li>
            <strong>Smart Contract Accounts:</strong> Solana-compatible, secure
            abstractions
          </li>
          <li>
            <strong>Rule Engine:</strong> Verifiable, reliable, and designed for
            complex logic
          </li>
          <li>
            <strong>Oracle Layer:</strong> Chainlink + custom backend monitoring
          </li>
          <li>
            <strong>Web App:</strong> Built with Next.js, Tailwind, and Phantom
            Wallet integration
          </li>
        </ul>
      </section>

      {/* Roadmap */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Where We&apos;re Headed</h2>
        <div className="space-y-2 text-muted-foreground">
          <p>
            <strong>v1:</strong> AI-driven rule builder, smart transaction
            memory, and automated payments
          </p>
          <p>
            <strong>v2:</strong> Multi-user permissions, Layer-2 support, and
            mobile app
          </p>
          <p>
            <strong>v3:</strong> Real-world asset support, automated revenue
            flows, and DAO integrations
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Let Your Wallet Run the Show</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Flowlet is the future of Web3 finance—intelligent, automated, and
          always on. Ready to give your crypto life an upgrade?
        </p>
        <Button size="lg">Launch Flowlet</Button>
      </section>
    </main>
  );
}
