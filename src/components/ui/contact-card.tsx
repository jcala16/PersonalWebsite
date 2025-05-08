//Using https://formspree.io/ to handle contact form

"use client" //neccesary for forms that require input from user
import { useForm, ValidationError } from "@formspree/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mpwdrglg"); //my hashid from formspree

  if (state.succeeded) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-green-600 font-semibold">Thanks for reaching out!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input
              id="name"
              name="name"
              required
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              placeholder="Your name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              placeholder="Your email"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="flex min-h-[120px] w-full rounded-md border px-3 py-2 text-sm"
              placeholder="Your message"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <Button type="submit" className="w-full" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
