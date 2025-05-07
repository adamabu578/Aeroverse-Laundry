import { type LucideIcon, Shirt } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon?: LucideIcon
  price: string
}

export default function ServiceCard({ title, description, icon: Icon = Shirt, price }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-md">
      <CardHeader className="space-y-2 sm:space-y-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <div className="rounded-full bg-sky-100 p-2 w-fit">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-sky-600" />
          </div>
          <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pt-2">
        <p className="text-sm sm:text-base text-gray-500">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-t pt-4 gap-1">
        <span className="font-bold text-sky-600 text-lg">{price}</span>
        <span className="text-xs sm:text-sm text-gray-500">Per service</span>
      </CardFooter>
    </Card>
  )
}
