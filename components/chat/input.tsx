"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import ChatFooter from "@/components/chat/footer";

interface ChatInputProps {
  // Fired whenever the user types, so the parent can track or process the text
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // Called when the user submits the form
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  // If you still need to track text in the parent, keep input and isLoading,
  // but we won't directly bind input to the value of the field
  input: string;
  isLoading: boolean;
}

export default function ChatInput({
  handleInputChange,
  handleSubmit,
  input,
  isLoading,
}: ChatInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  // Setup for React Hook Form
  const form = useForm({
    defaultValues: {
      message: "", // The field name "message" matches below
    },
  });

  return (
    <>
      <div className="z-10 flex flex-col justify-center items-center fixed bottom-0 w-full p-5 bg-white dark:bg-gray-900 shadow-[0_-10px_15px_-2px_rgba(255,255,255,1)] text-base">
        <div className="max-w-screen-lg w-full">
          <Form {...form}>
            <form
              onSubmit={handleSubmit}
              className={`flex w-full p-1 border rounded-full shadow-sm ${
                isFocused ? "ring-2 ring-ring ring-offset-2" : ""
              }`}
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <input
                        {...field}
                        // Combine RHF's onChange with parent's handleInputChange
                        onChange={(e) => {
                          field.onChange(e);
                          handleInputChange(e);
                        }}
                        // Use field.value so placeholder works when empty
                        value={field.value}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="Ask more about Warby Parker here!"
                        disabled={isLoading}
                        className="w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
                disabled={form.getValues("message").trim() === "" || isLoading}
              >
                <ArrowUp className="w-5 h-5" />
              </Button>
            </form>
          </Form>
        </div>
        <ChatFooter />
      </div>
    </>
  );
}




