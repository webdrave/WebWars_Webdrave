import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function RegistrationPage() {
  return (
    <div className="mt-20 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Registration Categories</h1>

        <div className="overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-muted font-medium">Registration Type</TableHead>
                <TableHead className="bg-muted font-medium">Country of registration</TableHead>
                <TableHead className="bg-muted font-medium">IEEE Member</TableHead>
                <TableHead className="bg-muted font-medium">Non-IEEE Member</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Regular Author</TableCell>
                <TableCell>Indian Foreigner</TableCell>
                <TableCell>7,000 INR / 350 USD</TableCell>
                <TableCell>9,000 INR / 400 USD</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Student Author</TableCell>
                <TableCell>Indian Foreigner</TableCell>
                <TableCell>5,000 INR / 200 USD</TableCell>
                <TableCell>6,000 INR / 300 USD</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Industry</TableCell>
                <TableCell>Indian Foreigner</TableCell>
                <TableCell>7,000 INR / 350 USD</TableCell>
                <TableCell>9,000 INR / 400 USD</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Attendee</TableCell>
                <TableCell>Indian Foreigner</TableCell>
                <TableCell>3,000 INR / 50 USD</TableCell>
                <TableCell>3,500 INR / 100 USD</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-blue-900">
          * Extra page charge of ₹1000/- INR per page Indian author and $ 50 per page International author will be
          chargeable to the author&apos;s during registration process.
        </div>
    </div>
    </div>

  )
}

