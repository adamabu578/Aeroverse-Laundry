"use client"

import { useState } from "react"
import Link from "next/link"
import { WashingMachineIcon as Washing, Shirt, Clock, MapPin, Phone, Mail, ArrowRight, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ServiceCard from "@/components/Service-Card"
import TestimonialCard from "@/components/Testimonial"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img src={'/assets/aeroverse.png'} className="h-15 w-20" />
            <span className="text-xl font-bold">Aeroverse Laundry</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-sky-600 transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-sky-600 transition-colors">
              Services
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-sky-600 transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-sky-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    href="/"
                    className="text-base font-medium hover:text-sky-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="#services"
                    className="text-base font-medium hover:text-sky-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="#pricing"
                    className="text-base font-medium hover:text-sky-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#contact"
                    className="text-base font-medium hover:text-sky-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:block">
            <Button className="bg-sky-600 hover:bg-sky-700">Book Now</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-blue-600">
                    Professional Laundry Services for Your Clothes
                  </h1>
                  <p className="max-w-[600px] text-gray-500 text-sm sm:text-base md:text-xl">
                    We take care of your clothes with professional cleaning services. Fast, reliable, and affordable.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button className="bg-sky-600 hover:bg-sky-700">Get Started</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="flex justify-center mt-6 lg:mt-0">
                <img
                  src="/assets/laundry-bg.jpg"
                  alt="Laundry Service"
                  className="rounded-lg object-cover w-full max-w-[600px] aspect-video overflow-hidden"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">Why Choose Us</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Quality Laundry Services
                </h2>
                <p className="max-w-[900px] text-gray-500 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide professional laundry services with attention to detail and care for your clothes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 py-8 sm:py-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 sm:p-6 shadow-sm">
                <div className="rounded-full bg-sky-100 p-3">
                  <Shirt className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">Expert Care</h3>
                <p className="text-center text-gray-500 text-sm sm:text-base">
                  Our professionals handle your clothes with care, ensuring they look their best.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 sm:p-6 shadow-sm">
                <div className="rounded-full bg-sky-100 p-3">
                  <Clock className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">Quick Turnaround</h3>
                <p className="text-center text-gray-500 text-sm sm:text-base">
                  Get your clothes back fast with our efficient service and timely delivery.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 sm:p-6 shadow-sm sm:col-span-2 md:col-span-1">
                <div className="rounded-full bg-sky-100 p-3">
                  <MapPin className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">Convenient Location</h3>
                <p className="text-center text-gray-500 text-sm sm:text-base">
                  We're located in the heart of the city, making drop-offs and pick-ups easy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">Our Services</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  What We Offer
                </h2>
                <p className="max-w-[900px] text-gray-500 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive laundry services tailored to your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-8 sm:py-12">
              <ServiceCard
                title="Wash & Fold"
                description="Regular washing and folding service for everyday clothes."
                icon={Shirt}
                price="$2.50/lb"
              />
              <ServiceCard
                title="Dry Cleaning"
                description="Professional dry cleaning for delicate fabrics and formal wear."
                icon={Shirt}
                price="From $8.99"
              />
              <ServiceCard
                title="Ironing"
                description="Expert ironing service to keep your clothes wrinkle-free."
                icon={Shirt}
                price="$3.00/item"
              />
              <ServiceCard
                title="Stain Removal"
                description="Specialized stain removal for tough spots and marks."
                icon={Shirt}
                price="From $5.99"
              />
              <ServiceCard
                title="Alterations"
                description="Professional alterations and repairs for your garments."
                icon={Shirt}
                price="From $10.99"
              />
              <ServiceCard
                title="Express Service"
                description="Same-day service for urgent laundry needs."
                icon={Shirt}
                price="+50% regular price"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">Pricing</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-gray-500 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that works best for your laundry needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 py-8 sm:py-12">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For occasional laundry needs</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-4xl font-bold">
                    $2.50<span className="text-sm font-normal text-gray-500">/lb</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Wash & Fold
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      48-hour turnaround
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg
                        className="mr-2 h-4 w-4"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                      Free delivery
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card className="border-sky-600 flex flex-col h-full relative">
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <div className="bg-sky-600 text-white text-xs rounded-full px-2 py-1 -mt-3">POPULAR</div>
                </div>
                <CardHeader>
                  <CardTitle>Standard</CardTitle>
                  <CardDescription>For regular laundry needs</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-4xl font-bold">
                    $49.99<span className="text-sm font-normal text-gray-500">/month</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Up to 30 lbs per month
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      24-hour turnaround
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Free delivery
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>For families and heavy users</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-4xl font-bold">
                    $89.99<span className="text-sm font-normal text-gray-500">/month</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Up to 60 lbs per month
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Same-day service
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Priority delivery
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">Choose Plan</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">Testimonials</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  What Our Customers Say
                </h2>
                <p className="max-w-[900px] text-gray-500 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our customers have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 py-8 sm:py-12">
              <TestimonialCard
                name="Adamu abu"
                role="Regular Customer"
                quote="Aeroverse Laundry has been my go-to laundry service for over a year now. Their attention to detail is amazing!"
                avatar="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                name="shaban kadala"
                role="Restaurant Owner"
                quote="As a restaurant owner, I need reliable laundry service for our linens. Aeroverse delivers consistently."
                avatar="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                name="emmanuel"
                role="Working Professional"
                quote="The monthly subscription saves me so much time. I never have to worry about laundry anymore!"
                avatar="/placeholder.svg?height=100&width=100"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">Contact Us</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Get In Touch
                </h2>
                <p className="max-w-[900px] text-gray-500 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions? We're here to help. Reach out to us.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 py-8 sm:py-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-sky-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base">123 kaduna zaria road</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-sky-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base">+2347036352800</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-sky-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base">info@aeroverselaundry.com</span>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm sm:text-base">
                    <div>Monday - Friday</div>
                    <div>7:00 AM - 8:00 PM</div>
                    <div>Saturday</div>
                    <div>8:00 AM - 6:00 PM</div>
                    <div>Sunday</div>
                    <div>10:00 AM - 4:00 PM</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your message"
                  />
                </div>
                <Button className="w-full bg-sky-600 hover:bg-sky-700">Send Message</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Ready to Experience Fresh, Clean Clothes?
                </h2>
                <p className="max-w-[900px]  xl:text-xl/relaxe  text-sky-100 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied customers who trust us with their laundry.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button className="bg-white text-sky-600 hover:bg-sky-50">Get Started Today</Button>
                <Button variant="outline" className="text-white border-white hover:bg-sky-700">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 bg-gray-900 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
              <img src={'/assets/aeroverse.png'} className="h-15 w-20" />
                <span className="text-xl font-bold text-white">Aeroverse Laundry</span>
              </div>
              <p className="text-sm text-gray-400">
                Professional laundry services for all your clothing needs. Quality, reliability, and convenience.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm hover:text-sky-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm hover:text-sky-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm hover:text-sky-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm hover:text-sky-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-sky-400 transition-colors">
                    Wash & Fold
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-sky-400 transition-colors">
                    Dry Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-sky-400 transition-colors">
                    Ironing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-sky-400 transition-colors">
                    Stain Removal
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Newsletter</h3>
              <p className="text-sm text-gray-400">Subscribe to our newsletter for tips and special offers.</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="bg-sky-600 hover:bg-sky-700">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Aeroverse Laundry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
