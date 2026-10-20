import { z } from "zod";
export const profileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter at least two characters.")
    .max(60, "Use 60 characters or fewer."),
});
export type ProfileInput = z.infer<typeof profileSchema>;
