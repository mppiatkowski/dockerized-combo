import { z } from "zod";

export const noteSchema = z.object({
  title: z.string()
    .min(1, "Title is required")
    .max(100, "Title must be at most 100 characters"),
  description: z.string()
    .max(800, "Description must be at most 800 characters"),
});

export type NoteBody = z.infer<typeof noteSchema>;
