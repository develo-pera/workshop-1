import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LendForm from "@/components/LendForm";

const LendTab = () => (
  <Card className="mt-10">
    <CardHeader>
      <CardTitle>Lend your assets on Aave</CardTitle>
    </CardHeader>
    <CardContent>
      <LendForm />
    </CardContent>
  </Card>
);

export default LendTab;