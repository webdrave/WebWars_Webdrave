import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function RegistrationPage() {
  return (
    <div className="mt-20 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Registration Categories</h1>

        <div className="overflow-x-auto rounded-2xl border">
          <Table>
            <TableHeader className="bg-gray-350 font-bold">
              <TableRow className="divide-x">
                <TableHead className="bg-muted font-medium text-center ">Registration Type</TableHead>
                <TableHead className="bg-muted font-medium text-center">Country of registration</TableHead>
                <TableHead className="bg-muted font-medium text-center">IEEE Member</TableHead>
                <TableHead className="bg-muted font-medium text-center">Non-IEEE Member</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y">
              <TableRow className="divide-x">
                <TableCell className="font-medium">Regular Author</TableCell>
                <TableCell className="text-center">Indian Foreigner</TableCell>
                <TableCell className="text-center">7,000 INR / 350 USD</TableCell>
                <TableCell className="text-center">9,000 INR / 400 USD</TableCell>
              </TableRow>
              <TableRow className="divide-x">
                <TableCell className="font-medium">Student Author</TableCell>
                <TableCell className="text-center">Indian Foreigner</TableCell>
                <TableCell className="text-center">5,000 INR / 200 USD</TableCell>
                <TableCell className="text-center">6,000 INR / 300 USD</TableCell>
              </TableRow>
              <TableRow className="divide-x">
                <TableCell className="font-medium">Industry</TableCell>
                <TableCell className="text-center">Indian Foreigner</TableCell>
                <TableCell className="text-center">7,000 INR / 350 USD</TableCell>
                <TableCell className="text-center">9,000 INR / 400 USD</TableCell>
              </TableRow>
              <TableRow className="divide-x">
                <TableCell className="font-medium">Attendee</TableCell>
                <TableCell className="text-center">Indian Foreigner</TableCell>
                <TableCell className="text-center">3,000 INR / 50 USD</TableCell>
                <TableCell className="text-center">3,500 INR / 100 USD</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 p-4 bg-blue-200 rounded-xl text-sm text-black">
          * Extra page charge of ₹1000/- INR per page Indian author and $ 50 per page International author will be
          chargeable to the author&apos;s during registration process.
        </div>
    </div>
    </div>

  )
}

