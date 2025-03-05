"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import ChatFooter from "@/components/chat/footer";

interface ChatInputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // Updated: handleSubmit now expects an object with a "message" property
  handleSubmit: (data: { message: string }) => Promise<void>;
  isLoading: boolean;
}

export default function ChatInput({
  handleInputChange,
  handleSubmit,
  isLoading,
}: ChatInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const { register, handleSubmit: formHandleSubmit, reset } = useForm({
    defaultValues: { message: "" },
  });

  const onSubmit = async (data: { message: string }) => {
    await handleSubmit(data);
    reset();
  };

  return (
    <div className="z-10 flex flex-col justify-center items-center fixed bottom-0 w-full p-5 bg-white dark:bg-gray-900 shadow-[0_-10px_15px_-2px_rgba(255,255,255,1)] text-base">
      <div className="max-w-screen-lg w-full">
        <Form>
          <form
            onSubmit={formHandleSubmit(onSubmit)}
            className={`flex w-full p-1 border rounded-full shadow-sm ${
              isFocused ? "ring-2 ring-ring ring-offset-2" : ""
            }`}
          >
            <FormField
              control={null}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormControl>
                    <input
                      {...register("message", {
                        onChange: (e) => handleInputChange(e),
                      })}
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
              disabled={formHandleSubmit(() => {}) ? false : isLoading} // Disabled condition can be customized as needed
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </form>
        </Form>
      </div>
      <ChatFooter />
    </div>
  );
}

