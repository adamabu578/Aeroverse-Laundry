import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  avatar: string
}

export default function TestimonialCard({ name, role, quote, avatar }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6 flex-1">
        <div className="mb-3 sm:mb-4">
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6 text-sky-600"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.6.755-1.06 1.324-1.376.57-.316 1.155-.475 1.754-.475h.73c.247 0 .452-.205.452-.452V5.42c0-.247-.205-.452-.452-.452h-.737c-1.36 0-2.598.426-3.715 1.28-1.11.852-1.984 2.016-2.616 3.492-.634 1.467-.95 3.108-.95 4.916 0 1.14.292 2.198.875 3.174.584.975 1.35 1.745 2.3 2.31.95.563 1.996.846 3.136.846 1.14 0 2.185-.283 3.136-.85.95-.57 1.718-1.34 2.302-2.313.584-.977.875-2.035.875-3.175 0-1.048-.263-2.03-.79-2.95-.526-.92-1.236-1.64-2.13-2.16-.854-.52-1.758-.778-2.7-.778-.16 0-.41.02-.61.06.03-.16.05-.33.05-.5zm-3.676 3.676c-.46.46-.696 1.016-.696 1.666 0 .65.234 1.206.696 1.666.46.46 1.016.696 1.666.696.65 0 1.206-.234 1.666-.696.46-.46.696-1.016.696-1.666 0-.65-.234-1.206-.696-1.666-.46-.46-1.016-.696-1.666-.696-.65 0-1.206.234-1.666.696z" />
            <path d="M22.33 12.91c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.7-1.327-.83-.55-.13-1.07-.14-1.54-.03-.16-.95.1-1.63.41-2.23.3-.6.75-1.06 1.32-1.38.57-.32 1.15-.48 1.75-.48h.73c.25 0 .45-.2.45-.45V2.5c0-.25-.2-.45-.45-.45h-.74c-1.36 0-2.6.43-3.72 1.28-1.11.85-1.98 2.02-2.62 3.5-.63 1.47-.95 3.1-.95 4.92 0 1.14.3 2.2.88 3.17.58.98 1.35 1.75 2.3 2.31.95.56 2 .84 3.14.84 1.14 0 2.18-.28 3.13-.85.95-.57 1.72-1.34 2.3-2.31.58-.98.88-2.04.88-3.17 0-1.05-.27-2.03-.8-2.96-.53-.92-1.23-1.64-2.13-2.16-.85-.52-1.76-.78-2.7-.78-.16 0-.41.02-.61.06.03-.16.05-.33.05-.5zm-3.68 3.68c-.46.46-.7 1.02-.7 1.67 0 .65.24 1.2.7 1.67.46.46 1.02.7 1.67.7.65 0 1.2-.24 1.67-.7.46-.46.7-1.02.7-1.67 0-.65-.24-1.2-.7-1.67-.46-.46-1.02-.7-1.67-.7-.65 0-1.2.24-1.67.7z" />
          </svg>
        </div>
        <p className="text-gray-600 italic text-sm sm:text-base">{quote}</p>
      </CardContent>
      <CardFooter className="border-t pt-3 pb-3 sm:pt-4 sm:pb-4 px-4 sm:px-6">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
            <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm sm:text-base">{name}</p>
            <p className="text-xs sm:text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
