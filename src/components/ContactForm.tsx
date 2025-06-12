
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InlineWidget } from "react-calendly"
import { supabase } from '@/integrations/supabase/client'
import { useState } from "react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(1, {
    message: "Please select a subject.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)
      console.log('Starting form submission with values:', values)
      
      // Insert into contact_submissions table
      const { error: submissionError } = await supabase
        .from('contact_submissions')
        .insert([{
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        }])

      if (submissionError) {
        console.error('Database submission error:', submissionError)
        throw submissionError
      }

      // If database submission was successful, send email
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: { 
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message
        },
      })

      if (emailError) {
        console.error('Email sending error:', emailError)
        // Don't throw here, as the form submission was successful
        toast({
          title: "Message saved but email notification failed",
          description: "We received your message but couldn't send the email notification. We'll still get back to you soon.",
        })
      } else {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        })
      }
      
      form.reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Tabs defaultValue="form" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="form">Contact Form</TabsTrigger>
        <TabsTrigger value="calendar">Schedule Meeting</TabsTrigger>
      </TabsList>
      <TabsContent value="form">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the type of inquiry" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="brand-partnership">Brand Partnership Inquiry</SelectItem>
                      <SelectItem value="campaign-content">Campaign & Content Services</SelectItem>
                      <SelectItem value="strategy-naming">Strategy & Naming Help</SelectItem>
                      <SelectItem value="design-systems">Design System Collaboration</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project or how we can help..." 
                      className="min-h-[150px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value="calendar">
        <div className="h-[600px]">
          <InlineWidget 
            url="https://calendly.com/solariis-info/30min"
            styles={{
              height: '100%',
              width: '100%'
            }}
          />
        </div>
      </TabsContent>
    </Tabs>
  )
}
